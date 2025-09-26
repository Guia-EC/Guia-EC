// Cole este código inteiro no seu arquivo /app/roteiros/page.js

"use client";

// Imports adicionados: Suspense e useSearchParams
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Box } from "@mui/material";
import PginaDeFiltros from "../../components/pgina-de-filtros";
import Navbar from "../../components/navbar";

const todosOsRoteiros = [
  {
    id: 'masp-cultural',
    titulo: 'MASP Cultural',
    descricao: 'Do museu à cena artística vibrante da cidade.',
    localizacao: 'Paulista',
    imagemSrc: '/Imagem1@3x.png',
    link: '/',
    categoria: 'Cultural'
  },
  {
    id: 'masp-raiz',
    titulo: 'MASP Raiz',
    descricao: 'Do museu à cena artística vibrante da cidade.',
    localizacao: 'Paulista',
    imagemSrc: '/Imagem1@3x.png',
    link: '/IniciarMasp',
    categoria: 'Raiz'
  },
  {
    id: 'masp-natural',
    titulo: 'MASP Natural',
    descricao: 'Do museu à cena artística vibrante da cidade.',
    localizacao: 'Paulista',
    imagemSrc: '/Imagem1@3x.png',
    link: '/',
    categoria: 'Natural'
  },
  {
    id: 'ibirapuera-cultural',
    titulo: 'Ibirapuera Cultural',
    descricao: 'Memória, luta e orgulho paulista...',
    localizacao: 'Ibirapuera',
    imagemSrc: '/Imagem8@3x.png',
    link: '/IniciarIbira',
    categoria: 'Cultural'
  },
  {
    id: 'ibirapuera-natural',
    titulo: 'Ibirapuera Natural',
    descricao: 'Memória, luta e orgulho paulista...',
    localizacao: 'Ibirapuera',
    imagemSrc: '/Imagem8@3x.png',
    link: '/',
    categoria: 'Natural'
  },
  {
    id: 'ibirapuera-raiz',
    titulo: 'Ibirapuera Raiz',
    descricao: 'Memória, luta e orgulho paulista...',
    localizacao: 'Ibirapuera',
    imagemSrc: '/Imagem8@3x.png',
    link: '/',
    categoria: 'Raiz'
  },
  {
    id: 'sesc-natural',
    titulo: 'Sesc 24 Natural',
    descricao: 'Arte, consciência e sabores plant-based.',
    localizacao: 'Centro',
    imagemSrc: '/Imagem10@3x.png',
    link: '/IniciarSesc',
    categoria: 'Natural'
  },
  {
    id: 'sesc-raiz',
    titulo: 'Sesc 24 Raiz',
    descricao: 'Arte, consciência e sabores plant-based.',
    localizacao: 'Centro',
    imagemSrc: '/Imagem10@3x.png',
    link: '/',
    categoria: 'Raiz'
  },
  {
    id: 'sesc-cultural',
    titulo: 'Sesc 24 Cultural',
    descricao: 'Arte, consciência e sabores plant-based.',
    localizacao: 'Centro',
    imagemSrc: '/Imagem10@3x.png',
    link: '/IniciarSesc',
    categoria: 'Cultural'
  },
  {
    id: 'copan-cultural',
    titulo: 'Copan Cultural',
    descricao: 'Arte, consciência e sabores plant-based.',
    localizacao: 'Centro',
    imagemSrc: '/CopanRoteiro.png',
    link: '/',
    categoria: 'Cultural'
  },
  {
    id: 'copan-natural',
    titulo: 'Copan Natural',
    descricao: 'Arte, consciência e sabores plant-based.',
    localizacao: 'Centro',
    imagemSrc: '/CopanRoteiro.png',
    link: '/',
    categoria: 'Natural'
  },
  {
    id: 'copan-raiz',
    titulo: 'Copan Raiz',
    descricao: 'Arte, consciência e sabores plant-based.',
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
  const filtroInicial = searchParams.get('filtro') || 'Cultural';

  // O estado inicial agora usa o valor pego da URL
  const [filtroAtivo, setFiltroAtivo] = useState(filtroInicial);

  const handleMudarFiltro = (novaCategoria) => {
    setFiltroAtivo(novaCategoria);
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