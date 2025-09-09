"use client";
import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import SliderCultura from "./slider-cultura";
import PropTypes from "prop-types";
import styles from "./slider142.module.css";

const Slider142 = ({ className = "", histriaCulturaEFontFamily }) => {
  const histriaCulturaEStyle = useMemo(() => {
    return {
      fontFamily: histriaCulturaEFontFamily,
    };
  }, [histriaCulturaEFontFamily]);

  return (
    <section className={[styles.slider1, className].join(" ")}>
      <Box className={styles.ttuloELinhaDeEstilo}>
        <Box className={styles.ttulo}>
          <Typography
            className={styles.histriaCulturaE}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", lineHeight: "150%" }}
            style={histriaCulturaEStyle}
          >
            História, cultura e emoção em cada passo
          </Typography>
        </Box>
      </Box>
      <Box className={styles.slider}>
        <SliderCultura />
      </Box>
    </section>
  );
};

Slider142.propTypes = {
  className: PropTypes.string,

  /** Style props */
  histriaCulturaEFontFamily: PropTypes.string,
};

export default Slider142;
