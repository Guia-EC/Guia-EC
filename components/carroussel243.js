"use client";
import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import CarrosselLoopInifinito4 from "./carrossel-loop-inifinito4";
import PropTypes from "prop-types";
import styles from "./carroussel243.module.css";

const Carroussel243 = ({ className = "", confiraOsDestaquesFontFamily }) => {
  const confiraOsDestaquesStyle = useMemo(() => {
    return {
      fontFamily: confiraOsDestaquesFontFamily,
    };
  }, [confiraOsDestaquesFontFamily]);

  return (
    <section className={[styles.carroussel2, className].join(" ")}>
      <Box className={styles.ttuloELinhaDeEstilo}>
        <Box className={styles.ttulo}>
          <Typography
            className={styles.confiraOsDestaques}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "600", lineHeight: "150%" }}
            style={confiraOsDestaquesStyle}
          >
            Confira os destaques de São Paulo com a Sympla
          </Typography>
        </Box>
      </Box>
      <Box className={styles.carrossel2}>
        <CarrosselLoopInifinito4 property1="Default" />
      </Box>
    </section>
  );
};

Carroussel243.propTypes = {
  className: PropTypes.string,

  /** Style props */
  confiraOsDestaquesFontFamily: PropTypes.string,
};

export default Carroussel243;
