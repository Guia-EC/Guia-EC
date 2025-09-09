"use client";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import InfoSesc from "../../components/info-sesc";
import { useRouter } from "next/navigation";
import styles from "./info-sesc204.module.css";

const InfoSesc204 = () => {
  const router = useRouter();

  const onBotoFazerRoteiroClick = useCallback(() => {
    router.push("/seleo-de-tipo-de-roteiro2023");
  }, [router]);

  return (
    <Box className={styles.infoSesc20}>
      <InfoSesc estado="Padrão" />
      <section
        className={styles.botoFazerRoteiro}
        onClick={onBotoFazerRoteiroClick}
      >
        <Typography
          className={styles.fazerUmRoteiro}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "400" }}
        >
          Fazer um roteiro pelo Sesc
        </Typography>
      </section>
    </Box>
  );
};

export default InfoSesc204;
