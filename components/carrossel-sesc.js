import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./carrossel-sesc.module.css";

const CarrosselSesc = ({ className = "", property1 = "Default" }) => {
  return (
    <Box
      className={[styles.carrosselSesc, className].join(" ")}
      data-property1={property1}
    >
      <Image
        className={styles.carrosselSescChild}
        loading="lazy"
        width={393}
        height={768}
        sizes="100vw"
        alt=""
        src="/Frame-191@2x.png"
      />
    </Box>
  );
};

CarrosselSesc.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default CarrosselSesc;
