"use client";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./seleo-de-tipo-de-roteiroCopan.module.css";

const SeleoDeTipoDeRoteiroCopan = () => {
  const router = useRouter();

  const onVoltarContainerClick = useCallback(() => {
    router.push("/info-copan204");
  }, [router]);

  const onCreditSummaryIconClick = useCallback(() => {
    router.push("/info-copan204");
  }, [router]);

  const onContainerClick = useCallback(() => {
    router.push("/IniciarCopan");
  }, [router]);

  return (
    <Box className={styles.seleoDeTipoDeRoteiro20}>
      <Box className={styles.voltar} onClick={onVoltarContainerClick}>
        <Image
          className={styles.creditSummaryIcon}
          loading="lazy"
          width={12}
          height={20}
          sizes="100vw"
          alt=""
          src="/Bot-o-de-Voltar.svg"
          onClick={onCreditSummaryIconClick}
        />
      </Box>
      <section className={styles.body}>
        <Box className={styles.ttulo}>
          <Typography
            className={styles.qualTipoDe}
            variantMapping={{ inherit: "b" }}
          >
            Qual tipo de roteiro você deseja explorar?
          </Typography>
          <Box className={styles.detalhe}>
            <Box className={styles.detalheChild} />
          </Box>
        </Box>
        <Box className={styles.roteiros}>
          {/* Card Raiz */}
          <Box className={styles.raiz}>
            <Box
              className={`${styles.imagem} ${styles.imagemRaiz}`} // CLASSE ADICIONADA
            >
              <Box className={styles.seleoDeTipoDeRoteiro20Detalhe} />
            </Box>
            <Box className={styles.seleoDeTipoDeRoteiro20Body}>
              <Box className={styles.ttuloETexto}>
                <Typography className={styles.copanRaiz} variantMapping={{ inherit: "h3" }}>
                  Copan Raiz
                </Typography>
                <Box className={styles.texto}>
                  <div className={styles.partindoDoCopan}>
                    Sinta a verdadeira essência boêmia do centro, percorrendo seus bares, restaurantes clássicos e a pulsante vida urbana.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Card Natural */}
          <Box className={styles.raiz}>
            <Box
              className={`${styles.imagem} ${styles.imagemNatural}`} // CLASSE ADICIONADA
            >
              <Box className={styles.detalhe2} />
            </Box>
            <Box className={styles.seleoDeTipoDeRoteiro20Body}>
              <Box className={styles.ttuloETexto}>
                <Typography className={styles.copanRaiz} variantMapping={{ inherit: "h3" }}>
                  Copan Natural
                </Typography>
                <Box className={styles.seleoDeTipoDeRoteiro20Texto}>
                  <div className={styles.partindoDoCopan}>
                     Encontre incríveis achados saudáveis na selva de pedra, descobrindo ótimos restaurantes veganos e cafés orgânicos.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Card Cultural */}
          <Box className={styles.raiz} onClick={onContainerClick}>
            <Box
              className={`${styles.imagem} ${styles.imagemCultural}`} // CLASSE ADICIONADA
            >
              <Box className={styles.detalhe3} />
            </Box>
            <Box className={styles.seleoDeTipoDeRoteiro20Body}>
              <Box className={styles.ttuloETexto}>
                <Typography className={styles.copanRaiz} variantMapping={{ inherit: "h3" }}>
                  Copan Cultural
                </Typography>
                <Box className={styles.seleoDeTipoDeRoteiro20Texto}>
                  <div className={styles.partindoDoCopan}>
                    Um circuito de vanguarda imperdível pelo centro, que une arquitetura icônica, galerias de arte e espaços alternativos.
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

export default SeleoDeTipoDeRoteiroCopan;