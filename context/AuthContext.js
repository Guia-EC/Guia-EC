// contexts/AuthContext.js
"use client";

import { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../lib/supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      // =================== LÓGICA DE PERFIL ENRIQUECIDO ===================
      // Adicionamos o nome completo ao objeto do usuário
      const currentUser = session?.user;
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
      (event, session) => {
        // =================== LÓGICA DE PERFIL ENRIQUECIDO ===================
        const currentUser = session?.user;
        const profile = currentUser ? {
          ...currentUser,
          fullName: currentUser.user_metadata?.full_name
        } : null;
        setUser(profile);
        // ====================================================================
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
    // ============================================================================

    signIn: (data) => supabase.auth.signInWithPassword(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);