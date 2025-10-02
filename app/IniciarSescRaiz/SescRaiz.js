"use client";
import { useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Rota1 from "../../components/RotaSescRaiz";
import Paradas1 from "../../components/ParadasSescRaiz";
import { useRouter } from "next/navigation";
import styles from "./SescRaiz.module.css";

import { useAuth } from "../../context/AuthContext"; // <-- Verifique se o caminho está certo
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const SescRaiz = () => {

  const { user } = useAuth();
  const supabase = createClientComponentClient();
  
    // <-- 3. DEFINIR O ID E O LINK DESTE ROTEIRO
    //    Você precisa pegar o ID exato deste roteiro na sua tabela 'roteiros' do Supabase.
  const ROTEIRO_ID_SESC = 8; // <-- MUDE AQUI para o ID correto
  const GOOGLE_MAPS_LINK = "https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Bar+e+Lanches+Estadao&waypoints=Sesc+24+de+Maio|Praca+da+Republica"; // <-- Coloque o link correto aqui


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
        <Box className={styles.pontosECards}>
          <Rota1 />
          <Paradas1 />
        </Box>
      </section>
      <Button
        className={styles.botoIniciarRoteiro}
        variant="contained"
        sx={{
          textTransform: "none",
          fontWeight: "600",
          color: "#fff",
          fontSize: "20px",
          background: "#ff9f1c",
          borderRadius: "30px",
          "&:hover": { background: "#ff9f1c" },
          width: 370,
          height: 100,
        }}
        onClick={handleIniciarRoteiro}
      >
        Iniciar rota com Google
      </Button>
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
  );
};

export default SescRaiz;
