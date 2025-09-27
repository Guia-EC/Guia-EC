// contexts/AuthContext.js
"use client";

import { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../lib/supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favoriteIds, setFavoriteIds] = useState(new Set()); // NOVO: Estado para IDs dos favoritos

  const fetchFavorites = async (userId) => {
    const { data, error } = await supabase
      .from('user_favorites')
      .select('roteiro_id')
      .eq('user_id', userId);

    if (error) {
      console.error("Erro ao buscar favoritos:", error);
      return;
    }
    // Usamos um Set para uma verificação rápida e eficiente (ex: .has())
    const ids = new Set(data.map(fav => fav.roteiro_id));
    setFavoriteIds(ids);
  };

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      // =================== LÓGICA DE PERFIL ENRIQUECIDO ===================
      // Adicionamos o nome completo ao objeto do usuário
      const currentUser = session?.user;

      if (currentUser) {
        await fetchFavorites(currentUser.id); // Busca favoritos se a sessão já existir
        const profile = { ...currentUser, fullName: currentUser.user_metadata?.full_name };
        setUser(profile);
      }
      
      const profile = currentUser ? {
        ...currentUser,
        fullName: currentUser.user_metadata?.full_name
      } : null;
      setUser(profile);
      // ====================================================================

      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user;
        if (currentUser) {
          await fetchFavorites(currentUser.id); // Busca favoritos no login
          const profile = { ...currentUser, fullName: currentUser.user_metadata?.full_name };
          setUser(profile);
        } else {
          setUser(null);
          setFavoriteIds(new Set()); // Limpa os favoritos no logout
        }
        setLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const value = {
    // ========================= FUNÇÃO SIGNUP CORRIGIDA =========================
    // Agora ela desestrutura o objeto e salva o fullName nos metadados
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
        provider, // 'google', 'apple', etc.
        options: {
          // Redireciona de volta para a home do seu site em produção
          redirectTo: window.location.origin, 
        },
      });
    },
    // ============================================================================


    signIn: (data) => supabase.auth.signInWithPassword(data),
    signOut: () => supabase.auth.signOut(),
    user,
    favoriteIds,
    addFavorite: async (roteiroId) => {
      const { data, error } = await supabase
        .from('user_favorites')
        .insert({ user_id: user.id, roteiro_id: roteiroId })
        .select();
      
      if (error) throw error;

      // Atualiza o estado local para refletir a mudança instantaneamente
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

      // Atualiza o estado local
      setFavoriteIds(prevIds => {
        const newIds = new Set(prevIds);
        newIds.delete(roteiroId);
        return newIds;
      });
    },
    user,
    loading
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);