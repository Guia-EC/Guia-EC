import { Typography, Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./ParadasCopanNatural.module.css";

const ParadasCopanNatural = ({ className = "" }) => {
  return (
    <Box className={[styles.paradas, className].join(" ")}>
        <Box className={styles.ponto2}>
          <Box className={styles.imagemETexto}>
            <Image
              className={styles.bandeiras1Icon}
              loading="lazy"
              width={286}
              height={104}
              sizes="100vw"
              alt=""
              src="/Espaco_VHMOR.jpeg"
            />
          </Box>
          <Box className={styles.ttuloEBoto}>
            <Typography
            className={styles.parqueIbirapuera}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
            >
            Espaço VHMOR
            </Typography>
            <div className={styles.esculturaDeGranito}>
              Restaurante vegano perto do Centro, com buffet por quilo de comida caseira e clima acolhedor, perfeito para um almoço saudável e prático. 
            </div>
          </Box>
        </Box>
        <Box className={styles.ponto0}>
          <Box className={styles.ttuloEBoto}>
            <Typography
              className={styles.monumentoSBandeiras}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ fontWeight: "700" }}
            >
              Copan
            </Typography>
          </Box>
        </Box>
        <Box className={styles.ponto2}>
          <Box className={styles.imagemETexto}>
            <Image
              className={styles.bandeiras1Icon}
              loading="lazy"
              width={286}
              height={104}
              sizes="100vw"
              alt=""
              src="/existe_flor_em_Sao_Paulo.jpeg"
            />
          </Box>
          <Box className={styles.paradasTtuloEBoto}>
            <Typography
              className={styles.parqueIbirapuera}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ fontWeight: "700" }}
            >
              Existe flor em São Paulo
            </Typography>
            <div className={styles.esculturaDeGranito}>
              Floricultura-boutique na galeria do Copan, com arranjos autorais e um clima de refúgio botânico, ideal para um presente delicado ou para levar um pouco de natureza para casa.
            </div>
          </Box>
        </Box>
        <Box className={styles.ponto1}>
          <Box className={styles.imagemETexto}>
            <Image
              className={styles.bandeiras1Icon}
              loading="lazy"
              width={286}
              height={104}
              sizes="100vw"
              alt=""
              src="/magg-cafe.jpg"
            />
          </Box>
          <Box className={styles.paradasTtuloEBoto}>
            <Typography
              className={styles.macMuseu}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ fontWeight: "700" }}
            >
              Magg café
            </Typography>
            <div className={styles.esculturaDeGranito}>
              Café na galeria do Copan, conta com opções veganas, sem glútem e sem lactose, ideal para o café da tarde ou um lanche sem complicação.
            </div>
          </Box>
        </Box>
    </Box>
  );
};

ParadasCopanNatural.propTypes = {
  className: PropTypes.string,
};

export default ParadasCopanNatural;
