"use client";
import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import CarrosselInifinito5 from "./carrossel-inifinito5";
import PropTypes from "prop-types";
import styles from "./carroussel143.module.css";

const Carroussel143 = ({ className = "", conheaAMelhorFontFamily }) => {
  const conheaAMelhorStyle = useMemo(() => {
    return {
      fontFamily: conheaAMelhorFontFamily,
    };
  }, [conheaAMelhorFontFamily]);

  return (
    <section className={[styles.carroussel1, className].join(" ")}>
      <Box className={styles.ttuloELinhaDeEstilo}>
        <Box className={styles.ttulo}>
          <Typography
            className={styles.conheaAMelhor}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", lineHeight: "150%" }}
            style={conheaAMelhorStyle}
          >
            Conheça a melhor faculdade de Arquitetura e Urbanismo 🖤
          </Typography>
        </Box>
      </Box>
      <Box className={styles.carrossel}>
        <CarrosselInifinito5 property1="Default" />
      </Box>
    </section>
  );
};

Carroussel143.propTypes = {
  className: PropTypes.string,

  /** Style props */
  conheaAMelhorFontFamily: PropTypes.string,
};

export default Carroussel143;
