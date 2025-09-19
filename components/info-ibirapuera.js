"use client";
// Adicionado 'useState' para controlar o estado
import { useCallback, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CarrosselIbira from "./carrossel-ibira";
import PropTypes from "prop-types";
import styles from "./info-ibirapuera.module.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const InfoIbirapuera = ({ className = "", estado = "Padrão" }) => {
  const router = useRouter();
  
  // --- NOVO: Estado para controlar a sanfona ---
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // --- LÓGICA DA GALERIA ADICIONADA AQUI ---
    
    // 1. Array com as URLs das suas imagens
    const galleryImages = [
      "/IBIRA1.png", // Substitua pelos caminhos reais das suas imagens na pasta /public
      "/IBIRA2.png",
      "/IBIRA3.png",
      "/IBRIA4.png",
      "/IBIRA5.png",
    ];
  
    // 2. Estado para controlar o índice da imagem atual
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // 3. Funções para navegar
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
  
    // --- FIM DA LÓGICA DA GALERIA ---

    // --- NOVO: Lógica para desabilitar o 'pan' (arrastar) no zoom inicial ---
  const [panDisabled, setPanDisabled] = useState(true);

  const handleZoomChange = (ref) => {
    // Se a escala for 1 (zoom padrão), desabilita o pan.
    // Se for maior que 1, habilita o pan.
    if (ref.state.scale === 1) {
      setPanDisabled(true);
    } else if (panDisabled) {
      setPanDisabled(false);
    }
  };
  // --- FIM DA NOVA LÓGICA ---

  const onVoltarIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  // --- NOVO: Função para abrir/fechar a sanfona ---
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <main
      className={[styles.infoIbirapuera, className].join(" ")}
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
            alt=""
            src="/botao-voltar-branco.svg"
            onClick={onVoltarIconClick}
          />
        </Box>
        <section className={styles.body}>
          <Box className={styles.infos}>
            <Typography
              className={styles.informaes}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "600" }}
            >
              Informações
            </Typography>
            {/* Simplifiquei o parágrafo para uma única tag para consistência */}
            <Typography
              className={styles.oIbirapueraFoiContainer}
              variantMapping={{ inherit: "p" }}
              sx={{ fontSize: "var(--font-size-15)" }}
            >
              <span className={styles.letraCapitular}>O</span> Ibirapuera foi projetado como parte das comemorações do iV
              Centenário de São Paulo para ser o primeiro parque metropolitano
              quando a cidade passava por uma forte expansão do setor
              industrial, em meio a uma década de grande crescimento
              populacional e de transformações urbanas.
            </Typography>
          </Box>

          {/* --- ESTRUTURA ANTIGA DO BOTÃO SUBSTITUÍDA PELA SANFONA --- */}
          <div className={styles.accordionContainer}>
            <button className={styles.accordionButton} onClick={toggleAccordion}>
              <span>Ler artigo completo</span>
              <img
                width="12px"
                height="7px"
                src="/Vector.svg" /* Mantive o nome do seu ícone original */
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
                {/* Adicionei texto de exemplo para a sanfona */}
                <p>
                  <span className={styles.letraCapitular}>C</span>ertamente, trata-se de  um dos mais emblemáticos  parques modernos do mundo.  Além de uma ampla e densa  área arborizada e de um lago  que desempenha a função  de drenagem e de lazer, o  Ibirapuera é caracterizado  pelo conjunto de seis edifícios  desenhados por Oscar Niemeyer,  hoje utilizados como espaços  culturais, abrigando museus e  grandes exposições. O aspecto  mais inusitado do projeto é o  desenho de uma laje sinuosa de  18.000 m2 (a “marquise”) que  conecta quase todos os edifícios  e proporciona uma ampla  sombra que acolhe as mais  diversas atividades de lazer. A  intensidade e a diversidade de  atividades que acontecem sob  a marquise surpreendem. A laje  plana de desenho sinuoso já  havia aparecido, num espaço  interno, no Pavilhão do Brasil em  Nova York, e em 1940, já como  marquise, na Casa do Baile da  Pampulha. No Parque Ibirapuera,  ela ganha novas funções  e sobretudo outra escala,  substituindo a forte sinuosidade  por longas e expressivas curvas  abatidas. A vegetação, os  prédios e a própria marquise  conformam um conjunto de  desenho e concepção inéditos,  reproduzindo, de algum modo,  uma estrutura urbana que  estabelece uma curiosa relação  entre os edifícios e o parque.
                </p>
                <p>
                  <span className={styles.letraCapitular}>O</span> projeto de paisagismo foi  desenvolvido inicialmente por  Burle Marx, mas acabou sendo  substituído por outro de Otávio  Teixeira Mendes. Grande parte  dos eucaliptos que estão no  parque foi plantada na década  de 1930 por Manequinho  Lopes, como estratégia para  drenar a área então pantanosa  destinada ao futuro parque.
                </p>
                <p>
                  <span className={styles.letraCapitular}>O</span> conjunto foi inaugurado  parcialmente em 1954,  embora no ano anterior já  tivesse sediado a ii Bienal  Internacional de Arte de São  Paulo. Com a mais recente  inauguração do Auditório em  2005, seguindo novo desenho  de Oscar Niemeyer, o conjunto  se completou e assumiu mais  efetivamente sua vocação de  receber programas ligados  à cultura, como os museus e  pavilhões expositivos. Além da  marquise, os edifícios hoje são: 
Oca (Pavilhão Lucas Nogueira  Garcez) — 1951-1954
 Pavilhão da Bienal (Pavilhão  Ciccilo Matarazzo, Palácio  da Indústria) — 1951-1957
Museu de Arte Contemporânea  da Usp (MaC) — 1951-1954
Auditório do Ibirapuera — 1954-2005
 Palácio dos Estados e Palácio  das Nações — 1957-1961
 Museu de Arte Moderna (MaM)
                </p>
                <p>
                  <span className={styles.bold}>FERNANDA BARBARA</span>
                </p>
              </div>
            </div>
          </div>
          {/* --- FIM DA ESTRUTURA DA SANFONA --- */}

          <div className={styles.galleryContainer}>
            <div className={styles.imageContainer}>
              <TransformWrapper enablePan={false} maxScale={3} initialScale={1} minScale={1} onZoomChange={handleZoomChange} pan={{ disabled: panDisabled }}>
                <TransformComponent   wrapperStyle={{
                    width: "100%",
                    height: "100%",
                  }}
                   contentStyle={{
                    // width: "100%",
                    // height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    objectFit: "contain",
                  }}>
                  <img
                    src={galleryImages[currentIndex]}
                    alt={`Foto da galeria ${currentIndex + 1}`}
                    className={styles.galleryImage}
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>
            
            <button onClick={goToPrevious} className={`${styles.chevron} ${styles.chevronLeft}`}>
              &#10094;
            </button>
            <button onClick={goToNext} className={`${styles.chevron} ${styles.chevronRight}`}>
              &#10095;
            </button>
            <div className={styles.dotsContainer}>
              {galleryImages.map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`${styles.dot} ${currentIndex === slideIndex ? styles.activeDot : ''}`}
                  onClick={() => setCurrentIndex(slideIndex)}
                />
              ))}
            </div>
          </div>
          {/* --- FIM DA SEÇÃO DA GALERIA --- */}
        </section>
        <Box className={styles.ttulo}>
          <Box className={styles.infoIbirapueraTtulo}>
            <Typography
              className={styles.prqIbirapuera}
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{ fontWeight: "700", lineHeight: "3.438rem" }}
            >
              Prq. Ibirapuera
            </Typography>
            <Typography
              className={styles.parqueIbirapuera}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "600", fontSize: "var(--font-size-20)" }}
            >
              Parque Ibirapuera
            </Typography>
          </Box>
          <Box className={styles.descrio}>
            <div className={styles.oscarNyemeierZenon}>
              1951-2005: Oscar Nyemeier, Zenon Lotufo, Hélio Uchôa e Eduardo
              Kneese de Melo.
            </div>
            <div className={styles.avenidaPedroLvares}>
              Avenida Pedro Álvares Cabral com avenida República do Líbano
            </div>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

InfoIbirapuera.propTypes = {
  className: PropTypes.string,
  estado: PropTypes.string,
};

export default InfoIbirapuera;