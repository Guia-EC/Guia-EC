// components/BannerCarousel.js
"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import styles from "./BannerCarousel.module.css";

// 1. Array ÚNICO com os dados.
//    Preencha os caminhos de TABLET aqui.
const BANNERS = [
  {
    id: 1,
    imageUrlMobile: "/image-Rect.png", // Caminho da imagem MOBILE (seu original)
    imageUrlTablet: "/ec-banner-5.png", // << MUDE ISSO
    alt: "Banner da Escola da Cidade com nota máxima no ENADE",
    linkUrl: "https://escoladacidade.edu.br/",
  },
  {
    id: 2,
    imageUrlMobile: "/image-RectTwo.png",
    imageUrlTablet: "/ec-banner-2.png", // << MUDE ISSO
    alt: "Banner sobre cursos livres 2025",
    linkUrl: "https://escoladacidade.edu.br/pos/cursos-livres/",
  },
  {
    id: 3,
    imageUrlMobile: "/ec-mobile-3.png",
    imageUrlTablet: "/ec-banner-encruzilhada.png", // << MUDE ISSO
    alt: "Banner do programa Encruzilhada de inclusão e equidade",
    linkUrl: "https://escoladacidade.edu.br/politica-de-equidade-e-inclusao/",
  },
  {
    id: 4,
    imageUrlMobile: "/image-RectFour.png",
    imageUrlTablet: "/ec-banner-4.png", // << MUDE ISSO
    alt: "Banner da Escola da Cidade com nota 5 do MEC",
    linkUrl:
      "https://escoladacidade.edu.br/escola-da-cidade-recebe-nota-maxima-do-mec/",
  },
  {
    id: 5,
    imageUrlMobile: "/image-RectFive.png",
    imageUrlTablet: "/ec-banner-1.png", // << MUDE ISSO
    alt: "Banner da Fábrica - Escola de Humanidades",
    linkUrl: "https://escoladacidade.edu.br/ensino-medio/",
  },
  {
    id: 7,
    imageUrlMobile: "/ec-mobile-2.png",
    imageUrlTablet: "/ec-banner-3.png", // << MUDE ISSO
    alt: "Banner da Fábrica - Escola de Humanidades",
    linkUrl: "https://escoladacidade.edu.br/graduacao/processo-seletivo/",
  },
];

// 2. Defina o breakpoint do tablet
const TABLET_BREAKPOINT = "(min-width: 768px)";

export const BannerCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {BANNERS.map((banner) => (
          // O slide
          <div className={styles.embla__slide} key={banner.id}>
            {/* O link (`<a>`) envolve a imagem */}
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
                    width: "100%",
                    height: "auto",
                    borderRadius: "16px",
                    display: "block",
                  }}
                  priority={true}
                />
              </picture>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
