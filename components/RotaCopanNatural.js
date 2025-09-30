import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./RotaCopanNatural.module.css";

const RotaCopanNatural = ({ className = "" }) => {
  return (
    <Box className={[styles.rota, className].join(" ")}>
      <Box className={styles.routePath} />
      <Box className={styles.rotaRoutePath} />
      <Box className={styles.routePath} />
      <Box className={styles.routePath2} />
      <Box className={styles.routePath} />
      <Box className={styles.routePath3} />
      <Box className={styles.routePath} />
    </Box>
  );
};

RotaCopanNatural.propTypes = {
  className: PropTypes.string,
};

export default RotaCopanNatural;
