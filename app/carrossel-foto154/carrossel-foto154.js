import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./carrossel-foto154.module.css";

const CarrosselFoto154 = () => {
  return (
    <Box className={styles.carrosselFoto15}>
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
        className={styles.h51351Icon}
        width={393}
        height={611}
        sizes="100vw"
        alt=""
        src="/2025-09-03-16h51-35-1@2x.png"
      />
      <Box className={styles.paginao}>
        <div className={styles.de1}>1 de 1</div>
      </Box>
    </Box>
  );
};

export default CarrosselFoto154;
