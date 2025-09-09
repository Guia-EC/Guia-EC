// components/BannerCarousel.js
'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './BannerCarouselSympla.module.css';

// Array com os dados dos seus banners
const BANNERS = [
  { id: 1, imageUrl: '/Sympla1.png', alt: 'Farol Santander Evento' },
  { id: 2, imageUrl: '/Sympla2.png', alt: 'Ney Matogrosso Evento' },
  { id: 3, imageUrl: '/Sympla3.png', alt: 'Museu da Língua Portuguesa Evento' },
];

export const BannerCarouselSympla = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);

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