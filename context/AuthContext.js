// contexts/AuthContext.js
"use client";

import { createContext, useState, useEffect, useContext } from 'react';
// MUDANÇA CRÍTICA: Usamos o cliente da biblioteca de helpers do Next.js
// Isso é essencial para o gerenciamento correto da sessão e para corrigir o erro da RLS.
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // O cliente agora é instanciado aqui, dentro do componente de cliente.
  const supabase = createClientComponentClient(); 

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favoriteIds, setFavoriteIds] = useState(new Set());

  // Sua função de buscar favoritos foi mantida, sem alterações.
  const fetchFavorites = async (userId) => {
    const { data, error } = await supabase
      .from('user_favorites')
      .select('roteiro_id')
      .eq('user_id', userId);

    if (error) {
      console.error("Erro ao buscar favoritos:", error);
      return;
    }
    const ids = new Set(data.map(fav => fav.roteiro_id));
    setFavoriteIds(ids);
  };

  useEffect(() => {
    // LÓGICA REFINADA: Centralizamos a lógica de login/logout em uma função
    // para evitar repetição de código e garantir consistência.
    const handleSession = async (session) => {
      const currentUser = session?.user;
      
      if (currentUser) {
        // Se há um usuário, buscamos seus favoritos
        await fetchFavorites(currentUser.id);
        // E enriquecemos o perfil com o nome completo
        const profile = { ...currentUser, fullName: currentUser.user_metadata?.full_name };
        setUser(profile);
      } else {
        // Se não há usuário (logout), limpamos o estado
        setUser(null);
        setFavoriteIds(new Set());
      }
      setLoading(false);
    };

    // Verificamos a sessão inicial ao carregar a página
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      handleSession(session);
    };
    
    getInitialSession();

    // O listener que mantém a sessão sempre sincronizada
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleSession(session);
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, [supabase.auth]); // Adicionado supabase.auth como dependência para boas práticas

  const value = {
    // Todas as suas funções e estados foram mantidos
    signUp: ({ email, password, fullName }) => {
      return supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });
    },
    signInWithProvider: (provider) => {
      return supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: window.location.origin, 
        },
      });
    },
    signIn: (data) => supabase.auth.signInWithPassword(data),
    signOut: () => supabase.auth.signOut(),
    addFavorite: async (roteiroId) => {
      if (!user?.id || !roteiroId) {
        console.error("ERRO GRAVE: O ID do usuário ou do roteiro está faltando.");
        throw new Error("ID do usuário ou do roteiro está faltando!");
      }
      const { data, error } = await supabase
        .from('user_favorites')
        .insert({ user_id: user.id, roteiro_id: roteiroId })
        .select();
      
      if (error) throw error;

      setFavoriteIds(prevIds => new Set([...prevIds, roteiroId]));
      return data;
    },
    removeFavorite: async (roteiroId) => {
      const { error } = await supabase
        .from('user_favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('roteiro_id', roteiroId);
      
      if (error) throw error;

      setFavoriteIds(prevIds => {
        const newIds = new Set(prevIds);
        newIds.delete(roteiroId);
        return newIds;
      });
    },
    user,
    loading,
    favoriteIds,
  };

  // MUDANÇA SUTIL: Renderizamos os children diretamente.
  // O estado 'loading' ainda está disponível no contexto para quem precisar.
  // Isso evita que a árvore de componentes seja removida e recriada, o que é mais robusto.
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);