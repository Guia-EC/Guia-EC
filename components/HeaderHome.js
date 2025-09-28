// /components/HeaderHome.js

"use client";

import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import { Box, Typography, Avatar } from '@mui/material';

// Pegamos a mesma função de iniciais que usamos na tela de usuário
const getInitials = (name = "") => {
  const nameParts = name.trim().split(" ");
  if (nameParts.length === 1) return nameParts[0] ? nameParts[0][0].toUpperCase() : "";
  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];
  const firstInitial = firstName ? firstName[0].toUpperCase() : "";
  const lastInitial = lastName ? lastName[0].toUpperCase() : "";
  return `${firstInitial}${lastInitial}`;
};

// --- NOVA FUNÇÃO AUXILIAR ---
const getFirstNameAndLastName = (name = "") => {
  // 1. Remove espaços extras e divide o nome em partes
  const nameParts = name.trim().split(" ");

  // 2. Se tiver apenas um nome (ou nenhum), retorna o nome original
  if (nameParts.length <= 1) {
    return name;
  }

  // 3. Pega o primeiro e o último nome
  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];

  // 4. Retorna a combinação deles
  return `${firstName} ${lastName}`;
};

const HeaderHome = () => {
  // Usamos o hook para pegar o estado de autenticação
  const { user, loading } = useAuth();

  // Se estiver carregando ou se não houver usuário, não renderizamos nada
  if (loading || !user) {
    return null;
  }

  // Se o usuário existir, pegamos as informações dele
  const fullName = user.fullName || "Usuário";
  const initials = getInitials(fullName);

  const displayName = getFirstNameAndLastName(fullName);

  return (
    // Envolvemos tudo em um Link do Next.js para tornar clicável
    <Link href="/tela-de-usuario202" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          width: '100vw', 
          gap: 2, // Espaçamento entre o avatar e o texto
          padding: '16px', // Espaçamento interno
          cursor: 'pointer',
          borderBottom: '1px solid #000' // Linha de separação como na sua imagem
        }}
      >
        <Avatar sx={{ bgcolor: '#333' }}>{initials}</Avatar>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2, fontSize: '18px' }}>
            Olá, {displayName}!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bem-vindo!
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default HeaderHome;