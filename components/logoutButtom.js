// components/LogoutButton.js
"use client";

import { useAuth } from '../contexts/AuthContext'; // Ajuste o caminho para o seu AuthContext
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material'; // Usando o botão do MUI como exemplo

const LogoutButton = () => {
  const { signOut } = useAuth(); // Pega a função signOut do nosso contexto
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      // Redireciona o usuário para a página inicial após o logout
      router.push('/'); 
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Sair
    </Button>
  );
};

export default LogoutButton;