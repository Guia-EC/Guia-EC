// components/SymplaCarousel.js
'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './SymplaCarousel.module.css'; // Vamos criar este arquivo a seguir

// Array com os dados dos slides desta seção
const SLIDES = [
  { id: 1, imageUrl: '/Sympla3.png', alt: 'Evento no Farol Santander' },
  { id: 2, imageUrl: '/Sympla2.png', alt: 'Show de Ney Matogrosso' },
  { id: 3, imageUrl: '/Sympla1.png', alt: 'Exposição no Museu da Língua Portuguesa' },
  // Adicione mais destaques aqui, se houver
];

export const SymplaCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {SLIDES.map((slide) => (
          <div className={styles.embla__slide} key={slide.id}>
            {/* O ideal é que aqui você renderize seu componente de card, 
                mas por enquanto, vamos usar uma imagem simples. */}
            <Image
              src={slide.imageUrl}
              alt={slide.alt}
              width={500} // Largura base da imagem original
              height={280} // Altura base da imagem original
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};