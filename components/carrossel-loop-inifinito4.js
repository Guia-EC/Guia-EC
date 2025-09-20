"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./carrossel-loop-inifinito4.module.css";

// Seus dados dos banners
const BANNERS = [
  { id: 1, imageUrl: '/sympla-banner-1.png', alt: 'Caminhada cultural', linkUrl:'https://www.sympla.com.br/evento/caminhada-cultural-pelo-centro-de-sao-paulo-detalhes-quase-secretos-da-arquitetura-urbana/3100892' },
  { id: 2, imageUrl: '/sympla-banner-2.png', alt: 'Ney Matogrosso Evento', linkUrl: 'https://bileto.sympla.com.br/event/109556/d/333491?_gl=1*z6p64l*_gcl_au*OTE3MDYwNDUyLjE3NTc4MDYyODkuMTM0NjY5MzYyOC4xNzU4MzMzODM2LjE3NTgzMzM4Njc.*_ga*MTU3MzA1Mjk2MS4xNzU3ODA2Mjg5*_ga_KXH10SQTZF*czE3NTgzMzEwMjkkbzMkZzEkdDE3NTgzMzM4ODMkajIkbDAkaDk3NTMyMTIxNw..'  },
  { id: 3, imageUrl: '/sympla-banner-3.png', alt: 'Farol Santander', linkUrl: 'https://bileto.sympla.com.br/event/100549/d/327057' },
  { id: 3, imageUrl: '/sympla-banner-4.png', alt: 'Clube dos 30', linkUrl: 'https://www.sympla.com.br/evento/clube-dos-30-aniversario-10-anos-15-11-sabado-14h-as-23h-varanda-estaiada/3107296' },
  { id: 3, imageUrl: '/sympla-banner-5.png', alt: 'Corrida outubro rosa', linkUrl: 'https://www.sympla.com.br/evento/corrida-outubro-rosa/2985318' },
];

const CarrosselLoopInifinito4 = ({ className = "", property1 = "Default" }) => {
  // A função de clique agora será criada diretamente no elemento
  return (
    <Box
      className={[styles.carrosselInifinito2, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.rectangleParent}>
        {/* 1. Mapeando o array BANNERS para criar cada imagem dinamicamente */}
        {BANNERS.map((banner) => (
          <Image
            // 2. A "key" é essencial para o React em listas
            key={banner.id}
            
            // 3. Usando um estilo genérico para todas as imagens do carrossel
            className={styles.frameChild} 
            
            // 4. Props dinâmicas vindas do array
            src={banner.imageUrl}
            alt={banner.alt}
            
            width={349}
            height={207}
            sizes="100vw"
            loading="lazy"
            
        
            onClick={() => window.open(banner.linkUrl, "_blank")}
            style={{ cursor: 'pointer' }} 
          />
        ))}
      </Box>
    </Box>
  );
};

CarrosselLoopInifinito4.propTypes = {
  className: PropTypes.string,
  property1: PropTypes.string,
};

export default CarrosselLoopInifinito4;