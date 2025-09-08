"use client";
import { useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FiltroHistricoDeRoteiros from "./filtro-histrico-de-roteiros";
import FiltroHistricoDeRoteiros9 from "./filtro-histrico-de-roteiros9";
import Favoritar1 from "./favoritar1";
import PropTypes from "prop-types";
import styles from "./histrico-de-roteiros1.module.css";

const HistricoDeRoteiros1 = ({
  className = "",
  tipoDeFiltro = "Mais recente - Antigo",
  favoritarEstado1,
}) => {
  const router = useRouter();

  const onBotoDeVoltarClick = useCallback(() => {
    router.push("/tela-de-usuario202");
  }, [router]);

  return (
    <main
      className={[styles.histricoDeRoteiros, className].join(" ")}
      data-tipoDeFiltro={tipoDeFiltro}
    >
      <Box className={styles.header}>
        <Image
          className={styles.botoDeVoltar}
          loading="lazy"
          width={42}
          height={41}
          sizes="100vw"
          alt=""
          src="/Bot-o-de-Voltar.svg"
          onClick={onBotoDeVoltarClick}
        />
        <Box className={styles.ttulo}>
          <Typography
            className={styles.histricoDeRoteiros2}
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{ fontWeight: "700" }}
          >
            Histórico de Roteiros
          </Typography>
        </Box>
      </Box>
      <Box className={styles.body}>
        <Box className={styles.filtros}>
          <FiltroHistricoDeRoteiros estado="Padrão" />
          <FiltroHistricoDeRoteiros9 propriedade1="Padrão" />
        </Box>
        <section className={styles.dias}>
          <Box className={styles.hoje}>
            <Box className={styles.histricoDeRoteirosTtulo}>
              <Typography
                className={styles.hojeQuartaFeira}
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{ fontWeight: "600" }}
              >
                Hoje - Quarta-Feira, dia 3 de Setembro de 2025
              </Typography>
            </Box>
            <Box className={styles.cardCultural3}>
              <Box className={styles.imagem}>
                <Box className={styles.detalhe} />
              </Box>
              <Box className={styles.histricoDeRoteirosBody}>
                <Box className={styles.ttuloETexto}>
                  <Box className={styles.ttulo2}>
                    <Typography
                      className={styles.maspNatural}
                      variant="inherit"
                      variantMapping={{ inherit: "h3" }}
                      sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                    >
                      MASP Natural
                    </Typography>
                  </Box>
                  <Box className={styles.texto}>
                    <div className={styles.arteConscinciaE}>
                      Arte, consciência e sabores plant-based.
                    </div>
                  </Box>
                </Box>
                <Box className={styles.localizao}>
                  <Image
                    className={styles.locationIcon}
                    loading="lazy"
                    width={16.2}
                    height={16.2}
                    sizes="100vw"
                    alt=""
                    src="/535239-22@2x.png"
                  />
                  <div className={styles.paulista}>Paulista</div>
                </Box>
                <Box className={styles.botoEFavorito}>
                  <Box className={styles.boto}>
                    <div className={styles.fazerRoteiro}>Fazer Roteiro</div>
                  </Box>
                  <Favoritar1 estado="Padrão" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.outroDia}>
            <Box className={styles.ttulo3}>
              <Typography
                className={styles.teraFeiraDia26}
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{ fontWeight: "600" }}
              >
                Terça-Feira, dia 26 de Agosto de 2025
              </Typography>
            </Box>
            <Box className={styles.cardCultural4}>
              <Box className={styles.histricoDeRoteirosImagem}>
                <Box className={styles.histricoDeRoteirosDetalhe} />
              </Box>
              <Box className={styles.body2}>
                <Box className={styles.histricoDeRoteirosTtuloETexto}>
                  <Box className={styles.ttulo4}>
                    <Typography
                      className={styles.casaDasRosas}
                      variant="inherit"
                      variantMapping={{ inherit: "h3" }}
                      sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                    >
                      Casa Das Rosas Cultural
                    </Typography>
                  </Box>
                  <Box className={styles.histricoDeRoteirosTexto}>
                    <div className={styles.versosVozesE}>
                      Versos, vozes e vivências no coração da Paulista.
                    </div>
                  </Box>
                </Box>
                <Box className={styles.histricoDeRoteirosLocalizao}>
                  <Image
                    className={styles.locationIcons}
                    loading="lazy"
                    width={16.2}
                    height={16.2}
                    sizes="100vw"
                    alt=""
                    src="/535239-22@2x.png"
                  />
                  <div className={styles.histricoDeRoteirosPaulista}>
                    Paulista
                  </div>
                </Box>
                <Box className={styles.histricoDeRoteirosBotoEFavorito}>
                  <Button
                    className={styles.histricoDeRoteirosBoto}
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
                  <Favoritar1 estado={favoritarEstado1} />
                </Box>
              </Box>
            </Box>
            <Box className={styles.cardCultural5}>
              <Box className={styles.imagem2}>
                <Box className={styles.detalhe2} />
              </Box>
              <Box className={styles.body3}>
                <Box className={styles.ttuloETexto2}>
                  <Box className={styles.ttulo5}>
                    <Typography
                      className={styles.museuDoIpiranga}
                      variant="inherit"
                      variantMapping={{ inherit: "h3" }}
                      sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                    >
                      Museu Do Ipiranga Raiz
                    </Typography>
                  </Box>
                  <Box className={styles.texto2}>
                    <div className={styles.histriaVivaNos}>
                      História viva nos caminhos que moldaram São Paulo.
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
                  <div className={styles.ipiranga}>Ipiranga</div>
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
                  <Favoritar1 estado="Padrão" />
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
      </Box>
    </main>
  );
};

HistricoDeRoteiros1.propTypes = {
  className: PropTypes.string,
  favoritarEstado1: PropTypes.string,

  /** Variant props */
  tipoDeFiltro: PropTypes.string,
};

export default HistricoDeRoteiros1;
