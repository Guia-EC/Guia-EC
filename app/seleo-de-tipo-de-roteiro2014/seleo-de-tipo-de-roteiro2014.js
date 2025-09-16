"use client";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./seleo-de-tipo-de-roteiro2014.module.css";
import { Link } from "lucide-react";


const SeleoDeTipoDeRoteiro2014 = () => {
  const router = useRouter();

  const onVectorIconClick = useCallback(() => {
    router.push("/info-ibira202");
  }, [router]);

    const onContainerClick = useCallback(() => {
    router.push("/IniciarIbira");
  }, [router]);

  const onContainerClick1 = useCallback(() => {
    router.push("/roteiros-naturais204");
  }, [router]);

  const onContainerClick2 = useCallback(() => {
    router.push("/roteiros-culturais204");
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
          src="/Vector22.svg"
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
                    className={styles.ibirapueraRaiz}
                    variant="inherit"
                    variantMapping={{ inherit: "h3" }}
                    sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                  >
                    Ibirapuera Raiz
                  </Typography>
                </Box>
                <Box className={styles.texto}>
                  <div className={styles.doMonumentoS}>
                    Do Monumento às Bandeiras, um roteiro pela história
                    paulistana, explorando as tradições e a arquitetura
                    modernista do Ibirapuera.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.raiz}>
            <Box className={styles.seleoDeTipoDeRoteiro20Imagem}>
              <Box className={styles.detalhe2} />
            </Box>
            <Box className={styles.seleoDeTipoDeRoteiro20Body}>
              <Box className={styles.ttuloETexto}>
                <Box className={styles.seleoDeTipoDeRoteiro20Ttulo}>
                  <Typography
                    className={styles.ibirapueraRaiz}
                    variant="inherit"
                    variantMapping={{ inherit: "h3" }}
                    sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                  >
                    Ibirapuera Natural
                  </Typography>
                </Box>
                <Box className={styles.seleoDeTipoDeRoteiro20Texto}>
                  <div className={styles.partindoDoMonumento}>
                    Partindo do Monumento às Bandeiras, entre no oásis verde do
                    Ibirapuera para se conectar com a tranquilidade, a fauna e a
                    flora do parque.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.raiz} onClick={onContainerClick}>
            <Box className={styles.imagem2}>
              <Box className={styles.detalhe3} />
            </Box>
            <Box className={styles.seleoDeTipoDeRoteiro20Body}>
              <Box className={styles.ttuloETexto}>
                <Box className={styles.seleoDeTipoDeRoteiro20Ttulo}>
                  <Typography
                    className={styles.ibirapueraRaiz}
                    variant="inherit"
                    variantMapping={{ inherit: "h3" }}
                    sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                  >
                    Ibirapuera Cultural
                  </Typography>
                </Box>
                <Box className={styles.texto}>
                  <div className={styles.comeceNoMonumento}>
                    Comece no Monumento às Bandeiras, uma obra a céu aberto, e
                    mergulhe na cultura do Ibirapuera, explorando seus museus,
                    exposições e outros eventos.
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

export default SeleoDeTipoDeRoteiro2014;
