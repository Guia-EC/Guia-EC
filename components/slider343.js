"use client";
import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import SliderConheaNossosRoteiros from "./slider-conhea-nossos-roteiros";
import PropTypes from "prop-types";
import styles from "./slider343.module.css";

const Slider343 = ({ className = "", conheaOsNossosFontFamily }) => {
  const conheaOsNossosStyle = useMemo(() => {
    return {
      fontFamily: conheaOsNossosFontFamily,
    };
  }, [conheaOsNossosFontFamily]);

  return (
    <section className={[styles.slider3, className].join(" ")}>
      <Box className={styles.ttuloELinhaDeEstilo}>
        <Box className={styles.ttulo}>
          <Typography
            className={styles.conheaOsNossos}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", lineHeight: "150%" }}
            style={conheaOsNossosStyle}
          >
            Conheça os nossos roteiros
          </Typography>
        </Box>
      </Box>
      <Box className={styles.slider}>
        <SliderConheaNossosRoteiros />
      </Box>
    </section>
  );
};

Slider343.propTypes = {
  className: PropTypes.string,

  /** Style props */
  conheaOsNossosFontFamily: PropTypes.string,
};

export default Slider343;
