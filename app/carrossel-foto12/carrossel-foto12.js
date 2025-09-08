import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./carrossel-foto12.module.css";

const CarrosselFoto12 = () => {
  return (
    <Box className={styles.carrosselFoto1}>
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
        className={styles.imagemIcon}
        width={393}
        height={552}
        sizes="100vw"
        alt=""
        src="/Imagem@2x.png"
      />
      <Box className={styles.paginao}>
        <div className={styles.de1}>1 de 1</div>
      </Box>
    </Box>
  );
};

export default CarrosselFoto12;
