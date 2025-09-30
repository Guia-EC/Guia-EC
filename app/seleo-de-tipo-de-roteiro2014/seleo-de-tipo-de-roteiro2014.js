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

    const onContainerClick2 = useCallback(() => {
    router.push("/IniciarIbiraRaiz");
  }, [router]);

      const onContainerClick3 = useCallback(() => {
    router.push("/IniciarIbiraNatural");
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
          src="/Bot-o-de-Voltar.svg"
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
          <Box className={styles.raiz}  onClick={onContainerClick2}>
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
                    Mergulhe fundo na memória paulistana, vivenciando a cultura de rua e os sabores de feira do Ibirapuera.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.raiz} onClick={onContainerClick3}>
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
                    Uma conexão com a natureza exuberante do parque, explorando seus lagos, jardins, fauna e sabores.
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
