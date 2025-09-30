import { Typography, Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./ParadasIbiraRaiz.module.css";

const ParadasIbiraRaiz = ({ className = "" }) => {
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
            IbiraBike
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
            src="/ibirabike.jpg"
          />
          <div className={styles.esculturaDeGranito}>
            Clássico serviço de aluguel de bicicletas dentro do Parque Ibirapuera, com modelos que vão desde o individual, até toda a família. Ideal para explorar o parque de um jeito divertido e diferente.
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
          Hobby Hamburguer
        </Typography>
        <Box className={styles.imagemETexto}>
          <Image
            className={styles.bandeiras1Icon}
            loading="lazy"
            width={286}
            height={104}
            sizes="100vw"
            alt=""
            src="/hobby.jpg"
          />
          <div className={styles.esculturaDeGranito}>
            Hamburgueria tradicional pertinho do Parque Ibirapuera, com lanches clássicos e um clima de lanchonete de bairro, ideal para matar a fome depois de um passeio no parque.
          </div>
        </Box>
      </Box>
    </Box>
  );
};

ParadasIbiraRaiz.propTypes = {
  className: PropTypes.string,
};

export default ParadasIbiraRaiz;
