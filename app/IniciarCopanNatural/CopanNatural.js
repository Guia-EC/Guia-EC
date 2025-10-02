"use client";
import { useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import RotaCopanNatural from "../../components/RotaCopanNatural";
import ParadasCopanNatural from "../../components/ParadasCopanNatural";
import styles from "./CopanNatural.module.css";
import { useRouter } from "next/navigation";

import { useAuth } from "../../context/AuthContext"; // <-- Verifique se o caminho está certo
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


const IniciarRoteiroCopanNatural = () => {
   // <-- 2. PEGAR O USUÁRIO E INICIAR O SUPABASE
    const { user } = useAuth();
    const supabase = createClientComponentClient();
  
    // <-- 3. DEFINIR O ID E O LINK DESTE ROTEIRO
    //    Você precisa pegar o ID exato deste roteiro na sua tabela 'roteiros' do Supabase.
    const ROTEIRO_ID_COPAN = 11; // <-- MUDE AQUI para o ID correto
    const GOOGLE_MAPS_LINK = "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Magg+Cafe&waypoints=Espaco+VHMOR|Copan|Existe+Flor+em+Sao+Paulo"; // <-- Coloque o link correto aqui
  

  const router = useRouter();

  const onVoltarIconClick = useCallback(() => {
    router.back();
  }, [router]);

      // <-- 4. ATUALIZAR A FUNÇÃO DO BOTÃO
  const handleIniciarRoteiro = async () => {
// 1. Se o usuário ESTIVER logado, tentamos salvar no histórico
    if (user) {
      try {
        const { error } = await supabase
          .from('historico_roteiros')
          .insert({
            user_id: user.id,
            roteiro_id: ROTEIRO_ID_COPAN, // Lembre-se que essa variável precisa estar definida no seu componente
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
          <RotaCopanNatural />
          <ParadasCopanNatural />
        </Box>
      </section>
      <Button
        className={styles.botoIniciarRoteiro}
        variant="contained"
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
        }}
        onClick={handleIniciarRoteiro}
      >
        Iniciar rota com Google
      </Button>
      <section className={styles.iniciarRoteiro20Ttulo}>
        <Box className={styles.ttulo2}>
          <Typography
            className={styles.copan}
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{ fontWeight: "700" }}
          >
            Copan
          </Typography>
          <Typography
            className={styles.copan}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", fontSize: "var(--font-size-20)" }}
          >
            Edifício Copan
          </Typography>
        </Box>
        <Box className={styles.descrio}>
          <div className={styles.linaBoBardi}>1951-1966 Oscar Niemeyer</div>
          <div className={styles.avenidaPaulista1578}>
            Avenida Ipiranga, 200 República
          </div>
        </Box>
      </section>
    </Box>
  );
};

export default IniciarRoteiroCopanNatural