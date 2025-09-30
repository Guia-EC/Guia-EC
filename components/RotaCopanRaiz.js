import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./RotaCopanRaiz.module.css";

const RotaCopanRaiz = ({ className = "" }) => {
  return (
    <Box className={[styles.rota, className].join(" ")}>
      <Box className={styles.routePath} />
      <Box className={styles.rotaRoutePath} />
      <Box className={styles.routePath} />
      <Box className={styles.routePath2} />
      <Box className={styles.routePath} />
    </Box>
  );
};

RotaCopanRaiz.propTypes = {
  className: PropTypes.string,
};

export default RotaCopanRaiz;
