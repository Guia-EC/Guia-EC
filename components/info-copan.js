"use client";
import { useCallback, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import styles from "./info-copan.module.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const InfoCopan = ({ className = "", estado = "Padrão" }) => {
  const router = useRouter();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // --- LÓGICA DA GALERIA ---
  const galleryImages = [
    "/Copan1.png",
    "/Copan2.png",
    "/Copan3.png",
    "/Copan4.png",
    "/Copan5.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === galleryImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // --- Lógica para desabilitar o 'pan' (arrastar) ---
  const [panDisabled, setPanDisabled] = useState(true);
  const handleZoomChange = (ref) => {
    setPanDisabled(ref.state.scale === 1);
  };

  const onVoltarIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <main
      className={[styles.infoCopan, className].join(" ")}
      data-estado={estado}
    >
      <Box className={styles.scrollvel}>
        <Box className={styles.imagemHero}>
          <Image
            className={styles.voltarIcon}
            loading="lazy"
            width={35}
            height={35}
            sizes="100vw"
            alt="Voltar"
            src="/botao-voltar-branco.svg"
            onClick={onVoltarIconClick}
          />
          <Box className={styles.ttulo}>
            <Box className={styles.infoCopanTtulo}>
              <Typography
                className={styles.copan}
                variantMapping={{ inherit: "h1" }}
              >
                Copan
              </Typography>
              <Typography
                className={styles.museuDeArte}
                variantMapping={{ inherit: "h3" }}
              >
                Edifício Copan
              </Typography>
            </Box>
            <Box className={styles.descrio}>
              <div className={styles.linaBoBardi}>
                 1951-1966 Oscar Niemeyer
              </div>
              <div className={styles.avenidaPaulista1578}>
                Avenida Ipiranga, 200 República
              </div>
            </Box>
          </Box>
        </Box>

        <section className={styles.body}>
          {/* --- ESTRUTURA CORRIGIDA PARA O LAYOUT RESPONSIVO --- */}
          <div className={styles.contentWrapper}>
            {/* --- Coluna da Esquerda (Texto) --- */}
            <div className={styles.leftColumn}>
              <Box className={styles.infos}>
                <Typography
                  className={styles.informaes}
                  variantMapping={{ inherit: "h3" }}
                >
                  Informações
                </Typography>
                <Typography
                  className={styles.coneDaArquiteturaContainer}
                  variantMapping={{ inherit: "p" }}
                >
                  <span className={styles.letraCapitular}>O</span> edifício Copan foi projetado 
                    no contexto das comemorações do iV Centenário de São Paulo, num momento de forte crescimento industrial, marcando o processo de expansão e verticalização da cidade. 
                </Typography>
              </Box>

              <Box className={styles.accordionContainer}>
                <button
                  className={styles.accordionButton}
                  onClick={toggleAccordion}
                >
                  <span>Ler artigo completo</span>
                  <img
                    width="60px"
                    height="15px"
                    src="/article-icon.svg"
                    alt="Abrir artigo"
                    className={`${styles.arrowIcon} ${
                      isAccordionOpen ? styles.arrowIconOpen : ""
                    }`}
                  />
                </button>
                <div
                  className={`${styles.accordionContent} ${
                    isAccordionOpen ? styles.accordionOpen : ""
                  }`}
                >
                  <div className={styles.accordionText}>
                    <p>
                      <span className={styles.letraCapitular}>I</span>mplantado em um terreno 
                      de geometria bastante irregular e com desníveis significativos, reúne usos diversos, com apartamentos de tamanhos muito distintos, comércio, serviços e estacionamento no subsolo. A solução encontrada pelo arquiteto para o conjunto transforma sua enorme área construída, com esses programas múltiplos, em uma forma que parece resultar de um gesto simples e único. Essa aparente simplicidade é conquistada com uma estratégia: a divisão do programa em volumes    distintos. Um edifício horizontal (o embasamento, que varia de quatro a dois pavimentos de acordo com a inclinação do terreno) abriga os usos mais públicos, como comércio, escritório, cinema e, sobre ele, duas lâminas (edifícios verticais) de alturas distintas. Apesar de Niemeyer já ter ensaiado essa organização em alguns projetos importantes, como o edifício Montreal (também no Centro de São Paulo), o Copan representou uma proposta inédita.
                    </p>
                    <p>
                      <span className={styles.letraCapitular}>0</span>embasamento ocupa quase todo o lote e relaciona as diversas contingências da cidade existente nesse centro histórico já consolidado — a geometria e os desníveis do lote, ruas e edificações do entorno —, ao mesmo tempo que cria uma plataforma mais independente — a cobertura ou terraço do embasamento, que define uma espécie de lote ideal, plano e controlado, para receber as lâminas. Uma delas, paralela à avenida Ipiranga, é projetada para abrigar um hotel; e outra, de forma ondulada, reúne 1.120 apartamentos, que variam de 32 m2 a 180 m2. O brise do Copan, lâminas de concreto que sombreiam os ambientes e acompanham o volume curvo, é a identidade formal do edifício. Permite que os vários tipos de moradias, com seus diversos ambientes que chegam à fachada, tenham uma unidade, ao mesmo tempo que representa uma solução para a grande dimensão do prédio — hoje um dos mais emblemáticos da cidade e da arquitetura residencial do século XX. 
                    </p>
                    <p>
                      <span className={styles.letraCapitular}>N</span> o Copan, Niemeyer desenvolve um projeto que se confronta com a tese de que o edifício moderno demanda um terreno “arrasado”, independentemente da urbanização do entorno.
                    </p>
                    <p>
                      <span className={styles.letraCapitular}>A</span> lém da separação estratégica entre o embasamento e a lâmina, o projeto tem outrorecurso que o integra à cidade já existente e consolidada — oterreno disponível para o empreendimento é dividido em duas partes, formando uma rua que cruza o lote — e cria dois edifícios e duas bases que se comunicam por uma pequena ponte. Esse desenho constrói uma viela pública, inserindo o grande conjunto de forma delicada na cidade. As alturas diversas das duas lâminas colaboram também para a fusão do conjunto no centro histórico de São Paulo. 
                    </p>
                    <p>
                      <span className={styles.letraCapitular}>C</span> om o Copan, Niemeyer cria uma nova tipologia moderna, de uso misto e alta densidade, inserida na cidade consolidada — tipologia posteriormente reproduzida e desenvolvida em outros importantes edifícios de São Paulo. 
                    </p>
                    <p>
                      <span className={styles.letraCapitular}>A</span>pesar de o projeto ser do início da década de 1950, a obra se prolongou por quase duas décadas, sendo em 1966. Ao longo da construção houve uma série de intercorrências, com modificações significativas no projeto (muitas sem a aprovação do arquiteto). Em 1956 o empreendimento foi comprado pelo Bradesco, e o hotel (com seu embasamento) foi transformado em sede e agência bancária (projetado pelo arquiteto Carlos Lemos, que colaborou com Niemeyer no desenvolvimento do plano inicial do Copan). 
                    </p>
                    <p>
                      <span className={styles.bold}>FERNANDA BARBARA</span>
                    </p>
                  </div>
                </div>
              </Box>
            </div>

            {/* --- Coluna da Direita (Galeria) --- */}
            <div className={styles.rightColumn}>
              <div className={styles.galleryContainer}>
                <div className={styles.imageContainer}>
                  <TransformWrapper
                    onZoomChange={handleZoomChange}
                    pan={{ disabled: panDisabled }}
                  >
                    <TransformComponent
                      wrapperStyle={{ width: "100%", height: "100%" }}
                      contentStyle={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={galleryImages[currentIndex]}
                        alt={`Foto da galeria ${currentIndex + 1}`}
                        className={styles.galleryImage}
                      />
                    </TransformComponent>
                  </TransformWrapper>
                </div>

                <button
                  onClick={goToPrevious}
                  className={`${styles.chevron} ${styles.chevronLeft}`}
                >
                  &#10094;
                </button>
                <button
                  onClick={goToNext}
                  className={`${styles.chevron} ${styles.chevronRight}`}
                >
                  &#10095;
                </button>
                <div className={styles.dotsContainer}>
                  {galleryImages.map((_, slideIndex) => (
                    <div
                      key={slideIndex}
                      className={`${styles.dot} ${
                        currentIndex === slideIndex ? styles.activeDot : ""
                      }`}
                      onClick={() => setCurrentIndex(slideIndex)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </main>
  );
};

InfoCopan.propTypes = {
  className: PropTypes.string,
  estado: PropTypes.string,
};

export default InfoCopan;