"use client";
import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import CarrosselLoopInfinito4 from "./carrossel-loop-infinito4";
import PropTypes from "prop-types";
import styles from "./carroussel343.module.css";

const Carroussel343 = ({ className = "", hospedeSeEVivencieFontFamily }) => {
  const hospedeSeEVivencieStyle = useMemo(() => {
    return {
      fontFamily: hospedeSeEVivencieFontFamily,
    };
  }, [hospedeSeEVivencieFontFamily]);

  return (
    <section className={[styles.carroussel3, className].join(" ")}>
      <Box className={styles.ttuloELinhaDeEstilo}>
        <Box className={styles.ttulo}>
          <Typography
            className={styles.hospedeSeEVivencie}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600" }}
            style={hospedeSeEVivencieStyle}
          >
            Hospede-se e vivencie de perto pontos históricos e culturais com a
            Airbnb
          </Typography>
        </Box>
      </Box>
      <Box className={styles.carrossel3}>
        <CarrosselLoopInfinito4 property1="Default" />
      </Box>
    </section>
  );
};

Carroussel343.propTypes = {
  className: PropTypes.string,

  /** Style props */
  hospedeSeEVivencieFontFamily: PropTypes.string,
};

export default Carroussel343;
