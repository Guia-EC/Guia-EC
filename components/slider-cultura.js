"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import styles from "./slider-cultura.module.css";

const SliderCultura = ({ className = "" }) => {
  const router = useRouter();

  const onMASPContainerClick = useCallback(() => {
    router.push("/info-masp204");
  }, [router]);

  const onPrqIbirapueraContainerClick = useCallback(() => {
    router.push("/info-ibira202");
  }, [router]);

  const onEdMartinelliContainerClick = useCallback(() => {
    router.push("/info-sesc204");
  }, [router]);

  return (
    <Box className={[styles.sliderCultura, className].join(" ")}>
      <Box className={styles.masp} onClick={onMASPContainerClick}>
        <Box className={styles.tag}>
          <div className={styles.sliderCulturaMasp}>MASP</div>
        </Box>
      </Box>
      <Box
        className={styles.prqIbirapuera}
        onClick={onPrqIbirapueraContainerClick}
      >
        <Box className={styles.tag}>
          <div className={styles.sliderCulturaMasp}>Prq. Ibirapuera</div>
        </Box>
      </Box>
      <Box
        className={styles.edMartinelli}
        onClick={onEdMartinelliContainerClick}
      >
        <Box className={styles.tag}>
          <div className={styles.sliderCulturaMasp}>{`Sesc 24 `}</div>
        </Box>
      </Box>
      <Box className={styles.copan}>
        <Box className={styles.tag}>
          <div className={styles.sliderCulturaMasp}>Copan</div>
        </Box>
      </Box>
    </Box>
  );
};

SliderCultura.propTypes = {
  className: PropTypes.string,
};

export default SliderCultura;
