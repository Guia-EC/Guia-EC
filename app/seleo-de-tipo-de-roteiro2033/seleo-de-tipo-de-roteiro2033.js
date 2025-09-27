"use client";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./seleo-de-tipo-de-roteiro2033.module.css";

const SeleoDeTipoDeRoteiro2033 = () => {
  const router = useRouter();

  // Função para o botão Voltar
  const onVoltarClick = useCallback(() => {
    router.back(); // Esta função navega para a página anterior no histórico
  }, [router]);

  // Função única para navegar, fica mais limpo!
  const handleSelecionarRoteiro = (categoria) => {
    // AQUI ESTÁ A MUDANÇA PRINCIPAL
    router.push(`/roteiros?filtro=${categoria}`);
  };


  return (
    <Box className={styles.seleoDeTipoDeRoteiro20}>
      {/* 1. Adicionado o onClick e um estilo para o cursor */}
      <Box
        className={styles.voltar}
        onClick={onVoltarClick}
        sx={{ cursor: "pointer", width: 'fit-content' }}
      >
        <Image
          className={styles.vectorIcon}
          loading="lazy"
          width={35}
          height={35}
          sizes="100vw"
          alt="Botão de voltar"
          src="/Bot-o-de-Voltar.svg"
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
          <Box className={styles.raiz} onClick={() => handleSelecionarRoteiro("Raiz")}>
            <Box className={styles.imagem}>
              <Box className={styles.seleoDeTipoDeRoteiro20Detalhe} />
            </Box>
            <Box className={styles.seleoDeTipoDeRoteiro20Body}>
              <Box className={styles.ttuloETexto}>
                <Box className={styles.seleoDeTipoDeRoteiro20Ttulo}>
                  <Typography
                    className={styles.seleoDeTipoDeRoteiro20Raiz}
                    variant="inherit"
                    variantMapping={{ inherit: "h3" }}
                    sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                  >
                    Raiz
                  </Typography>
                </Box>
                <Box className={styles.texto}>
                  <div className={styles.descubraAAlma}>
                    Descubra a alma de São Paulo. Explore os cantos e sabores
                    que contam a história da cidade, em locais clássicos e
                    cheios de tradição que só o verdadeiro paulistano conhece...
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.raiz} onClick={() => handleSelecionarRoteiro("Natural")}>
            <Box className={styles.seleoDeTipoDeRoteiro20Imagem}>
              <Box className={styles.detalhe2} />
            </Box>
            <Box className={styles.seleoDeTipoDeRoteiro20Body}>
              <Box className={styles.ttuloETexto}>
                <Box className={styles.seleoDeTipoDeRoteiro20Ttulo}>
                  <Typography
                    className={styles.seleoDeTipoDeRoteiro20Raiz}
                    variant="inherit"
                    variantMapping={{ inherit: "h3" }}
                    sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                  >
                    Natural
                  </Typography>
                </Box>
                <Box className={styles.texto}>
                  <div className={styles.descubraAAlma}>
                    O melhor da gastronomia veggie de São Paulo em um só lugar.
                    Encontre restaurantes, cafés e empórios com opções
                    vegetarianas e veganas de dar água na boca a cada parada.
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.raiz} onClick={() => handleSelecionarRoteiro("Cultural")}>
            <Box className={styles.imagem2}>
              <Box className={styles.detalhe3} />
            </Box>
            <Box className={styles.seleoDeTipoDeRoteiro20Body}>
              <Box className={styles.ttuloETexto}>
                <Box className={styles.seleoDeTipoDeRoteiro20Ttulo}>
                  <Typography
                    className={styles.seleoDeTipoDeRoteiro20Raiz}
                    variant="inherit"
                    variantMapping={{ inherit: "h3" }}
                    sx={{ fontWeight: "700", letterSpacing: "0.04em" }}
                  >
                    Cultural
                  </Typography>
                </Box>
                <Box className={styles.texto}>
                  <div className={styles.descubraAAlma}>
                    Viva a efervescência cultural de São Paulo. Um guia completo
                    por shows, teatros, cinemas de rua e eventos que fazem da
                    cidade um palco a céu aberto.
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

export default SeleoDeTipoDeRoteiro2033;
