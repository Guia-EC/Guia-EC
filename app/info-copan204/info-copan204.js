"use client";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import InfoCopan from "../../components/info-copan";
import { useRouter } from "next/navigation";
import styles from "./info-copan204.module.css";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const InfoCopan204 = () => {
  const router = useRouter();

  const onBotoFazerRoteiroClick = useCallback(() => {
    router.push("/seleo-de-tipo-de-roteiro207");
  }, [router]);

  return (
    <Box className={styles.infoCopan20}>
      <InfoCopan estado="Padrão" />
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
          Fazer um roteiro pelo Copan
        </Typography> 
      </section>
      <ScrollToTopButton />
    </Box>
  );
};

export default InfoCopan204;
