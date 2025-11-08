"use client";
import { useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Rota1 from "../../components/rota1";
import Paradas1 from "../../components/paradas1";
import { useRouter } from "next/navigation";
import styles from "./naturalFinal.module.css";

import { useAuth } from "../../context/AuthContext"; // <-- Verifique se o caminho está certo
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const IniciarRoteiro202 = () => {

  const { user } = useAuth();
   const supabase = createClientComponentClient();
  
    // <-- 3. DEFINIR O ID E O LINK DESTE ROTEIRO
    //    Você precisa pegar o ID exato deste roteiro na sua tabela 'roteiros' do Supabase.
    const ROTEIRO_ID_SESC = 7; // <-- MUDE AQUI para o ID correto
    const GOOGLE_MAPS_LINK = "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Sesc+24+de+Maio&waypoints=Parque+Augusta|Restaurante+Its+Vegan"; // <-- Coloque o link correto aqui

  const router = useRouter();

  const onVoltarIconClick = useCallback(() => {
    router.back();
  }, [router]);

          // Função simplificada que apenas chama a impressão do navegador
    const handlePrint = useCallback(() => {
      window.print();
    }, []);

            // <-- 4. ATUALIZAR A FUNÇÃO DO BOTÃO
  const handleIniciarRoteiro = async () => {
// 1. Se o usuário ESTIVER logado, tentamos salvar no histórico
    if (user) {
      try {
        const { error } = await supabase
          .from('historico_roteiros')
          .insert({
            user_id: user.id,
            roteiro_id: ROTEIRO_ID_SESC, // Lembre-se que essa variável precisa estar definida no seu componente
          });

        if (error) throw error;

      } catch (error) {
        console.error("Erro ao salvar histórico:", error.message);
        // Opcional: Avisa o usuário que o histórico falhou, mas o mapa vai abrir
        alert("Não foi possível salvar em seu histórico, mas você ainda pode fazer o roteiro.");
      }
    }

    // 2. Independentemente de estar logado ou não, ABRIMOS O MAPA
    // Lembre-se que GOOGLE_MAPS_LINK precisa estar definido no seu componente
    window.open(GOOGLE_MAPS_LINK, '_blank');
  };

  return (
    <>
      <Box className={styles.iniciarRoteiro20}>
        <section className={styles.imagemHero}>
          <Image
            className={styles.voltarIcon}
            width={24}
            height={38}
            sizes="100vw"
            alt=""
            src="/botao-voltar-branco.svg"
            onClick={onVoltarIconClick}
          />
        </section>

        <Box className={styles.botaoEQrcode}>
            <Box // BOTÃO DE IMPRIMIR ROTEIRO!
              className={styles.botoIniciarRoteiro}
              onClick={handlePrint} // O onClick agora chama a função de impressão direta
              sx={{
                cursor: 'pointer',
                '@media (max-width: 767px)': {
                  display: 'none !important',
                },
                '@media (min-width: 768px)': {
                  display: 'block',
                },
                
              }}>
      
              <Typography
                variantMapping={{ inherit: "Button" }}
                sx={{ fontWeight: "600", fontSize: "22px", color: "white", textAlign: 'center' }}
              >
                Imprimir Roteiro
              </Typography>
            </Box>
            <Box className={styles.qrCode} sx={{
                cursor: 'pointer',
                '@media (max-width: 767px)': {
                  display: 'none !important',
                },
                '@media (min-width: 768px)': {
                  display: 'block',
                }, 
              }}>
            </Box>
          </Box>
          
          <Box // BOTÃO DE INICIAR ROTA!
            className={styles.botoIniciarRoteiro}
            sx={{
              textTransform: "none",
              fontWeight: "600",
              color: "#fff",
              fontSize: "20px",
              background: "#519328",
              borderRadius: "30px",
              "&:hover": { background: "#519328" },
              width: 370,
              height: 100,
              cursor: 'pointer',
              '@media (max-width: 767px)': {
                display: 'block',
              },
              '@media (min-width: 768px)': {
                display: 'none !important',
              },
            }}
            onClick={handleIniciarRoteiro}
          >
            <Typography
              variantMapping={{ inherit: "Button" }}
              sx={{ fontWeight: "600", fontSize: "22px", color: "white", textAlign: 'center'}}
            >
              Iniciar Rota com Google
            </Typography>
        </Box>

        <section className={styles.body}>
          <Box className={styles.ttulo}>
            <Typography
              className={styles.roteiroSugerido}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "600" }}
            >
              Roteiro Sugerido
            </Typography>
          </Box>
          <Box className={styles.pontosECards}>
            <Rota1 />
            <Paradas1 />
          </Box>
        </section>

        <section className={styles.iniciarRoteiro20Ttulo}>
          <Box className={styles.ttulo2}>
            <Typography
              className={styles.sesc24}
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{ fontWeight: "700" }}
            >{`Sesc 24 `}</Typography>
            <Typography
              className={styles.sesc24De}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "600", fontSize: "var(--font-size-20)" }}
            >
              Sesc 24 de Maio
            </Typography>
          </Box>
          <Box className={styles.descrio}>
            <div className={styles.pauloMendesDa}>
              2000-2017: Paulo Mendes da Rocha, MMBB (Fernando de Mello Franco,
              Marta Moreira, Milton Braga)
            </div>
            <div className={styles.rua24De}>Rua 24 de Maio, 109 - Centro</div>
          </Box>
        </section>
      </Box>
      <section className={`${styles.printableArea} print-visible`}>
        <img
          src="/Sesc-Raiz.png" // O caminho para a sua imagem
          alt="Conteúdo do roteiro a ser impresso"
          className={styles.printImage}
        />
      </section>
    </>
  );
};

export default IniciarRoteiro202;
