"use client";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Body from "../../components/body2";
import styles from "./MaspCultural.module.css"; // Certifique-se que este caminho está correto
import { useRouter } from "next/navigation";

import { useAuth } from "../../context/AuthContext"; // <-- Verifique se o caminho está certo
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const MaspCultural = () => {

  const { user } = useAuth();
  const supabase = createClientComponentClient();
  
    // <-- 3. DEFINIR O ID E O LINK DESTE ROTEIRO
    //    Você precisa pegar o ID exato deste roteiro na sua tabela 'roteiros' do Supabase.
    const ROTEIRO_ID_MASP = 1; // <-- MUDE AQUI para o ID correto
    const GOOGLE_MAPS_LINK = "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Teatro+Gazeta&waypoints=MASP|Restaurante+A+Baianeira" // <-- Coloque o link correto aqui
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
            roteiro_id: ROTEIRO_ID_MASP, // Lembre-se que essa variável precisa estar definida no seu componente
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
    // Usamos um fragmento <> para ter dois elementos no nível principal
    <>
      {/* 1. Todo o conteúdo visível da sua página vai dentro desta div com a classe "noPrint" */}
      <Box className={`${styles.iniciarRoteiro20} ${styles.noPrint}`}>
        <section className={styles.imagemHero}>
          <Image
            className={styles.voltarIcon}
            width={0}
            height={0}
            sizes="100vw"
            alt=""
            src="/botao-voltar-branco.svg"
            onClick={onVoltarIconClick}
          />
        </section>
        <Body />

        {/*A PARTIR DAQUI: BOTÕES DE INICIAR E IMPRIMIR ROTEIRO*/}
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
                display: 'block !important',
              },
              
            }}>
    
            <Typography
              variantMapping={{ inherit: "Button" }}
              sx={{ fontWeight: "600", fontSize: "30px", color: "white", textAlign: 'center' }}
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
                display: 'block !important',
              }, 
            }}>
              
            <Image
              width={100}
              height={100}
              src="/QRCODE.svg"
            />
          </Box>
        </Box>
        <Box // BOTÃO DE INICIAR ROTA!
          className={styles.botoIniciarRoteiro}
          sx={{
            cursor: 'pointer',
            '@media (max-width: 767px)': {
              display: 'block !important',
            },
            '@media (min-width: 768px)': {
              display: 'none !important',
            },
          }}
          onClick={handleIniciarRoteiro}
        >
          <Typography
            variantMapping={{ inherit: "Button" }}
            sx={{ fontWeight: "600", fontSize: "30px", color: "white", textAlign: 'center' }}
          >
            Iniciar Rota com Google
          </Typography>
        </Box>
    
        {/*------------------------------------FIM DOS BOTÕES-------------------------------------------*/}

        <section className={styles.ttulo}>
          <Box className={styles.iniciarRoteiro20Ttulo}>
            <Typography
              className={styles.masp}
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{ fontWeight: "700", lineHeight: "4.375rem" }}
            >
              MASP
            </Typography>
            <Typography
              className={styles.museuDeArte}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "600", fontSize: "var(--font-size-20)" }}
            >
              Museu de Arte de São Paulo
            </Typography>
          </Box>
          <Box className={styles.descrio}>
            <div>1957-1968 Lina Bo Bardi</div>
            <div>Avenida Paulista, 1578 Cerqueira César</div>
          </Box>
        </section>
      </Box>

      {/* 2. Aqui está a área de impressão. Ela fica fora da div "noPrint". */}
      {/* Ela é invisível na tela, mas será a única coisa visível na impressão. */}
      <section className={`${styles.printableArea} print-visible`}>
        <img
          src="/roteiro-masp.jpg" // O caminho para a sua imagem
          alt="Conteúdo do roteiro a ser impresso"
          className={styles.printImage}
        />
      </section>
    </>
  );
};

export default MaspCultural;