// components/BannerCarouselAirbnb.js
"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import styles from "./BannerCarouselAirbnb.module.css";

// 1. Array com os dados dos seus banners (MODIFICADO)
const BANNERS = [
  {
    id: 1,
    imageUrlMobile: "/Airbnb1.png", // Imagem padrão
    imageUrlTablet: "hotel-banner-1.png", // << MUDE ISSO
    alt: "Opção Airbnb 1",
    linkUrl:
      "https://www.airbnb.com.br/rooms/1288386682512207079?source_impression_id=p3_1757451739_P3SsRNDELhm4hTTb",
  },
  {
    id: 3,
    imageUrlMobile: "/Airbnb3.png", // Imagem padrão
    imageUrlTablet: "hotel-banner-3.png", // << MUDE ISSO
    alt: "Opção Airbnb 2",
    linkUrl:
      "https://www.airbnb.com.br/rooms/1265134454553556919?check_in=2025-09-22&check_out=2025-09-27&guests=1&adults=2&s=67&unique_share_id=368ae04b-367d-42ba-b8c8-6ead6eaf12fc&source_impression_id=p3_1757452484_P312X4pqUEWQ8Fs8",
  },
  {
    id: 4,
    imageUrlMobile: "/Airbnb4.png", // Imagem padrão
    imageUrlTablet: "hotel-banner-4.png", // << MUDE ISSO
    alt: "Opção Airbnb 3",
    linkUrl:
      "https://www.airbnb.com.br/rooms/1489134474987572798?check_in=2025-09-01&check_out=2025-09-06&guests=1&adults=2&s=67&unique_share_id=726a74ec-f5f8-4d6f-8cb9-86762de187d1&source_impression_id=p3_1757452070_P3keI-Kz-7E8MDXM",
  },
];

// 2. Defina o breakpoint do tablet
const TABLET_BREAKPOINT = "(min-width: 768px)";

export const BannerCarouselAirbnb = () => {
  // Mantido o seu delay original de 5500ms
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5500, stopOnInteraction: false }),
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

                {/* Imagem Padrão (Mobile/Desktop) */}
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
