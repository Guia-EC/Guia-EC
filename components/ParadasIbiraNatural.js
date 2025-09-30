import { Typography, Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./ParadasIbiraNatural.module.css";

const ParadasIbiraNatural = ({ className = "" }) => {
  return (
    <Box className={[styles.paradas, className].join(" ")}>
      <Box className={styles.ponto1}>
        <Box className={styles.paradasTtuloEBoto}>
          <Typography
            className={styles.macMuseu}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Loving Hut Vila Mariana
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
            src="/loving_hut.webp"
          />
          <div className={styles.esculturaDeGranito}>
            Restaurante vegano no coração da Vila Mariana, com um variado buffet por quilo e ambiente tranquilo, ideal para um almoço saudável e saboroso durante a semana.
          </div>
        </Box>
      </Box>  
      <Box className={styles.ponto1}>
        <Box className={styles.ttuloEBoto}>
          <Typography
            className={styles.monumentoSBandeiras}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Parque Ibirapuera
          </Typography>
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
            Viveiro Manequinho Lopes
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
            src="/manequinho_lopes_viveiro.jpg"
          />
          <div className={styles.esculturaDeGranito}>
            Viveiro municipal de plantas com estufas, canteiros de mudas e um clima de refúgio botânico, ideal para um passeio tranquilo e para descobrir o berçário das árvores da cidade.
          </div>
        </Box>
      </Box>
      <Box className={styles.ponto2}>
        <Typography
          className={styles.parqueIbirapuera}
          variant="inherit"
          variantMapping={{ inherit: "b" }}
          sx={{ fontWeight: "700" }}
        >
          YUCAFÉ
        </Typography>
        <Box className={styles.imagemETexto}>
          <Image
            className={styles.bandeiras1Icon}
            loading="lazy"
            width={286}
            height={104}
            sizes="100vw"
            alt=""
            src="/yu_cafe.webp"
          />
          <div className={styles.esculturaDeGranito}>
            Café plant-based com cardápio de inspiração contemporânea e ingredientes naturais, ideal para uma experiência gastronômica única após um passeio no parque.
          </div>
        </Box>
      </Box>
    </Box>
  );
};

ParadasIbiraNatural.propTypes = {
  className: PropTypes.string,
};

export default ParadasIbiraNatural;
