import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./carrossel-foto103.module.css";

const CarrosselFoto103 = () => {
  return (
    <Box className={styles.carrosselFoto10}>
      <Box className={styles.botoDeVoltar}>
        <Image
          className={styles.vectorIcon}
          loading="lazy"
          width={21}
          height={32}
          sizes="100vw"
          alt=""
          src="/Vector1.svg"
        />
      </Box>
      <Image
        className={styles.h10381Icon}
        width={393}
        height={610}
        sizes="100vw"
        alt=""
        src="/2025-09-03-17h10-38-1@2x.png"
      />
      <Box className={styles.paginao}>
        <div className={styles.de1}>1 de 1</div>
      </Box>
    </Box>
  );
};

export default CarrosselFoto103;
