// components/BannerCarousel.js
'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './BannerCarousel.module.css';

// Array com os dados dos seus banners
const BANNERS = [
  { id: 1, imageUrl: '/image-Rect.png', alt: 'Banner da Escola da Cidade com nota máxima no ENADE' },
  { id: 2, imageUrl: '/image-RectTwo.png', alt: 'Banner sobre cursos livres 2025' },
  { id: 3, imageUrl: '/image-RectThree.png', alt: 'Banner do programa Encruzilhada de inclusão e equidade' },
  { id: 4, imageUrl: '/image-RectFour.png', alt: 'Banner da Escola da Cidade com nota 5 do MEC' },
  { id: 5, imageUrl: '/image-RectFive.png', alt: 'Banner da Fábrica - Escola de Humanidades' },
];

export const BannerCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {BANNERS.map((banner) => (
          <div className={styles.embla__slide} key={banner.id}>
            <Image
              src={banner.imageUrl}
              alt={banner.alt}
              width={500} // Largura base da imagem original
              height={300} // Altura base da imagem original
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};