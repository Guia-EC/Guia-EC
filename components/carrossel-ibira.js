import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./carrossel-ibira.module.css";

const CarrosselIbira = ({ className = "", property1 = "Default" }) => {
  return (
    <Box
      className={[styles.carrosselIbira, className].join(" ")}
      data-property1={property1}
    >
      <Image
        className={styles.carouselItemIcon}
        loading="lazy"
        width={393}
        height={768}
        sizes="100vw"
        alt=""
        src="/Carousel-Item@2x.png"
      />
    </Box>
  );
};

CarrosselIbira.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default CarrosselIbira;
