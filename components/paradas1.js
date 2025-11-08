import { Typography, Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./paradas1.module.css";

const Paradas1 = ({ className = "" }) => {
  return (
    <Box className={[styles.paradas, className].join(" ")}>
      <Box className={styles.ponto1}>
        <Box className={styles.imagemETtulo}>
          <Image
            className={styles.augusta1Icon}
            loading="lazy"
            width={286}
            height={104}
            sizes="100vw"
            alt=""
            src="/augusta-1@2x.png"
          />
        </Box>
        <Box className={styles.ttuloEBoto}>
          <Typography
            className={styles.parqueAugusta}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Parque Augusta
          </Typography>
                    <div className={styles.restauranteVeganoInaugurado}>
            Inaugurado em 2021 no centro de São Paulo, reúne área verde de 23
            mil m² com trilhas, playground, cachorródromo e espaço cultural para
            eventos.
          </div>
        </Box>
      </Box>
      <Box className={styles.ponto1}>
        <Box className={styles.imagemETtulo}>
          <Image
            className={styles.augusta1Icon}
            loading="lazy"
            width={286}
            height={104}
            sizes="100vw"
            alt=""
            src="/vegan-1@2x.png"
          />
        </Box>
        <Box className={styles.ttuloEBoto}>
          <Typography
            className={styles.itsVegan}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            It´s Vegan
          </Typography>
          <div className={styles.restauranteVeganoInaugurado}>
            Restaurante vegano inaugurado em novembro de 2021 na Consolação (Rua
            Fernando de Albuquerque, 89), com sanduíches e combos inspirados na
            culinária internacional em ambiente moderno e acolhedor.
          </div>
        </Box>
      </Box>
      <Box className={styles.ponto3}>
        <Typography
          className={styles.restauranteVeganoInaugurado}
          variant="inherit"
          variantMapping={{ inherit: "b" }}
          sx={{ fontWeight: "700" }}
        >
          Sesc 24 de Maio
        </Typography>
      </Box>
      <Box className={styles.ponto1}>
        <Box className={styles.imagemETtulo}>
          <Image
            className={styles.augusta1Icon}
            loading="lazy"
            width={286}
            height={104}
            sizes="100vw"
            alt=""
            src="/mirante-1@2x.png"
          />
        </Box>
        <Box className={styles.ttuloEBoto}>
          <Typography
            className={styles.itsVegan}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Mirante do Sesc
          </Typography>
          <div className={styles.restauranteVeganoInaugurado}>
            Espaço inaugurado em 2023 com café e área de observação, oferecendo
            vista da região central de São Paulo e programação cultural.
          </div>
        </Box>
      </Box>
    </Box>
  );
};

Paradas1.propTypes = {
  className: PropTypes.string,
};

export default Paradas1;
