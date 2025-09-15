import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Favoritar from "./favoritar";
import PropTypes from "prop-types";
import styles from "./pgina-de-filtros.module.css";
import FiltroTiposDeRoteiros from "./filtro-tipos-de-roteiros"

const PginaDeFiltros = ({
  className,
  filtroAtivo,
  mASPCultural,
  doMuseuCenaArtsticaVibrante,
  obeliscoCultural,
  museuDoIpirangaCultural,
  }) => {
    
  return (
    <section
      className={[styles.root, className].join(" ")}
      data-filtroAtivo={filtroAtivo}
    >
      <Box className={styles.roteirosCulturais}>
        <Box className={styles.ttulo}>
          <Box className={styles.ttulo2}>
            <Typography
              className={styles.conheaOutrosRoteiros}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ fontWeight: "700" }}
            >
              Conheça outros roteiros
            </Typography>
          </Box>
          <Box className={styles.detalhe4}>
            <Box className={styles.detalheChild} />
          </Box>
        </Box>
        <FiltroTiposDeRoteiros filtroAtivo={filtroAtivo} />
        <Box className={styles.cardCultural3}>
          <Box className={styles.imagem}>
            <Box className={styles.detalhe} />
          </Box>
          <Box className={styles.body}>
            <Box className={styles.ttuloETexto}>
              <Box className={styles.ttulo3}>
                <Typography
                  className={styles.maspCultural}
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                >
                  {mASPCultural}
                </Typography>
              </Box>
              <Box className={styles.texto}>
                <div className={styles.doMuseu}>
                  {doMuseuCenaArtsticaVibrante}
                </div>
              </Box>
            </Box>
            <Box className={styles.localizao}>
              <Image
                className={styles.locationSpaceIcon}
                loading="lazy"
                width={16.2}
                height={16.2}
                sizes="100vw"
                alt=""
                src="/535239-22@2x.png"
              />
              <div className={styles.ibirapuera}>Ibirapuera</div>
            </Box>
            <Box className={styles.botoEFavorito}>
              <Button
                className={styles.boto}
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#0f0f0f",
                  fontSize: "12",
                  borderColor: "#0f0f0f",
                  borderRadius: "5px",
                  "&:hover": { borderColor: "#0f0f0f" },
                }}
              >
                Fazer Roteiro
              </Button>
              <Favoritar estado="Padrão" />
            </Box>
          </Box>
        </Box>
        <Box className={styles.cardCultural1}>
          <Box className={styles.imagem2}>
            <Box className={styles.detalhe2} />
          </Box>
          <Box className={styles.body2}>
            <Box className={styles.ttuloETexto2}>
              <Box className={styles.ttulo4}>
                <Typography
                  className={styles.obeliscoCultural}
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                >
                  {obeliscoCultural}
                </Typography>
              </Box>
              <Box className={styles.texto2}>
                <div className={styles.memriaLutaE}>
                  Memória, luta e orgulho paulista em cada pedra do monumento.
                </div>
              </Box>
            </Box>
            <Box className={styles.localizao2}>
              <Image
                className={styles.icon}
                loading="lazy"
                width={16.2}
                height={16.2}
                sizes="100vw"
                alt=""
                src="/535239-22@2x.png"
              />
              <div className={styles.ibirapuera2}>Ibirapuera</div>
            </Box>
            <Box className={styles.botoEFavorito2}>
              <Button
                className={styles.boto2}
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#0f0f0f",
                  fontSize: "12",
                  borderColor: "#0f0f0f",
                  borderRadius: "5px",
                  "&:hover": { borderColor: "#0f0f0f" },
                }}
              >
                Fazer Roteiro
              </Button>
              <Favoritar estado="Padrão" />
            </Box>
          </Box>
        </Box>
        <Box className={styles.cardCultural2}>
          <Box className={styles.imagem3}>
            <Box className={styles.detalhe3} />
          </Box>
          <Box className={styles.body3}>
            <Box className={styles.ttuloETexto3}>
              <Box className={styles.ttulo5}>
                <Typography
                  className={styles.museuDoIpiranga}
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                >
                  {museuDoIpirangaCultural}
                </Typography>
              </Box>
              <Box className={styles.texto3}>
                <div className={styles.histriaVivaNos}>
                  História viva nos caminhos que moldaram São Paulo.
                </div>
              </Box>
            </Box>
            <Box className={styles.localizao3}>
              <Image
                className={styles.icon2}
                loading="lazy"
                width={16.2}
                height={16.2}
                sizes="100vw"
                alt=""
                src="/535239-22@2x.png"
              />
              <div className={styles.ipiranga}>Ipiranga</div>
            </Box>
            <Box className={styles.botoEFavorito3}>
              <Button
                className={styles.boto3}
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#0f0f0f",
                  fontSize: "12",
                  borderColor: "#0f0f0f",
                  borderRadius: "5px",
                  "&:hover": { borderColor: "#0f0f0f" },
                }}
              >
                Fazer Roteiro
              </Button>
              <Favoritar estado="Padrão" />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

PginaDeFiltros.propTypes = {
  className: PropTypes.string,
  mASPCultural: PropTypes.string,
  doMuseuCenaArtsticaVibrante: PropTypes.string,
  obeliscoCultural: PropTypes.string,
  museuDoIpirangaCultural: PropTypes.string,

  /** Variant props */
  filtroAtivo: PropTypes.string,
};

export default PginaDeFiltros;
