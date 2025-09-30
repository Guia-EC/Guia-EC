"use client";

// Imports atualizados: useEffect foi adicionado para buscar os dados
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Box } from "@mui/material";

// 1. IMPORTAR O CLIENTE SUPABASE
// Verifique se o caminho para o seu arquivo de configuração do Supabase está correto
import { supabase } from "../../lib/supabaseClient"; 

import PginaDeFiltros from "../../components/pgina-de-filtros";
import Navbar from "../../components/navbar";

// O array de dados fixos foi removido. Agora os dados virão do banco.

const RoteirosContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filtroInicial = searchParams.get('filtro') || 'Cultural';

  const [filtroAtivo, setFiltroAtivo] = useState(filtroInicial);
  
  // 2. CRIAR UM ESTADO PARA ARMAZENAR OS ROTEIROS VINDOS DO BANCO
  const [todosOsRoteiros, setTodosOsRoteiros] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  // 3. USAR O useEffect PARA BUSCAR OS DADOS QUANDO O COMPONENTE CARREGAR
  useEffect(() => {
    const fetchRoteiros = async () => {
      setLoading(true); // Inicia o carregamento
      // Busca todos os dados da sua tabela 'roteiros' no Supabase
      const { data, error } = await supabase
        .from('roteiros') // Certifique-se que 'roteiros' é o nome correto da sua tabela
        .select('*');

      if (error) {
        console.error("Erro ao buscar roteiros do Supabase:", error);
      } else {
        // Se a busca for bem-sucedida, atualiza o estado com os dados
        setTodosOsRoteiros(data || []);
      }
      setLoading(false); // Finaliza o carregamento
    };

    fetchRoteiros();
  }, []); // O array vazio [] garante que a busca seja feita apenas uma vez

  const handleMudarFiltro = (novaCategoria) => {
    setFiltroAtivo(novaCategoria);
    router.push(`/roteiros?filtro=${novaCategoria}`, { scroll: false });
  };

  // A lógica de filtro agora funciona com os dados do estado, que vêm do Supabase
  const roteirosFiltrados = todosOsRoteiros.filter(
    (roteiro) => roteiro.categoria === filtroAtivo
  );

  // Exibe uma mensagem enquanto os dados são carregados
  if (loading) {
    return <div>Carregando roteiros...</div>;
  }

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

const PaginaDeRoteiros = () => {
  return (
    // O Suspense é ótimo para lidar com a leitura inicial da URL
    <Suspense fallback={<div>Carregando filtros...</div>}>
      <RoteirosContent />
    </Suspense>
  );
};

export default PaginaDeRoteiros;
