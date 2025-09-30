import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./RotaSescCultural.module.css";

const RotaSescCultural = ({ className = "" }) => {
  return (
    <Box className={[styles.rota, className].join(" ")}>
      <Box className={styles.rotaChild} />
      <Box className={styles.rotaItem} />
      <Image
        className={styles.rotaInner}
        width={23}
        height={23}
        sizes="100vw"
        alt=""
        src="/Ellipse-71.svg"
      />
      <Box className={styles.lineDiv} />
      <Image
        className={styles.rotaInner}
        width={23}
        height={23}
        sizes="100vw"
        alt=""
        src="/Ellipse-71.svg"
      />
      <Box className={styles.rotaRotaChild} />
      <Box className={styles.rotaChild} />
    </Box>
  );
};

RotaSescCultural.propTypes = {
  className: PropTypes.string,
};

export default RotaSescCultural;
