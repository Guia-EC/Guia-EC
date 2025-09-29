import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./RotaCopanCultural.module.css";

const RotaCopanCultural = ({ className = "" }) => {
  return (
    <Box className={[styles.rota, className].join(" ")}>
      <Box className={styles.routePath} />
      <Box className={styles.rotaRoutePath} />
      <Image
        className={styles.rotaChild}
        width={23}
        height={23}
        sizes="100vw"
        alt=""
        src="/Ellipse-7.svg"
      />
      <Box className={styles.routePath2} />
      <Box className={styles.routePath} />
      <Box className={styles.routePath4} />
      <Box className={styles.routePath} />
      <Box className={styles.routePath6} />
      <Box className={styles.routePath} />
    </Box>
  );
};

RotaCopanCultural.propTypes = {
  className: PropTypes.string,
};

export default RotaCopanCultural;
