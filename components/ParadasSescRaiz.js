import { Typography, Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./ParadasSescRaiz.module.css";

const ParadasSescRaiz = ({ className = "" }) => {
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
            src="/comedoria.png"
          />
        </Box>
        <Box className={styles.ttuloEBoto}>
          <Typography
            className={styles.parqueAugusta}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Comedoria
          </Typography>
          <div className={styles.restauranteVeganoInaugurado}>
           Restaurante com comida caseira, preço justo e uma vista espetacular do Centro, ideal para um almoço de qualidade antes ou depois das exposições.
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
            src="/feira-da-republica.jpg"
          />
        </Box>
        <Box className={styles.ttuloEBoto}>
          <Typography
            className={styles.itsVegan}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Feirinha da República
          </Typography>
          <div className={styles.restauranteVeganoInaugurado}>
            Tradicional feira de rua na Praça da República, com barracas de artesanato, comidas típicas e um clima multicultural, ideal para um passeio de fim de semana e para garimpar achados únicos.
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
            src="/estadao.jpg"
          />
        </Box>
        <Box className={styles.ttuloEBoto}>
          <Typography
            className={styles.itsVegan}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Bar e Lanches Estadão
          </Typography>
          <div className={styles.restauranteVeganoInaugurado}>
            Lanchonete 24 horas no centro de São Paulo, famosa pelo seu sanduíche de pernil, a parada obrigatória para matar a fome em qualquer horário, especialmente na madrugada.
          </div>
        </Box>
      </Box>
    </Box>
  );
};

ParadasSescRaiz.propTypes = {
  className: PropTypes.string,
};

export default ParadasSescRaiz;
