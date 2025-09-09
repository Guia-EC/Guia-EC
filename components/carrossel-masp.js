import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./carrossel-masp.module.css";

const CarrosselMasp = ({ className = "", property1 = "Default" }) => {
  return (
    <Box
      className={[styles.carrosselMasp, className].join(" ")}
      data-property1={property1}
    >
      <Image
        className={styles.carrosselMaspChild}
        loading="lazy"
        width={393}
        height={768}
        sizes="100vw"
        alt=""
        src="/Frame-19@2x.png"
      />
    </Box>
  );
};

CarrosselMasp.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default CarrosselMasp;
