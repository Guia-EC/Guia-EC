"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import styles from "./slider-conhea-nossos-roteiros.module.css";

const SliderConheaNossosRoteiros = ({ className = "" }) => {
  const router = useRouter();

  const onRoteirosRaizContainerClick = useCallback(() => {
    router.push("/roteiros-raiz204");
  }, [router]);

  const onRoteirosNaturaisContainerClick = useCallback(() => {
    router.push("/roteiros-naturais204");
  }, [router]);

  const onRoteirosRaizContainerClick1 = useCallback(() => {
    router.push("/roteiros-culturais204");
  }, [router]);

  return (
    <Box className={[styles.sliderConheaNossosRoteiros, className].join(" ")}>
      <Box
        className={styles.roteirosRaiz}
        onClick={onRoteirosRaizContainerClick}
      >
        <Box className={styles.tag}>
          <div className={styles.raiz}>Raiz</div>
        </Box>
      </Box>
      <Box
        className={styles.roteirosNaturais}
        onClick={onRoteirosNaturaisContainerClick}
      >
        <Box className={styles.sliderConheaNossosRoteirosTag}>
          <div className={styles.raiz}>Natural</div>
        </Box>
      </Box>
      <Box
        className={styles.sliderConheaNossosRoteirosRoteirosRaiz}
        onClick={onRoteirosRaizContainerClick1}
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
