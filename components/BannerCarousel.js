// components/BannerCarousel.js
'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './BannerCarousel.module.css';

// Array com os dados dos seus banners
const BANNERS = [
  { id: 1, imageUrl: '/image-Rect.png', alt: 'Banner da Escola da Cidade com nota máxima no ENADE', linkUrl: 'https://escoladacidade.edu.br/'},
  { id: 2, imageUrl: '/image-RectTwo.png', alt: 'Banner sobre cursos livres 2025', linkUrl: 'https://escoladacidade.edu.br/pos/cursos-livres/' },
  { id: 3, imageUrl: '/ec-mobile-3.png', alt: 'Banner do programa Encruzilhada de inclusão e equidade', linkUrl: 'https://escoladacidade.edu.br/politica-de-equidade-e-inclusao/'},
  { id: 4, imageUrl: '/image-RectFour.png', alt: 'Banner da Escola da Cidade com nota 5 do MEC', linkUrl: 'https://escoladacidade.edu.br/escola-da-cidade-recebe-nota-maxima-do-mec/' },
  { id: 5, imageUrl: '/image-RectFive.png', alt: 'Banner da Fábrica - Escola de Humanidades', linkUrl: 'https://escoladacidade.edu.br/ensino-medio/' },
  { id: 6, imageUrl: '/ec-mobile.png', alt: 'Banner da Fábrica - Escola de Humanidades'},
  { id: 7, imageUrl: '/ec-mobile-2.png', alt: 'Banner da Fábrica - Escola de Humanidades', linkUrl: 'https://escoladacidade.edu.br/graduacao/processo-seletivo/' },
];

export const BannerCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {BANNERS.map((banner) => (
          <div className={styles.embla__slide} key={banner.id}>
            <a href={banner.linkUrl} target="_blank" rel="noopener noreferrer" className={styles.slideLink}>
              <Image
                src={banner.imageUrl}
                alt={banner.alt}
                width={500}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  display: 'block', // Garante que a imagem se comporte bem dentro do link
                }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};