"use client";
// Adicionado 'useState' para a lógica da sanfona
import { useCallback, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import CarrosselSesc from "./carrossel-sesc";
import PropTypes from "prop-types";
import styles from "./info-sesc.module.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const InfoSesc = ({ className = "", estado = "Padrão" }) => {
  const router = useRouter();
  
  // --- NOVO: Lógica para controlar a sanfona ---
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

   // --- LÓGICA DA GALERIA ADICIONADA AQUI ---
  
  // 1. Array com as URLs das suas imagens
  const galleryImages = [
    "/Sesc1.png", // Substitua pelos caminhos reais das suas imagens na pasta /public
    "/SESC2.png",
    "/SESC3.png",
    "/SESC4.png",
    "/SESC5.png",
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
      className={[styles.infoSesc, className].join(" ")}
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
            
            {/* Parágrafo inicial simplificado para uma única tag */}
            <Typography
              className={styles.reformaEAmpliaoContainer}
              variantMapping={{ inherit: "p" }}
              sx={{ fontSize: "var(--font-size-15)" }}
            >
              <span className={styles.letraCapitular}>R</span>eforma e ampliação de um edifício ocupado a princípio por uma
              loja de departamentos, na esquina de ruas importantes no Centro
              Novo, o Sesc 24 de Maio é uma das mais interessantes
              experiências arquitetônicas que se podem fruir em São Paulo: uma
              unidade completa, com programas ligados a esportes, lazer,
              cultura e saúde que se sobrepõem naturalmente, como praças
              superpostas.
            </Typography>
          </Box>
          
          {/* --- ESTRUTURA ANTIGA DO BOTÃO SUBSTITUÍDA PELA SANFONA --- */}
          <div className={styles.accordionContainer}>
            <button className={styles.accordionButton} onClick={toggleAccordion}>
              <span>Ler artigo completo</span>
              <img
                width="12px"
                height="7px"
                src="/Vector.svg" // Ícone do seu botão original
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
                  <span className={styles.letraCapitular}>O</span> prédio funciona sem portas:  os pavimentos/praças são  interligados por uma rampa  aberta. O projeto aposta numa  clara ideia de percurso, como  se o espaço público do centro  da cidade se multiplicasse  verticalmente, para baixo e para  cima do nível da rua. O térreo  foi chamado de Praça do Sesc  e remete às galerias comerciais  típicas do centro, que interligam  em seu interior duas ou mais  ruas. Da praça se pode descer ao  teatro e seu café, ou subir rumo  aos 13 pavimentos superiores. Cada andar abriga um programa  principal, e a sequência de  subida pode ser resumida em:  praça de acesso, administração,  restaurante (comedoria), área  aberta de convivência, biblioteca,  exposições, oficinas, serviços de  odontologia, espaço esportivo,  salas de ginástica e dança, jardim  da piscina, vestiários e a piscina.
                </p>
                <p>
                  <span className={styles.letraCapitular}>A</span> estratégia de projeto  para viabilizar essa complexa  sobreposição de programas tão  distintos, que é a natureza das  unidades do Sesc, foi a execução  de uma nova estrutura no  miolo vazio do prédio original,  reconhecível internamente pelos  quatro imensos pilares cilíndricos  e ladeado pelo novo sistema  de rampas. Essas intervenções  novas, em concreto aparente,  se distinguem do prédio  original, agora resumido à sua  estrutura, pintada de branco. As  instalações são concentradas  em duas prumadas principais,  uma delas interna ao volume do  prédio original e a outra sobre um lote vizinho incorporado ao  complexo, uma torre de volume  autônomo com os elevadores,  sanitários, shafts de instalações  e escada de segurança.
                </p>
                <p>
                  <span className={styles.letraCapitular}>A</span> nova estrutura de concreto  no miolo do edifício viabilizou o  teatro no subsolo, os grandes  salões para áreas de convivência,  dança, esportes e, sobretudo,  o complexo da piscina na  cobertura. Essa área abriga  também o jardim da piscina e a  lanchonete, um andar livre que de  certa forma solta o bloco elevado  com os vestiários e a piscina. O  perímetro desse bloco elevado  é feito com uma estrutura  auxiliar de aço, e o fechamento  das fachadas, com painéis  metálicos pintados. Reforçando  essa independência, a geometria  desse bloco está relacionada  à nova estrutura interna,  cuja ortogonalidade difere  sensivelmente da geometria  irregular do edifício original.           A fachada do prédio foi vestida  com uma cortina de vidro reflexivo  que espelha o entorno durante  o dia e expõe seus usos à noite.
                </p>
                <p>
                  <span className={styles.letraCapitular}>A</span> piscina está portanto  elevada a 30 m do solo. Sua  presença inusitada em meio  aos edifícios comerciais  do entorno impressiona e  caracteriza o prédio mais que  os outros elementos. A equipe  de arquitetos já havia, de certa  forma, ensaiado anteriormente  essas estratégias de intervenção  num projeto para a reforma do  Sesc Tatuapé em 1996, concurso  que não venceram mas cujo  projeto se tornou referência  para a arquitetura paulista.
                </p>
                <p>
                  <span className={styles.bold}>FABIO VALENTIM</span>
                </p>
              </div>
            </div>
          </div>
          {/* --- FIM DA ESTRUTURA DA SANFONA --- */}
          
          {/* <CarrosselSesc property1="Default" /> */}

        {/* --- ESTRUTURA DA GALERIA CORRIGIDA --- */}
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
          <Box className={styles.infoSescTtulo}>
            <Typography
              className={styles.sesc24}
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{ fontWeight: "700" }}
            >{`Sesc 24 `}</Typography>
            <Typography
              className={styles.sesc24De}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "600", fontSize: "var(--font-size-20)" }}
            >
              Sesc 24 de Maio
            </Typography>
          </Box>
          <Box className={styles.descrio}>
            <div className={styles.pauloMendesDa}>
              2000-2017: Paulo Mendes da Rocha, MMBB (Fernando de Mello Franco,
              Marta Moreira, Milton Braga)
            </div>
            <div className={styles.rua24De}>Rua 24 de Maio, 109 - Centro</div>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

InfoSesc.propTypes = {
  className: PropTypes.string,
  estado: PropTypes.string,
};

export default InfoSesc;