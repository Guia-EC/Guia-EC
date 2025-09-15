// components/BannerCarousel.js
'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './BannerCarouselSympla.module.css';

// Array com os dados dos seus banners
const BANNERS = [
  { id: 1, imageUrl: '/Sympla1.png', alt: 'Pateo do Collegio Evento', linkUrl:'https://www.sympla.com.br/evento/caminhada-cultural-pelo-centro-de-sao-paulo-detalhes-quase-secretos-da-arquitetura-urbana/3100892#compartilhar-evento' },
  { id: 2, imageUrl: '/Sympla2.png', alt: 'Ney Matogrosso Evento', linkUrl: 'https://bileto.sympla.com.br/event/109556/d/333492'  },
  { id: 3, imageUrl: '/Sympla3.png', alt: 'Museu da Língua Portuguesa Evento', linkUrl: 'https://bileto.sympla.com.br/event/100549/d/327067' },
];

export const BannerCarouselSympla = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);

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