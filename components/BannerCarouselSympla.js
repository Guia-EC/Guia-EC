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
  { id: 2, imageUrl: '/homem_com_H.png', alt: 'Ney Matogrosso Evento', linkUrl: 'https://bileto.sympla.com.br/event/109556/d/333492'  },
  { id: 3, imageUrl: '/farol.png', alt: 'Farol Santander São Paulo', linkUrl: 'https://bileto.sympla.com.br/event/100549/d/327067' },
  { id: 4, imageUrl: '/clube_de_criacao.png', alt: 'Clube da Criação', linkUrl: 'https://www.sympla.com.br/evento/festival-do-clube-de-criacao-2025/2873088' },
  { id: 5, imageUrl: '/almas_talks.png', alt: 'Alma Talks Evento', linkUrl: 'https://www.sympla.com.br/evento/alma-talks-summit-cultural-lucia-helena-galvao-rossandro-klinjey-e-cortella-em-sao-paulo/2899066' },
  { id: 6, imageUrl: '/museo_da_imaginacao.png', alt: 'Museu da Imaginação Evento', linkUrl: 'https://bileto.sympla.com.br/event/92650/d/328394/s/2243960?_gl=1*11a1sjv*_gcl_au*MTk1NzQzMDQ4NC4xNzU2Nzc4NjYz*_ga*MTMwNTIwODIwLjE3NTY3Nzg2NjQ.*_ga_KXH10SQTZF*czE3NTg4Njg5OTMkbzQkZzEkdDE3NTg4Njk0MTkkajUyJGwwJGg4NTg3MDY4OTU.' },
  { id: 7, imageUrl: '/mundo_do_bem.png', alt: 'Evento Mundo do Bem', linkUrl: 'https://www.sympla.com.br/evento/festival-mundo-do-bem/3105091' },
  { id: 8, imageUrl: '/lingua_portuguesa.png', alt: 'Museu da Língua Portuguesa', linkUrl: 'https://bileto.sympla.com.br/event/90834/d/336179?_gl=1*z94us6*_gcl_au*MTk1NzQzMDQ4NC4xNzU2Nzc4NjYz*_ga*MTMwNTIwODIwLjE3NTY3Nzg2NjQ.*_ga_KXH10SQTZF*czE3NTg4Njg5OTMkbzQkZzEkdDE3NTg4Njk1MzMkajkkbDAkaDg1ODcwNjg5NQ..' },
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
                  height: '231.8px',
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