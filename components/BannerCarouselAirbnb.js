// components/BannerCarouselAirbnb.js
'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './BannerCarouselAirbnb.module.css';

// Array com os dados dos seus banners
const BANNERS = [
  { id: 1, imageUrl: '/Airbnb1.png', alt: 'Banner da Escola da Cidade com nota máxima no ENADE' },
  { id: 2, imageUrl: '/Airbnb2.png', alt: 'Banner sobre cursos livres 2025' },
  { id: 3, imageUrl: '/Airbnb3.png', alt: 'Banner do programa Encruzilhada de inclusão e equidade' },
  { id: 4, imageUrl: '/Airbnb4.png', alt: 'Banner da Escola da Cidade com nota 5 do MEC' },
];

export const BannerCarouselAirbnb = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5500, stopOnInteraction: false })]);

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