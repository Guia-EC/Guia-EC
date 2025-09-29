import { Typography, Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./body2.module.css";

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
              src="/a_baianeira.webp"
            />
            <Box className={styles.texto}>
              {/* E MOVIDO PARA CÁ */}
              <Typography
                className={styles.charmeDaPaulista}
                variantMapping={{ inherit: "b" }}
                sx={{ fontWeight: "700" }}
              >
                {`A Baianeira`}
              </Typography>
              <div className={styles.lanchoneteBar24H}>
                Restaurante da chef Manuelle Ferraz no subsolo do MASP, com cozinha que mescla Bahia e Minas e vista para o Vale do 9 de Julho, perfeito para um almoço que completa a visita ao museu.
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
              src="/teatro_gazeta.webp"
            />

              {/* Adicionamos um container .texto para consistência */}
            <Box className={styles.texto}>
              {/* E MOVIDO PARA CÁ */}
              <Typography
                className={styles.mirante9De}
                variantMapping={{ inherit: "b" }}
                sx={{ fontWeight: "700" }}
              >
                Teatro Gazeta
              </Typography>
              <div className={styles.espaoRevitalizadoDesde}>
                Teatro clássico no prédio da Gazeta, com comédias de sucesso e grandes nomes do stand-up, ideal para dar boas risadas e fechar a noite.
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