"use client";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import InfoMasp from "../../components/info-masp";
import { useRouter } from "next/navigation";
import styles from "./info-masp204.module.css";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const InfoMasp204 = () => {
  const router = useRouter();

  const onBotoFazerRoteiroClick = useCallback(() => {
    router.push("/seleo-de-tipo-de-roteiro207");
  }, [router]);

  return (
    <Box className={styles.infoMasp20}>
      <InfoMasp estado="Padrão" />
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
          Fazer um roteiro pelo MASP
        </Typography> 
      </section>
      <ScrollToTopButton />
    </Box>
  );
};

export default InfoMasp204;
