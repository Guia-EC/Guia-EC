import { Typography, Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./ParadasCopanRaiz.module.css";

const ParadasCopanRaiz = ({ className = "" }) => {
  return (
    <Box className={[styles.paradas, className].join(" ")}>
      <Box className={styles.ponto1}>
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
        <Typography
          className={styles.parqueIbirapuera}
          variant="inherit"
          variantMapping={{ inherit: "b" }}
          sx={{ fontWeight: "700" }}
        >
          Café Floresta
        </Typography>
        <Box className={styles.imagemETexto}>
          <Image
            className={styles.bandeiras1Icon}
            loading="lazy"
            width={286}
            height={104}
            sizes="100vw"
            alt=""
            src="/cafe_floresta.jpg"
          />
          <div className={styles.esculturaDeGranito}>
            Café tradicional na galeria do Edifício Copan, com seu clássico balcão e um clima que parou no tempo, ideal para um expresso rápido enquanto se observa o movimento do centro. 
          </div>
        </Box>
      </Box>
      <Box className={styles.ponto1}>
        <Box className={styles.paradasTtuloEBoto}>
          <Typography
            className={styles.macMuseu}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Video Connection
          </Typography>
        </Box>
        <Box className={styles.imagemETexto}>
          <Image
            className={styles.bandeiras1Icon}
            loading="lazy"
            width={286}
            height={104}
            sizes="100vw"
            alt=""
            src="/video-connection.jpg"
          />
          <div className={styles.esculturaDeGranito}>
            Uma das últimas locadoras de São Paulo, na galeria do Copan, com um acervo gigante de filmes e clima nostálgico, ideal para cinéfilos em busca daquele título que não se acha no streaming.
          </div>
        </Box>
      </Box>
    </Box>
  );
};

ParadasCopanRaiz.propTypes = {
  className: PropTypes.string,
};

export default ParadasCopanRaiz;
