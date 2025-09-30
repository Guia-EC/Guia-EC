import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./RotaIbiraNatural.module.css";

const RotaIbiraNatural = ({ className = "" }) => {
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

RotaIbiraNatural.propTypes = {
  className: PropTypes.string,
};

export default RotaIbiraNatural;
