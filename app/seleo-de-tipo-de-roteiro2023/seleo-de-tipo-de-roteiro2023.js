"use client";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./seleo-de-tipo-de-roteiro2023.module.css";

const SeleoDeTipoDeRoteiro2023 = () => {
  const router = useRouter();

  const onVectorIconClick = useCallback(() => {
    router.push("/info-sesc204");
  }, [router]);

  const onContainerClick = useCallback(() => {
    router.push("/IniciarSesc");
  }, [router]);

  return (
    <Box className={styles.seleoDeTipoDeRoteiro20}>
      <Box className={styles.voltar}>
        <Image
          className={styles.vectorIcon}
          loading="lazy"
          width={12}
          height={20}
          sizes="100vw"
          alt=""
          src="/bot-o-de-voltar.svg"
          onClick={onVectorIconClick}
        />
      </Box>
      <section className={styles.body}>
        <Box className={styles.ttulo}>
          <Typography
            className={styles.qualTipoDe}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ fontWeight: "700" }}
          >
            Qual tipo de roteiro você deseja explorar?
          </Typography>
          <Box className={styles.detalhe}>
            <Box className={styles.detalheChild} />
          </Box>
        </Box>
        <Box className={styles.roteiros}>
          <Box className={styles.raiz}>
            <Box className={styles.imagem}>
              <Box className={styles.seleoDeTipoDeRoteiro20Detalhe} />
            </Box>
            <Box className={styles.seleoDeTipoDeRoteiro20Body}>
              <Box className={styles.ttuloETexto}>
                <Box className={styles.seleoDeTipoDeRoteiro20Ttulo}>
                  <Typography
                    className={styles.sesc24Raiz}
                    variant="inherit"
                    variantMapping={{ inherit: "h3" }}
                    sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                  >
                    Sesc 24 Raiz
                  </Typography>
                </Box>
                <Box className={styles.texto}>
                  <div className={styles.partindoDoMasp}>
                    Partindo do MASP, um roteiro pelo coração autêntico de São
                    Paulo, revelando arquitetura, história e sabores clássicos.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.raiz}>
            <Box className={styles.imagem}>
              <Box className={styles.detalhe2} />
            </Box>
            <Box className={styles.seleoDeTipoDeRoteiro20Body} onClick={onContainerClick}>
              <Box className={styles.ttuloETexto}>
                <Box className={styles.seleoDeTipoDeRoteiro20Ttulo}>
                  <Typography
                    className={styles.sesc24Raiz}
                    variant="inherit"
                    variantMapping={{ inherit: "h3" }}
                    sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                  >
                    Sesc 24 Natural
                  </Typography>
                </Box>
                <Box className={styles.texto}>
                  <div className={styles.partindoDoMasp}>
                    Conecte a arte do MASP a um roteiro de consciência,
                    explorando a inovadora gastronomia plant-based da cidade.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.raiz}>
            <Box className={styles.imagem}>
              <Box className={styles.detalhe3} />
            </Box>
            <Box className={styles.seleoDeTipoDeRoteiro20Body}>
              <Box className={styles.ttuloETexto}>
                <Box className={styles.seleoDeTipoDeRoteiro20Ttulo}>
                  <Typography
                    className={styles.sesc24Raiz}
                    variant="inherit"
                    variantMapping={{ inherit: "h3" }}
                    sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                  >
                    Sesc 24 Cultural
                  </Typography>
                </Box>
                <Box className={styles.texto}>
                  <div className={styles.partindoDoMasp}>
                    Do MASP, explore a vibrante cena cultural em um roteiro que
                    vai além do óbvio, por cinemas, teatros e galerias.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </Box>
  );
};

export default SeleoDeTipoDeRoteiro2023;
