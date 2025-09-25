// Em RoteirosCulturais204.js (versão final)
"use client";
import { Box } from "@mui/material";
import PginaDeFiltros from "../../components/pgina-de-filtros";
import Navbar from "../../components/navbar";
import styles from "./roteiros-culturais204.module.css";

// 1. Defina seus dados em um array de objetos
const roteirosCulturaisData = [
  {
    id: 'masp-cultural',
    titulo: 'MASP Cultural',
    descricao: 'Do museu à cena artística vibrante da cidade.',
    localizacao: 'Paulista',
    imagem: '/imagem-masp.png',
    link: '/iniciar-roteiro/masp-cultural'
  },
  {
    id: 'ibirapuera-cultural',
    titulo: 'Prq. Ibirapuera',
    descricao: 'Memória, luta e orgulho paulista em cada pedra do monumento.',
    localizacao: 'Ibirapuera',
    imagem: '/imagem-ibirapuera.png',
    link: '/iniciar-roteiro/ibirapuera-cultural'
  },
  // ... adicione quantos roteiros culturais quiser aqui
];

const RoteirosCulturais204 = () => {
  return (
    <Box className={styles.roteirosCulturais20}>
      <PginaDeFiltros
        filtroAtivo="Cultural"
        roteiros={roteirosCulturaisData} // <--- 2. PASSE O ARRAY INTEIRO
      />
      <Navbar />
    </Box>
  );
};

export default RoteirosCulturais204;