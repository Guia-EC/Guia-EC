"use client";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import InfoIbirapuera from "../../components/info-ibirapuera";
import { useRouter } from "next/navigation";
import styles from "./info-ibira202.module.css";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const InfoIbira202 = () => {
  const router = useRouter();

  const onBotoFazerRoteiroClick = useCallback(() => {
    router.push("/seleo-de-tipo-de-roteiro2014");
  }, [router]);

  return (
    <Box className={styles.infoIbira20}>
      <InfoIbirapuera estado="Padrão" />
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
          Fazer um roteiro pelo Ibira
        </Typography>
      </section>
      <ScrollToTopButton />
    </Box>
  );
};

export default InfoIbira202;
