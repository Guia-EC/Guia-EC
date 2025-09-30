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

    const onContainerClick2 = useCallback(() => {
    router.push("/IniciarSescCultural");
  }, [router]);

      const onContainerClick3 = useCallback(() => {
    router.push("/IniciarSescRaiz");
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
          <Box className={styles.raiz}  onClick={onContainerClick3}>
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
                   Explore a alma do centro histórico, conhecendo seu comércio tradicional, arquitetura e sabores populares.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.raiz} onClick={onContainerClick}>
            <Box className={styles.imagem}>
              <Box className={styles.detalhe2} />
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
                    Sesc 24 Natural
                  </Typography>
                </Box>
                <Box className={styles.texto}>
                  <div className={styles.partindoDoMasp}>
                     Descubra os refúgios verdes, a culinária consciente e as mais incríveis vistas panorâmicas do centro.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.raiz} onClick={onContainerClick2}>
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
                    Conecte-se com a pulsante cena artística do centro, percorrendo dos teatros históricos à vibrante arte de rua.
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
