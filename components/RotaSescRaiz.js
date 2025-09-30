import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./RotaSescRaiz.module.css";

const RotaSescRaiz = ({ className = "" }) => {
  return (
    <Box className={[styles.rota, className].join(" ")}>
      <Box className={styles.rotaChild} />
      <Box className={styles.rotaItem} />
      <Box className={styles.rotaChild} />
      <Box className={styles.lineDiv} />
      <Box className={styles.rotaChild} />
      <Box className={styles.rotaRotaChild} />
      <Box className={styles.rotaChild} />
    </Box>
  );
};

RotaSescRaiz.propTypes = {
  className: PropTypes.string,
};

export default RotaSescRaiz;
