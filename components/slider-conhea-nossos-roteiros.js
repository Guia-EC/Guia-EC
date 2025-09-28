"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import styles from "./slider-conhea-nossos-roteiros.module.css";

const SliderConheaNossosRoteiros = ({ className = "" }) => {
  const router = useRouter();
  
  const handleSelecionarRoteiro = (categoria) => {
    // AQUI ESTÁ A MUDANÇA PRINCIPAL
    router.push(`/roteiros?filtro=${categoria}`);
  };

  return (
    <Box className={[styles.sliderConheaNossosRoteiros, className].join(" ")}>
      <Box
        className={styles.roteirosRaiz}
        onClick={() => handleSelecionarRoteiro("Raiz")}
      >
        <Box className={styles.tag}>
          <div className={styles.raiz}>Raiz</div>
        </Box>
      </Box>
      <Box
        className={styles.roteirosNaturais}
        onClick={() => handleSelecionarRoteiro("Natural")}
      >
        <Box className={styles.sliderConheaNossosRoteirosTag}>
          <div className={styles.raiz}>Natural</div>
        </Box>
      </Box>
      <Box
        className={styles.sliderConheaNossosRoteirosRoteirosRaiz}
        onClick={() => handleSelecionarRoteiro("Cultural")}
      >
        <Box className={styles.tag2}>
          <div className={styles.raiz}>Cultural</div>
        </Box>
      </Box>
    </Box>
  );
};

SliderConheaNossosRoteiros.propTypes = {
  className: PropTypes.string,
};

export default SliderConheaNossosRoteiros;
