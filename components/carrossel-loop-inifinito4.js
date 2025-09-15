"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./carrossel-loop-inifinito4.module.css";

const CarrosselLoopInifinito4 = ({ className = "", property1 = "Default" }) => {
  const onRectangleImageClick = useCallback(() => {
    window.open(
      "https://bileto.sympla.com.br/event/90834?share_id=1-copiarlink",
    );
  }, []);

  return (
    <Box
      className={[styles.carrosselInifinito2, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.rectangleParent}>
        <Image
          className={styles.frameChild}
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Sympla1.png"
          onClick={onRectangleImageClick}
        />
        <Image
          className={styles.frameItem}
          loading="lazy"
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Sympla2.png"
        />
        <Image
          className={styles.frameInner}
          loading="lazy"
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Sympla3.png"
        />
      </Box>
    </Box>
  );
};

CarrosselLoopInifinito4.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default CarrosselLoopInifinito4;
