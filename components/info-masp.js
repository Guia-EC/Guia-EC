"use client";
import { useCallback, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CarrosselMasp from "./carrossel-masp";
import PropTypes from "prop-types";
import styles from "./info-masp.module.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const InfoMasp = ({ className = "", estado = "Padrão" }) => {
  const router = useRouter();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // --- LÓGICA DA GALERIA ADICIONADA AQUI ---
    
    // 1. Array com as URLs das suas imagens
    const galleryImages = [
      "/MASP1.png", // Substitua pelos caminhos reais das suas imagens na pasta /public
      "/MASP2.png",
      "/MASP3.png",
      "/MASP4.png",
      "/MASP5.png",
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

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <main
      className={[styles.infoMasp, className].join(" ")}
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

          {/* O Bloco do Título foi MOVIDO DE VOLTA para cá */}
          <Box className={styles.ttulo}>
            <Box className={styles.infoMaspTtulo}>
              <Typography
                className={styles.masp}
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{ fontWeight: "700" }}
              >
                MASP
              </Typography>
              <Typography
                className={styles.museuDeArte}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "600" }}
              >
                Museu de Arte de São Paulo
              </Typography>
            </Box>
            <Box className={styles.descrio}>
              <div className={styles.linaBoBardi}>
                1957-1968 Lina Bo Bardi
              </div>
              <div className={styles.avenidaPaulista1578}>
                Avenida Paulista, 1578 Cerqueira César
              </div>
            </Box>
          </Box>
        </Box>

        <section className={styles.body}>
          {/* O Bloco do Título foi REMOVIDO daqui */}

          <Box className={styles.infos}>
            <Typography
              className={styles.informaes}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "600" }}
            >
              Informações
            </Typography>
            <Typography
              className={styles.coneDaArquiteturaContainer}
              variant="inherit"
              variantMapping={{ inherit: "p" }}
              sx={{ fontSize: "var(--font-size-15)" }}
            >
              <span className={styles.letraCapitular}>Í</span>cone da arquitetura moderna brasileira, o masp é não apenas uma
              das obras mais emblemáticas de Lina Bo Bardi como também um dos
              maiores símbolos de São Paulo. Com a determinação de garantir a
              continuidade entre o Parque Siqueira Campos e a vista do Vale do
              Saracura em direção ao Centro, Lina concebe seu projeto
              desenhando um belvedere como um hall cívico que se consagra como
              sede de reuniões públicas e políticas, além de espaço de
              fruição, encontro e lazer.
            </Typography>
          </Box>

          <div className={styles.accordionContainer}>
            <button className={styles.accordionButton} onClick={toggleAccordion}>
              <span>Ler artigo completo</span>
              <img
                width="12px"
                height="7px"
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
                  <span className={styles.letraCapitular}>S</span>ob o belvedere se desenvolve  o embasamento em concreto  armado que abriga auditório,  teatro, depósitos e áreas de  exposição, acessíveis pelo  elevador monta-cargas de aço  e vidro temperado. Esse bloco,  com uma escada de acesso  independente, é cercado por  espelhos-d’água que, junto  com a vegetação exuberante,  compõem uma paisagem de  traços surrealistas, ao mesmo  tempo bela e dramática.                             
                </p>
                <p>
                  <span className={styles.letraCapitular}>A</span>cima do belvedere ergue-se  um paralelepípedo de vidro  suspenso por quatro pilares de  concreto armado que repousam  em dois espelhos-d’água. Esses  pilares de grandes dimensões  recebem as cargas transmitidas  por quatro vigas protendidas  — duas no nível da cobertura  e duas centrais que apoiam o  piso do segundo pavimento e  sustentam por meio de tirantes  guia_pt_tiragem_5.indd 218 17/02/2025 09:32 o primeiro pavimento, vencendo  74 m de vão. No primeiro  andar encontram-se as áreas  administrativas, o acervo e  as exposições temporárias;  no segundo, a pinacoteca do  museu. Ambos são acessíveis  por elevador e escada
                </p>
                <p>
                  <span className={styles.letraCapitular}>A</span> opção pelo concreto  armado aparente, rústico, sem  nenhum acabamento após a  retirada das formas, e pelas  instalações à vista faz parte  de uma nova atitude projetual.  Aproveitando a experiência no  Nordeste, Lina opta por aquilo  que chama de “arquitetura  pobre”, ou seja, uma arquitetura  de soluções diretas, restrita  a seus elementos essenciais.  Essa decisão orienta também  o seu projeto museológico, cuja  melhor expressão se encontra  na pinacoteca. Contrapondo-se  ao ideal do “ambiente neutro”,  do “cubo branco”, Lina defende  uma postura ativa por parte do  espectador, que deveria entrar  em contato direto com a obra.  É apoiada nessa concepção de  dessacralização da arte que ela  desenha os cavaletes de vidro.  Neles, as obras ficam suspensas  no espaço, possibilitando ao  espectador não só um contato  direto, mas um diálogo entre  obras de tempos e espaços  diferentes. Essa experiência é  potencializada pela disposição  não cronológica das obras e  pela identificação dos quadros  na parte de trás não ao seu lado,  como de costume. No mesmo  sentido seguem as fachadas de  vidro, que permitem à pinacoteca  se expandir para a cidade e  invadi-la, numa aproximação  deliberada entre arte e vida.
                </p>
                <p>
                  <span className={styles.letraCapitular}>A</span> partir de 1994 o museu  sofre uma série de reformas e  mudanças na sua orientação  museológica, que caminha no  sentido oposto à concepção  original de Lina Bo Bardi. Em  1996, sob a direção do arquiteto  Júlio Neves, o acesso ao museu  passa a ser controlado por  painéis de vidro que conduzem  a uma bilheteria provisória,  numa solução indigna da  importância do edifício e de seu  acervo. No embasamento, o piso  de pedra goiás é substituído  por granito e os espelhos-  -d’água são desativados. Mas  a mudança mais drástica  ocorre com a retirada dos  cavaletes de vidro para a  construção de salas fechadas,  que fragmentam o espaço da  pinacoteca e interrompem a sua  transparência. Os argumentos  técnicos que ensejam essa  mudança certamente  encontrariam soluções mais  adequadas, como de fato se  comprovou no processo de  revisão das práticas expositivas  do masp em 2015, que culminou  com a retomada dos cavaletes  de vidro, redesenhados pelo  Metro Arquitetos. Ao tomar  essa atitude, a direção recupera  a alma do museu, aquilo que o  define e o distingue das demais  instituições do gênero na cidade.
                </p>
                <p>
                  <span className={styles.bold}>JOANA MELLO</span>
                </p>
              </div>
            </div>
          </div>
          {/* <CarrosselMasp property1="Default" /> */}
          {/* --- O CARROSSEL ESTÁTICO FOI SUBSTITUÍDO PELA GALERIA FUNCIONAL --- */}
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
      </Box>
    </main>
  );
};

InfoMasp.propTypes = {
  className: PropTypes.string,
  estado: PropTypes.string,
};

export default InfoMasp;