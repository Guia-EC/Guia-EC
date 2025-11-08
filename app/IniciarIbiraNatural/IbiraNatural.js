"use client";
import { useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Rota from "../../components/RotaIbiraNatural";
import Paradas from "../../components/ParadasIbiraNatural";
import styles from "./IbiraNatural.module.css";
import { useRouter } from "next/navigation";

import { useAuth } from "../../context/AuthContext"; // <-- Verifique se o caminho está certo
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


const IbiraNatural = () => {

    const { user } = useAuth();
    const supabase = createClientComponentClient();
  
    // <-- 3. DEFINIR O ID E O LINK DESTE ROTEIRO
    //    Você precisa pegar o ID exato deste roteiro na sua tabela 'roteiros' do Supabase.
    const ROTEIRO_ID_IBIRA = 5; // <-- MUDE AQUI para o ID correto
    const GOOGLE_MAPS_LINK = "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=YUCAFE&waypoints=Loving+Hut+Vila+Mariana|Parque+Ibirapuera|Viveiro+Manequinho+Lopes"; // <-- Coloque o link correto aqui


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
            roteiro_id: ROTEIRO_ID_IBIRA, // Lembre-se que essa variável precisa estar definida no seu componente
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
              fontSize: "20",
              background: "#519328",
              borderRadius: "30px",
              "&:hover": { background: "#519328" },
              width: 369,
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
          <Box className={styles.pontosEParadas}>
            <Rota />
            <Paradas />
          </Box>
        </section>

        <section className={styles.iniciarRoteiro20Ttulo}>
          <Box className={styles.ttulo2}>
            <Typography
              className={styles.prqIbirapuera}
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{ fontWeight: "700" }}
            >
              Prq. Ibirapuera
            </Typography>
            <Typography
              className={styles.parqueIbirapuera}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "600", fontSize: "var(--font-size-20)" }}
            >
              Parque Ibirapuera
            </Typography>
          </Box>
          <Box className={styles.descrio}>
            <div className={styles.linaBoBardi}>1951-2005: Oscar Nyemeier, Zenon Lotufo, Hélio Uchôa e Eduardo
                Kneese de Melo.</div>
            <div className={styles.avenidaPaulista1578}>
              Avenida Pedro Álvares Cabral com avenida República do Líbano
            </div>
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

export default IbiraNatural