// Arquivo da sua página de favoritos (ex: app/favoritos/page.js)

"use client";
import { useState, useEffect } from "react";
import { Typography, Box, Link as MuiLink, CircularProgress } from "@mui/material";
import Link from 'next/link';
import { useAuth } from "../../context/AuthContext"; // Para saber quem está logado e seus favoritos
import { supabase } from "../../lib/supabaseClient";  // Para buscar os detalhes dos roteiros
import CardRoteiro from "../../components/cardRoteiro"; // SEU COMPONENTE DE CARD
import Navbar from "../../components/navbar";
import styles from "./roteiros-favoritados204.module.css";


const RoteirosFavoritadosPage = () => {
  // --- Hooks para os dados ---
  const { user, favoriteIds, loading: authLoading } = useAuth();
  const [roteiros, setRoteiros] = useState([]); // Array para guardar os detalhes dos roteiros
  const [loading, setLoading] = useState(true); // Estado de carregamento da página

  // --- Efeito para buscar os roteiros quando a lista de favoritos mudar ---
  useEffect(() => {
    const fetchRoteiroDetails = async () => {
      // Se não houver favoritos, não há nada a buscar.
      if (favoriteIds.size === 0) {
        setRoteiros([]);
        setLoading(false);
        return;
      }
      
      setLoading(true);
      const ids = Array.from(favoriteIds); // Converte o Set para um Array para a query
      
      // Busca na tabela 'roteiros' todos os roteiros cujos IDs estão na nossa lista de favoritos
      const { data, error } = await supabase
        .from('roteiros')
        .select('*')
        .in('id', ids);

      if (error) {
        console.error("Erro ao buscar detalhes dos roteiros:", error);
      } else {
        setRoteiros(data); // Salva os roteiros encontrados no estado
      }
      setLoading(false);
    };

    // Só busca os dados se a autenticação já tiver carregado e houver um usuário
    if (!authLoading && user) {
      fetchRoteiroDetails();
    } else if (!authLoading && !user) {
      setLoading(false); // Se não há usuário, paramos o carregamento
    }
  }, [favoriteIds, authLoading, user]);


  // --- Renderização Condicional ---

  // 1. Renderização para estado de Carregamento
  if (authLoading || loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  // 2. Renderização para usuário DESLOGADO
  if (!user) {
    return (
      <Box className={styles.roteirosFavoritados20} sx={{ textAlign: 'center', p: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "600" }}>Meus Roteiros Favoritos</Typography>
        <Typography sx={{ mt: 4 }}>
          Você precisa ter uma conta para salvar seus roteiros preferidos.
        </Typography>
        <Link href="/login" passHref>
          <MuiLink sx={{ mt: 2, cursor: 'pointer', fontWeight: 'bold' }}>
            Fazer Login ou Cadastrar
          </MuiLink>
        </Link>
        <Navbar activePage="favorites" />
      </Box>
    );
  }

  // 3. Renderização principal para usuário LOGADO
  return (
    <Box className={styles.roteirosFavoritados20}>
      <Box className={styles.ttulo}>
        <Typography
          className={styles.meusRoteirosFavoritos}
          variant="h2" // Ajustado para melhor semântica
          sx={{ fontWeight: "700", fontSize: '18px', paddingBottom: '5px', borderBottom: '1px solid black', width: '65%',  }}
        >
          Meus Roteiros Favoritos
        </Typography>
        <Box className={styles.detalhe} />
      </Box>

      {/* --- Mapeamento Dinâmico dos Cards --- */}
      {roteiros.length > 0 ? (
        // Se houver roteiros favoritados, mapeia e exibe cada um
        roteiros.map(roteiro => (
          <CardRoteiro
            key={roteiro.id}
            roteiroId={roteiro.id}
            titulo={roteiro.nome}
            descricao={roteiro.descricao}
            localizacao={roteiro.localizacao}
            imagemSrc={roteiro.url_imagem}
            categoria={roteiro.categoria}
            link={roteiro.link_roteiro}
            variant="trash" // IMPORTANTE: Passa a variante para mostrar o ícone de lixeira
          />
        ))
      ) : (
        // Se estiver logado, mas sem favoritos
        <Typography sx={{ textAlign: 'start', paddingLeft: '5px' }}>
          Você ainda não favoritou nenhum roteiro. Explore o app e clique na estrela para salvar!
        </Typography>
      )}

      <Navbar activePage="favorites" />
    </Box>
  );
};

export default RoteirosFavoritadosPage;