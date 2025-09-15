import { Typography, Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./body.module.css";

const Body = ({ className = "" }) => {
  return (
    <section className={[styles.body, className].join(" ")}>
      <Box className={styles.ttulo}>
        <Typography
          className={styles.roteiroSugerido}
          variant="inherit"
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
          <Box className={styles.ponto1}>
            <Typography
              className={styles.masp}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ fontWeight: "700" }}
            >
              MASP
            </Typography>
          </Box>
          <Box className={styles.ponto2}>
            <Box className={styles.ttuloEBoto}>
              <Typography
                className={styles.charmeDaPaulista}
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ fontWeight: "700" }}
              >{`Charme da Paulista `}</Typography>
            </Box>
            <Box className={styles.textoEImagem}>
              <Image
                className={styles.charme1Icon}
                loading="lazy"
                width={286}
                height={104}
                sizes="100vw"
                alt=""
                src="/charme-1@2x.png"
              />
              <Box className={styles.texto}>
                <div className={styles.lanchoneteBar24H}>
                  Lanchonete-bar 24 h no coração da Avenida Paulista, com
                  cardápio variado e clima descontraído ideal para um lanche
                  rápido ou cerveja em frente ao MASP.
                </div>
              </Box>
            </Box>
          </Box>
          <Box className={styles.ponto3}>
            <Box className={styles.ttuloEBoto}>
              <Typography
                className={styles.mirante9De}
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ fontWeight: "700" }}
              >
                Mirante 9 de Julho
              </Typography>
            </Box>
            <Box className={styles.imagemETexto}>
              <Image
                className={styles.miranre11}
                loading="lazy"
                width={291}
                height={101}
                sizes="100vw"
                alt=""
                src="/MIranre-1-1@2x.png"
              />
              <div className={styles.espaoRevitalizadoDesde}>
                Espaço revitalizado desde 2015, com cafeteria, restaurante e
                programação cultural em um mirante urbano atrás do MASP, com
                vista para a movimentada Avenida 9 de Julho.
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
