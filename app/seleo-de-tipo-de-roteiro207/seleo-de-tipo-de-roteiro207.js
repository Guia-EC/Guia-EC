"use client";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./seleo-de-tipo-de-roteiro207.module.css";

const SeleoDeTipoDeRoteiro207 = () => {
  const router = useRouter();

  const onVoltarContainerClick = useCallback(() => {
    router.push("/info-masp204");
  }, [router]);

  const onCreditSummaryIconClick = useCallback(() => {
    router.push("/info-masp204");
  }, [router]);

  const onContainerClick = useCallback(() => {
    router.push("/IniciarMasp");
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
          <Box className={styles.raiz} onClick={onContainerClick}>
            <Box
              className={`${styles.imagem} ${styles.imagemRaiz}`} // CLASSE ADICIONADA
            >
              <Box className={styles.seleoDeTipoDeRoteiro20Detalhe} />
            </Box>
            <Box className={styles.seleoDeTipoDeRoteiro20Body}>
              <Box className={styles.ttuloETexto}>
                <Typography className={styles.maspRaiz} variantMapping={{ inherit: "h3" }}>
                  Masp Raiz
                </Typography>
                <Box className={styles.texto}>
                  <div className={styles.partindoDoMasp}>
                    Partindo do MASP, um roteiro pelo coração autêntico de São
                    Paulo, revelando arquitetura, história e sabores clássicos.
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
                <Typography className={styles.maspRaiz} variantMapping={{ inherit: "h3" }}>
                  Masp Natural
                </Typography>
                <Box className={styles.seleoDeTipoDeRoteiro20Texto}>
                  <div className={styles.partindoDoMasp}>
                     Equilibre o urbano e o natural, em um passeio único entre o verde do Parque Trianon e a culinária saudável.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Card Cultural */}
          <Box className={styles.raiz}>
            <Box
              className={`${styles.imagem} ${styles.imagemCultural}`} // CLASSE ADICIONADA
            >
              <Box className={styles.detalhe3} />
            </Box>
            <Box className={styles.seleoDeTipoDeRoteiro20Body}>
              <Box className={styles.ttuloETexto}>
                <Typography className={styles.maspRaiz} variantMapping={{ inherit: "h3" }}>
                  Masp Cultural
                </Typography>
                <Box className={styles.seleoDeTipoDeRoteiro20Texto}>
                  <div className={styles.partindoDoMasp}>
                    Explore o imenso polo cultural da Paulista, unindo a grande arte do MASP, cinemas de rua e centros culturais.
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

export default SeleoDeTipoDeRoteiro207;