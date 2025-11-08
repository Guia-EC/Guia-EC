// components/BannerCarouselSympla.js
"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import styles from "./BannerCarouselSympla.module.css";

// 1. Array ÚNICO com os dados (AGORA COM MOBILE/TABLET)
const BANNERS = [
  {
    id: 1,
    imageUrlMobile: "/Sympla1.png",
    imageUrlTablet: "sympla-banner-1.png", // << MUDE ISSO
    alt: "Pateo do Collegio Evento",
    linkUrl:
      "https://www.sympla.com.br/evento/caminhada-cultural-pelo-centro-de-sao-paulo-detalhes-quase-secretos-da-arquitetura-urbana/3100892#compartilhar-evento",
  },
  {
    id: 2,
    imageUrlMobile: "/homem_com_H.png",
    imageUrlTablet: "sympla-banner-2.png", // << MUDE ISSO
    alt: "Ney Matogrosso Evento",
    linkUrl: "https://bileto.sympla.com.br/event/109556/d/333492",
  },
  {
    id: 3,
    imageUrlMobile: "/farol.png",
    imageUrlTablet: "sympla-banner-3.png", // << MUDE ISSO
    alt: "Farol Santander São Paulo",
    linkUrl: "https://bileto.sympla.com.br/event/100549/d/327067",
  },
  {
    id: 4,
    imageUrlMobile: "/clube_de_criacao.png",
    imageUrlTablet: "sympla-banner-4.png", // << MUDE ISSO
    alt: "Clube da Criação",
    linkUrl:
      "https://www.sympla.com.br/evento/festival-do-clube-de-criacao-2025/2873088",
  },
  {
    id: 5,
    imageUrlMobile: "/almas_talks.png",
    imageUrlTablet: "sympla-banner-5.png", // << MUDE ISSO
    alt: "Alma Talks Evento",
    linkUrl:
      "https://www.sympla.com.br/evento/alma-talks-summit-cultural-lucia-helena-galvao-rossandro-klinjey-e-cortella-em-sao-paulo/2899066",
  },
  {
    id: 6,
    imageUrlMobile: "/museo_da_imaginacao.png",
    imageUrlTablet: "sympla-banner-6.png", // << MUDE ISSO
    alt: "Museu da Imaginação Evento",
    linkUrl:
      "https://bileto.sympla.com.br/event/92650/d/328394/s/2243960?_gl=1*11a1sjv*_gcl_au*MTk1NzQzMDQ4NC4xNzU2Nzc4NjYz*_ga*MTMwNTIwODIwLjE3NTY3Nzg2NjQ.*_ga_KXH10SQTZF*czE3NTg4Njg5OTMkbzQkZzEkdDE3NTg4Njk0MTkkajUyJGwwJGg4NTg3MDY4OTU.",
  },
  {
    id: 7,
    imageUrlMobile: "/mundo_do_bem.png",
    imageUrlTablet: "sympla-banner-7.png", // << MUDE ISSO
    alt: "Evento Mundo do Bem",
    linkUrl: "https://www.sympla.com.br/evento/festival-mundo-do-bem/3105091",
  },
  {
    id: 8,
    imageUrlMobile: "/lingua_portuguesa.png",
    imageUrlTablet: "sympla-banner-8.png", // << MUDE ISSO
    alt: "Museu da Língua Portuguesa",
    linkUrl:
      "https://bileto.sympla.com.br/event/90834/d/336179?_gl=1*z94us6*_gcl_au*MTk1NzQzMDQ4NC4xNzU2Nzc4NjYz*_ga*MTMwNTIwODIwLjE3NTY3Nzg2NjQ.*_ga_KXH10SQTZF*czE3NTg4Njg5OTMkbzQkZzEkdDE3NTg4Njk1MzMkajkkbDAkaDg1ODcwNjg5NQ..",
  },
];

// 2. Defina o breakpoint do tablet
const TABLET_BREAKPOINT = "(min-width: 768px)";

export const BannerCarouselSympla = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }), // Seu delay original de 6000ms
  ]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {BANNERS.map((banner) => (
          <div className={styles.embla__slide} key={banner.id}>
            <a
              href={banner.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.slideLink}
            >
              {/* O <picture> está DENTRO do <a> */}
              
              <picture>
                {/* Fonte para Tablet */}
                <source
                  media={TABLET_BREAKPOINT}
                  srcSet={banner.imageUrlTablet}
                />

                {/* Imagem Padrão (Mobile) */}
                <Image
                  src={banner.imageUrlMobile}
                  alt={banner.alt}
                  width={500}
                  height={300}
                  style={{
                    // Usei o style do seu primeiro arquivo, que é mais seguro
                    width: "100%",
                    height: "auto",
                    borderRadius: "16px",
                    display: "block",
                    // objectFit: "cover",
                  }}
                  priority={true} // Adicionado do seu primeiro arquivo
                />
              </picture>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
