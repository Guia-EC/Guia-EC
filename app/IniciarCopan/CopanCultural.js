"use client";
// import { useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import RotaCopanCultural from "../../components/RotaCopanCultural";
import ParadasCopanCultural from "../../components/ParadasCopanCultural";
import styles from "./CopanCultural.module.css";
import { useRouter } from "next/navigation";

import { useAuth } from "../../context/AuthContext"; // <-- Verifique se o caminho está certo
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const IniciarRoteiroCopanCultural = () => {

  // <-- 2. PEGAR O USUÁRIO E INICIAR O SUPABASE
  const { user } = useAuth();
  const supabase = createClientComponentClient();

  // <-- 3. DEFINIR O ID E O LINK DESTE ROTEIRO
  //    Você precisa pegar o ID exato deste roteiro na sua tabela 'roteiros' do Supabase.
  const ROTEIRO_ID_COPAN = 1; // <-- MUDE AQUI para o ID correto
  const GOOGLE_MAPS_LINK = "https://www.google.com/maps/dir/?api=1&destination=Edificio+Copan,+Av.+Ipiranga,+200+-+República,+São+Paulo+-+SP"; // <-- Coloque o link correto aqui

  const onVoltarIconClick = () => { // Removi o useCallback para simplificar
    router.back();
  };

  const router = useRouter();

    // <-- 4. ATUALIZAR A FUNÇÃO DO BOTÃO
  const handleIniciarRoteiro = async () => {
    // Primeiro, checa se há um usuário logado
    if (!user) {
      alert("Faça login para salvar seu roteiro no histórico!");
      router.push("/login"); // Opcional: redireciona para o login
      return;
    }

    try {
      // Tenta inserir o registro no banco
      const { error } = await supabase
        .from('historico_roteiros')
        .insert({
          user_id: user.id,
          roteiro_id: ROTEIRO_ID_COPAN, // Usa a constante que definimos
        });

      if (error) throw error; // Se der erro, ele vai para o 'catch'

      // Se deu tudo certo, abre o Google Maps
      window.open(GOOGLE_MAPS_LINK, '_blank');

    } catch (error) {
      console.error("Erro ao salvar histórico:", error.message);
      alert("Não foi possível salvar o roteiro. Tente novamente.");
    }
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
          <RotaCopanCultural />
          <ParadasCopanCultural />
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
          background: "#8662b4",
          borderRadius: "30px",
          "&:hover": { background: "#8662b4" },
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

export default IniciarRoteiroCopanCultural