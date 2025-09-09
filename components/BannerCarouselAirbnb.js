// components/BannerCarouselAirbnb.js
'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './BannerCarouselAirbnb.module.css';

// Array com os dados dos seus banners
const BANNERS = [
  { id: 1, imageUrl: '/Airbnb1.png', alt: 'Opção Airbnb 1', linkUrl: 'https://www.airbnb.com.br/rooms/1288386682512207079?source_impression_id=p3_1757451739_P3SsRNDELhm4hTTb' },
  { id: 2, imageUrl: '/Airbnb2.png', alt: 'Opção Airbnb 2', linkUrl: 'https://www.airbnb.com.br/rooms/37488779?check_in=2025-09-01&check_out=2025-09-06&guests=1&adults=2&s=67&unique_share_id=9002c053-2a92-42a4-949e-b1a80abc2639&source_impression_id=p3_1757452372_P3A0__jiHOz3TAeU' },
  { id: 3, imageUrl: '/Airbnb3.png', alt: 'Opção Airbnb 3', linkUrl: 'https://www.airbnb.com.br/rooms/1265134454553556919?check_in=2025-09-22&check_out=2025-09-27&guests=1&adults=2&s=67&unique_share_id=368ae04b-367d-42ba-b8c8-6ead6eaf12fc&source_impression_id=p3_1757452484_P312X4pqUEWQ8Fs8' },
  { id: 4, imageUrl: '/Airbnb4.png', alt: 'Opção Airbnb 4' , linkUrl: 'https://www.airbnb.com.br/rooms/1489134474987572798?check_in=2025-09-01&check_out=2025-09-06&guests=1&adults=2&s=67&unique_share_id=726a74ec-f5f8-4d6f-8cb9-86762de187d1&source_impression_id=p3_1757452070_P3keI-Kz-7E8MDXM' },
];

export const BannerCarouselAirbnb = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5500, stopOnInteraction: false })]);

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