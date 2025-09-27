// Cole este código inteiro no seu arquivo /app/roteiros/page.js

"use client";

// Imports adicionados: Suspense e useSearchParams
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Box } from "@mui/material";
import PginaDeFiltros from "../../components/pgina-de-filtros";
import Navbar from "../../components/navbar";

const todosOsRoteiros = [
  {
    id: 1,
    titulo: 'MASP Cultural',
    descricao: 'Do museu à cena artística vibrante da cidade.',
    localizacao: 'Paulista',
    imagemSrc: '/Imagem1@3x.png',
    link: '/',
    categoria: 'Cultural'
  },
  {
    id: 2,
    titulo: 'MASP Raiz',
    descricao: 'Da arte à tradição popular da Avenida Paulista.',
    localizacao: 'Paulista',
    imagemSrc: '/Imagem1@3x.png',
    link: '/IniciarMasp',
    categoria: 'Raiz'
  },
  {
    id: 3,
    titulo: 'MASP Natural',
    descricao: 'Do Parque Trianon à gastronomia saudável da região.',
    localizacao: 'Paulista',
    imagemSrc: '/Imagem1@3x.png',
    link: '/',
    categoria: 'Natural'
  },
  {
    id: 4,
    titulo: 'Ibirapuera Cultural',
    descricao: 'Dos museus do parque à efervescência cultural ao redor.',
    localizacao: 'Ibirapuera',
    imagemSrc: '/Imagem8@3x.png',
    link: '/IniciarIbira',
    categoria: 'Cultural'
  },
  {
    id: 5,
    titulo: 'Ibirapuera Natural',
    descricao: 'Uma imersão completa no gastronomia verde, fauna e flora do parque.',
    localizacao: 'Ibirapuera',
    imagemSrc: '/Imagem8@3x.png',
    link: '/',
    categoria: 'Natural'
  },
  {
    id: 6,
    titulo: 'Ibirapuera Raiz',
    descricao: 'Da história do parque aos sabores autênticos de rua.',
    localizacao: 'Ibirapuera',
    imagemSrc: '/Imagem8@3x.png',
    link: '/',
    categoria: 'Raiz'
  },
  {
    id: 7,
    titulo: 'Sesc 24 Natural',
    descricao: 'Dos refúgios verdes do centro e sabores plant-based à linda avisa do mirante.',
    localizacao: 'Centro',
    imagemSrc: '/Imagem10@3x.png',
    link: '/IniciarSesc',
    categoria: 'Natural'
  },
  {
    id: 8,
    titulo: 'Sesc 24 Raiz',
    descricao: 'Explore a alma e a tradição do coração de São Paulo.',
    localizacao: 'Centro',
    imagemSrc: '/Imagem10@3x.png',
    link: '/',
    categoria: 'Raiz'
  },
  {
    id: 9,
    titulo: 'Sesc 24 Cultural',
    descricao: 'Da arquitetura do Sesc à cena artística do centro.',
    localizacao: 'Centro',
    imagemSrc: '/Imagem10@3x.png',
    link: '/IniciarSesc',
    categoria: 'Cultural'
  },
  {
    id: 10,
    titulo: 'Copan Cultural',
    descricao: 'Do ícone modernista aos cinemas e teatros da República.',
    localizacao: 'Centro',
    imagemSrc: '/CopanRoteiro.png',
    link: '/',
    categoria: 'Cultural'
  },
  {
    id: 11,
    titulo: 'Copan Natural',
    descricao: 'O contraste do concreto com os achados veganos da região.',
    localizacao: 'Centro',
    imagemSrc: '/CopanRoteiro.png',
    link: '/',
    categoria: 'Natural'
  },
  {
    id: 12,
    titulo: 'Copan Raiz',
    descricao: 'A história e os sabores clássicos que vivem no edifício.',
    localizacao: 'Centro',
    imagemSrc: '/CopanRoteiro.png',
    link: '/',
    categoria: 'Raiz'
  },
];

// NOVO: Componente interno para poder usar o `useSearchParams`
const RoteirosContent = () => {
  // Lendo o filtro da URL
  const searchParams = useSearchParams();
  const router = useRouter();
  const filtroInicial = searchParams.get('filtro') || 'Cultural';

  // O estado inicial agora usa o valor pego da URL
  const [filtroAtivo, setFiltroAtivo] = useState(filtroInicial);

  const handleMudarFiltro = (novaCategoria) => {
    setFiltroAtivo(novaCategoria);
    router.push(`/roteiros?filtro=${novaCategoria}`, { scroll: false });
  };

  const roteirosFiltrados = todosOsRoteiros.filter(
    (roteiro) => roteiro.categoria === filtroAtivo
  );

  return (
    <Box>
      <PginaDeFiltros
        filtroAtivo={filtroAtivo}
        roteiros={roteirosFiltrados}
        onMudarFiltro={handleMudarFiltro}
      />
      <Navbar />
    </Box>
  );
}

// O componente principal da página agora envolve o conteúdo com <Suspense>
// Isso é necessário para o `useSearchParams` funcionar corretamente no Next.js App Router
const PaginaDeRoteiros = () => {
  return (
    <Suspense fallback={<div>Carregando roteiros...</div>}>
      <RoteirosContent />
    </Suspense>
  );
};

export default PaginaDeRoteiros;