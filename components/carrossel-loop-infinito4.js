"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./carrossel-loop-infinito4.module.css";

const HOTEIS = [
  { 
    id: 1, 
    imageUrl: '/hotel-banner-1.png', 
    alt: 'Vista do Mirante. Loft Bege Maple.', 
    linkUrl: 'https://www.airbnb.com.br/rooms/1288386682512207079?source_impression_id=p3_1757451739_P3SsRNDELhm4hTTb' 
  },
  { 
    id: 2, 
    imageUrl: '/hotel-banner-2.png', 
    alt: 'Vista Incrível Copan 5 ⭐ Cama Queen', 
    linkUrl: 'https://www.airbnb.com.br/rooms/37488779?check_in=2025-09-01&check_out=2025-09-06&guests=1&adults=2&s=67&unique_share_id=9002c053-2a92-42a4-949e-b1a80abc2639&source_impression_id=p3_1757452372_P3A0__jiHOz3TAeU9' 
  },
  { 
    id: 3, 
    imageUrl: '/hotel-banner-3.png', 
    alt: 'Apto centro SP - Metrô Repúblicaa', 
    linkUrl: 'https://www.airbnb.com.br/rooms/1265134454553556919?check_in=2025-09-22&check_out=2025-09-27&guests=1&adults=2&s=67&unique_share_id=368ae04b-367d-42ba-b8c8-6ead6eaf12fc&source_impression_id=p3_1757452484_P312X4pqUEWQ8Fs8' 
  },
  { 
    id: 4, 
    imageUrl: '/hotel-banner-4.png', 
    alt: 'Quarto Duplo Café da Manhã opcional', 
    linkUrl: 'https://www.airbnb.com.br/rooms/1489134474987572798?check_in=2025-09-01&check_out=2025-09-06&guests=1&adults=2&s=67&unique_share_id=726a74ec-f5f8-4d6f-8cb9-86762de187d1&source_impression_id=p3_1757452070_P3keI-Kz-7E8MDXM' 
  },
];


const CarrosselLoopInfinito4 = ({ className = "", property1 = "Default" }) => {
  return (
    <Box
      className={[styles.carrosselInfinito3, className].join(" ")}
      data-property1={property1}
    >
      <Box className={styles.hotelRectsParent}>
        {/* 2. Mapeando o array HOTEIS para criar cada imagem dinamicamente */}
        {HOTEIS.map((hotel) => (
          <Image
            key={hotel.id}
            
            // 3. Usando uma classe de estilo consistente para todos os itens
            className={styles.hotelRectsIcon} 
            
            src={hotel.imageUrl}
            alt={hotel.alt}
            
            width={349}
            height={207}
            sizes="100vw"
            loading="lazy"

            // 4. onClick dinâmico que abre o link correspondente em uma nova aba
            onClick={() => window.open(hotel.linkUrl, "_blank")}
            style={{ cursor: 'pointer' }} // Melhora a experiência do usuário
          />
        ))}
      </Box>
    </Box>
  );
};

CarrosselLoopInfinito4.propTypes = {
  className: PropTypes.string,
  property1: PropTypes.string,
};

export default CarrosselLoopInfinito4;