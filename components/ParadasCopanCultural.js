import { Typography, Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./ParadasCopanCultural.module.css";

const ParadasCopanCultural = ({ className = "" }) => {
  return (
    <Box className={[styles.paradas, className].join(" ")}>
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
            src="/mega-fauna.png"
          />
        </Box>
        <Box className={styles.paradasTtuloEBoto}>
          <Typography
            className={styles.parqueIbirapuera}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Livraria Megafauna
          </Typography>
          <div className={styles.esculturaDeGranito}>
            Espaço cultural inaugurado em 2021 no icônico prédio de Oscar Niemeyer, com um acervo dedicado às artes visuais, humanidades e publicações independentes.
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
            src="/cuia.png"
          />
        </Box>
        <Box className={styles.paradasTtuloEBoto}>
          <Typography
            className={styles.macMuseu}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Cuia - Restaurante e Café
          </Typography>
          <div className={styles.esculturaDeGranito}>
            Restaurante e café também inaugurado em 2021 dentro da Livraria Megafauna, no Copan, com menu da chef Bel Coelho focado nos biomas e sabores do Brasil.
          </div>
        </Box>
      </Box>
      <Box className={styles.ponto1}>
        <Box className={styles.imagemETexto2}>
          <Image
            className={styles.bandeiras1Icon}
            loading="lazy"
            width={286}
            height={104}
            sizes="100vw"
            alt=""
            src="/pivo.png"
          />
        </Box>
        <Box className={styles.paradasTtuloEBoto}>
          <Typography
            className={styles.parqueIbirapuera}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Pivô
          </Typography>
          <div className={styles.esculturaDeGranito}>
            Espaço de arte sem fins lucrativos fundado em 2012, com programação que fomenta a pesquisa e a experimentação artística.
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
            src="/tem-umami.png"
          />
        </Box>
        <Box className={styles.paradasTtuloEBoto}>
          <Typography
            className={styles.parqueIbirapuera}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Tem Umami
          </Typography>
          <div className={styles.esculturaDeGranito}>
            Gelateria e confeitaria no Edifício Copan, com sorvetes de sabores autorais e panetones de fermentação natural durante todo o ano.
          </div>
        </Box>
      </Box>
    </Box>
  );
};

ParadasCopanCultural.propTypes = {
  className: PropTypes.string,
};

export default ParadasCopanCultural;
