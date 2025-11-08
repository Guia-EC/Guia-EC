import { Typography, Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./paradas.module.css";

const Paradas = ({ className = "" }) => {
  return (
    <Box className={[styles.paradas, className].join(" ")}>
      <Box className={styles.ponto1}>
        <Box className={styles.imagemETexto}>
          <Image
            className={styles.bandeiras1Icon}
            loading="lazy"
            width={286}
            height={104}
            sizes="100vw"
            alt=""
            src="/bandeiras-1@2x.png"
          />
        </Box>
        <Box className={styles.ttuloEBoto}>
          <Typography
            className={styles.monumentoSBandeiras}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Monumento às Bandeiras
          </Typography>
          <div className={styles.esculturaDeGranito}>
            Escultura de granito no Parque do Ibirapuera, inaugurada em 1953,
            que homenageia os bandeirantes em uma grandiosa cena de esforço
            coletivo.
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
          Parque Ibirapuera
        </Typography>
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
            src="/MAC-1@2x.png"
          />
        </Box>
        <Box className={styles.paradasTtuloEBoto}>
          <Typography
            className={styles.macMuseu}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            MAC - Museu de Arte Contemporânea
          </Typography>
          <div className={styles.esculturaDeGranito}>
            Museu inaugurado em 1963 em prédio de Oscar Niemeyer, ao lado do
            Parque Ibirapuera, com acervo de cerca de 10 mil obras de arte
            moderna e contemporânea.
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
            src="/Selvagem-1@2x.png"
          />
        </Box>
        <Box className={styles.paradasTtuloEBoto}>
          <Typography
            className={styles.parqueIbirapuera}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Selvagem
          </Typography>
                    <div className={styles.esculturaDeGranito}>
            Restaurante inaugurado em 2022 dentro do Parque Ibirapuera, cercado
            pela natureza, com cozinha autoral brasileira do chef Filipe Leite e
            ambiente imerso à mata.
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
            src="/planetario-1@2x.png"
          />
        </Box>
        <Box className={styles.paradasTtuloEBoto}>
          <Typography
            className={styles.parqueIbirapuera}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Planetário
          </Typography>
          <div className={styles.esculturaDeGranito}>
            Inaugurado em 1957, primeiro planetário do Brasil, com cúpula de 20
            m e projeções astronômicas que aproximam o público do universo.
          </div>
        </Box>
      </Box>
    </Box>
  );
};

Paradas.propTypes = {
  className: PropTypes.string,
};

export default Paradas;
