"use client";
import { useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Rota from "../../components/RotaIbiraNatural";
import Paradas from "../../components/ParadasIbiraNatural";
import styles from "./IbiraNatural.module.css";
import { useRouter } from "next/navigation";

const IbiraNatural = () => {

  const router = useRouter();

  const onVoltarIconClick = useCallback(() => {
    router.back();
  }, [router]);

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
          <Rota />
          <Paradas />
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
          <div className={styles.linaBoBardi}>1951-2005: Oscar Nyemeier, Zenon Lotufo, Hélio Uchôa e Eduardo
              Kneese de Melo.</div>
          <div className={styles.avenidaPaulista1578}>
            Avenida Pedro Álvares Cabral com avenida República do Líbano
          </div>
        </Box>
      </section>
    </Box>
  );
};

export default IbiraNatural