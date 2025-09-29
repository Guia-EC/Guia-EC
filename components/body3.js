import { Typography, Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./body3.module.css";

const Body = ({ className = "" }) => {
  return (
    <section className={[styles.body, className].join(" ")}>
      <Box className={styles.ttulo}>
        <Typography
          className={styles.roteiroSugerido}
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "600" }}
        >
          Roteiro Sugerido
        </Typography>
      </Box>
      <Box className={styles.detalhesECards}>
        <Box className={styles.rota}>
          <Box className={styles.routeDetails} />
          <Box className={styles.bodyRouteDetails} />
          <Box className={styles.routeDetails} />
          <Box className={styles.routeDetails3} />
          <Box className={styles.routeDetails} />
        </Box>
        <Box className={styles.paradas}>
          {/* PARADA 1 */}
          <Box className={styles.ponto1}>
            <Typography
              className={styles.masp}
              variantMapping={{ inherit: "b" }}
              sx={{ fontWeight: "700" }}
            >
              MASP
            </Typography>
          </Box>
          {/* PARADA 2 */}
          {/* --- Card Charme da Paulista --- */}
          <Box className={styles.ponto2}>
            {/* O TÍTULO FOI REMOVIDO DAQUI */}
            <Image
              className={styles.charme1Icon}
              loading="lazy"
              width={286}
              height={104}
              sizes="100vw"
              alt=""
              src="/Taste_and_See_vegano.jpg"
            />
            <Box className={styles.texto}>
              {/* E MOVIDO PARA CÁ */}
              <Typography
                className={styles.charmeDaPaulista}
                variantMapping={{ inherit: "b" }}
                sx={{ fontWeight: "700" }}
              >
                {`Taste And See`}
              </Typography>
              <div className={styles.lanchoneteBar24H}>
                Opção vegana sofisticada próxima ao Shopping Cidade São Paulo, com um salão agradável e pratos inovadores, ideal para uma refeição leve e completa.
              </div>
            </Box>
          </Box>
          {/* PARADA 3 */}
          {/* --- Card Mirante 9 de Julho --- */}
          <Box className={styles.ponto3}>
            {/* O TÍTULO FOI REMOVIDO DAQUI */}

            <Image
              className={styles.miranre11}
              loading="lazy"
              width={291}
              height={101}
              sizes="100vw"
              alt=""
              src="/parque_trianon.jpg"
            />

              {/* Adicionamos um container .texto para consistência */}
            <Box className={styles.texto}>
              {/* E MOVIDO PARA CÁ */}
              <Typography
                className={styles.mirante9De}
                variantMapping={{ inherit: "b" }}
                sx={{ fontWeight: "700" }}
              >
                Parque Trianon
              </Typography>
              <div className={styles.espaoRevitalizadoDesde}>
                Pedaço de Mata Atlântica em plena Avenida Paulista, com clima surpreendentemente calmo, ideal para escapar do barulho da cidade e respirar ar puro.
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

Body.propTypes = {
  className: PropTypes.string,
};

export default Body;