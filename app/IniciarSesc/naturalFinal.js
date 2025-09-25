"use client";
import { useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Rota1 from "../../components/rota1";
import Paradas1 from "../../components/paradas1";
import { useRouter } from "next/navigation";
import styles from "./naturalFinal.module.css";

const IniciarRoteiro202 = () => {

  const router = useRouter();

  const onVoltarIconClick = useCallback(() => {
    router.push("/seleo-de-tipo-de-roteiro2023");
  }, [router]);

  const onBotoIniciarRoteiroClick = useCallback(() => {
    window.open("https://maps.app.goo.gl/uChwBTxnkNbBg1nR9");
  }, []);

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
          background: "#519328",
          borderRadius: "30px",
          "&:hover": { background: "#519328" },
          width: 370,
          height: 100,
        }}
        onClick={onBotoIniciarRoteiroClick}
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

export default IniciarRoteiro202;
