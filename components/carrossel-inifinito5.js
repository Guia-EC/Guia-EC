"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./carrossel-inifinito5.module.css";

const CarrosselInifinito5 = ({ className = "", property1 = "Default" }) => {
  const onImageRectClick = useCallback(() => {
    window.open("https://escoladacidade.edu.br/");
  }, []);

  return (
    <Box
      className={[styles.carrosselInifinito1, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.imageRectParent}>
        <Image
          className={styles.imageRectIcon}
          controls
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Image-Rect2@2x.png"
          onClick={onImageRectClick}
        >
          
        </Image>
        <Image
          className={styles.imageRectTwo}
          loading="lazy"
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Image-Rect-Two@2x.png"
        />
        <Image
          className={styles.imageRectThree}
          loading="lazy"
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Image-Rect-Three@2x.png"
        />
        <Image
          className={styles.imageRectFour}
          loading="lazy"
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Image-Rect-Four@2x.png"
        />
        <Image
          className={styles.imageRectFive}
          loading="lazy"
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Image-Rect-Five@2x.png"
        />
        <Image
          className={styles.imageRectSix}
          loading="lazy"
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Image-Rect2@2x.png"
        />
      </Box>
    </Box>
  );
};

CarrosselInifinito5.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default CarrosselInifinito5;
