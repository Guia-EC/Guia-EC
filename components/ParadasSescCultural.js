import { Typography, Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./ParadasSescCultural.module.css";

const ParadasSescCultural = ({ className = "" }) => {
  return (
    <Box className={[styles.paradas, className].join(" ")}>
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
            src="/hip-hop.jpeg"
          />
        </Box>
        <Box className={styles.ttuloEBoto}>
          <Typography
            className={styles.parqueAugusta}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Exposição Hip Hop
          </Typography>
          <div className={styles.restauranteVeganoInaugurado}>
            Uma retrospectiva do hip-hop no SESC 24 de Maio, com arte, música e história, perfeita para entender a evolução e a força da cultura de rua.
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
            src="/vale-do-anhangabau.jpg"
          />
        </Box>
        <Box className={styles.ttuloEBoto}>
          <Typography
            className={styles.itsVegan}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Vale do Anhangabaú
          </Typography>
          <div className={styles.restauranteVeganoInaugurado}>
            Grande praça reformada no coração do Centro Histórico, com fontes que brotam do chão e uma ampla esplanada, ideal para se refrescar no calor, andar de skate ou curtir os grandes eventos da cidade.
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
            src="/serto.jpg"
          />
        </Box>
        <Box className={styles.ttuloEBoto}>
          <Typography
            className={styles.itsVegan}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Sertó Bar
          </Typography>
          <div className={styles.restauranteVeganoInaugurado}>
            Boteco charmoso perto do Anhangabaú, com drinks, culinária do sertão e mesas na calçada, perfeito para um encontro animado.
          </div>
        </Box>
      </Box>
    </Box>
  );
};

ParadasSescCultural.propTypes = {
  className: PropTypes.string,
};

export default ParadasSescCultural;
