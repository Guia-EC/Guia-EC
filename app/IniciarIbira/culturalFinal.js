"use client";
import { useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Rota from "../../components/rota";
import Paradas from "../../components/paradas";
import styles from "./culturalFinal.module.css";

const IniciarRoteiro201 = () => {
  const onVoltarIconClick = useCallback(() => {
    // Please sync "Seleção de Tipo de Roteiro 2.0" to the project
  }, []);

  const onBotoIniciarRoteiroClick = useCallback(() => {
    window.open("https://maps.app.goo.gl/p7bYMRDYXkdxYqAq6");
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
          src="/Voltar.svg"
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
          <Rota />
          <Paradas />
        </Box>
      </section>
      <Button
        className={styles.botoIniciarRoteiro}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "20",
          background: "#8662b4",
          borderRadius: "30px",
          "&:hover": { background: "#8662b4" },
          width: 369,
          height: 100,
        }}
        onClick={onBotoIniciarRoteiroClick}
      >
        Iniciar rota com Google
      </Button>
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
          <div className={styles.linaBoBardi}>1957-1968 Lina Bo Bardi</div>
          <div className={styles.avenidaPaulista1578}>
            Avenida Paulista, 1578 Cerqueira César
          </div>
        </Box>
      </section>
    </Box>
  );
};

export default IniciarRoteiro201