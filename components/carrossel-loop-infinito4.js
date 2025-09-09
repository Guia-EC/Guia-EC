"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./carrossel-loop-infinito4.module.css";

const CarrosselLoopInfinito4 = ({ className = "", property1 = "Default" }) => {
  const onHotelRectsImageClick = useCallback(() => {
    window.open(
      "https://www.airbnb.com.br/rooms/1288386682512207079?check_in=2025-09-07&check_out=2025-09-12&guests=1&adults=2&s=67&unique_share_id=d1bc25cb-fd30-4bf2-917b-aa52989ba671",
    );
  }, []);

  return (
    <Box
      className={[styles.carrosselInfinito3, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.hotelRectsParent}>
        <Image
          className={styles.hotelRectsIcon}
          loading="lazy"
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Hotel-Rects1@2x.png"
          onClick={onHotelRectsImageClick}
        />
        <Image
          className={styles.carrosselInfinito3HotelRectsIcon}
          loading="lazy"
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Hotel-Rects4@2x.png"
        />
        <Image
          className={styles.hotelRectsIcon2}
          loading="lazy"
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Hotel-Rects2@2x.png"
        />
        <Image
          className={styles.hotelRectsIcon3}
          loading="lazy"
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Hotel-Rects3@2x.png"
        />
        <Image
          className={styles.hotelRectsIcon4}
          loading="lazy"
          width={349}
          height={207}
          sizes="100vw"
          alt=""
          src="/Hotel-Rects1@2x.png"
        />
      </Box>
    </Box>
  );
};

CarrosselLoopInfinito4.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default CarrosselLoopInfinito4;
