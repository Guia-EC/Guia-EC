// /app/resetar-senha/page.js
"use client";

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

export default function ResetPassword() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [sessionExists, setSessionExists] = useState(false);

  useEffect(() => {
    // O Supabase Auth Helper detecta automaticamente o token na URL 
    // e cria uma sessão de 'PASSWORD_RECOVERY'.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        setSessionExists(true);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    if (password.length < 6) {
        setError("Sua senha precisa ter no mínimo 6 caracteres.");
        setLoading(false);
        return;
    }

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError('Não foi possível redefinir sua senha. Tente gerar um novo link.');
      console.error("Erro ao redefinir senha:", error.message);
    } else {
      setMessage('Senha redefinida com sucesso! Você será redirecionado para o login.');
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    }

    setLoading(false);
  };

  if (!sessionExists) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', p: 2 }}>
            <Typography variant="h6">Verificando seu link de redefinição...</Typography>
            <Typography sx={{ mt: 2, color: 'text.secondary' }}>Se nada acontecer, o link pode ser inválido ou ter expirado.</Typography>
        </Box>
    );
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      p: 2
    }}>
      <Typography component="h1" variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
        Cadastre sua nova senha
      </Typography>
      
      <Box component="form" onSubmit={handlePasswordReset} sx={{ width: '100%', maxWidth: '400px' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Nova Senha"
          type="password"
          id="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        
        {message && <Alert severity="success" sx={{ mt: 2, width: '100%' }}>{message}</Alert>}
        {error && <Alert severity="error" sx={{ mt: 2, width: '100%' }}>{error}</Alert>}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={loading}
          sx={{ mt: 3, mb: 2, backgroundColor: 'black', '&:hover': { backgroundColor: '#333' } }}
        >
          {loading ? 'Salvando...' : 'Salvar Nova Senha'}
        </Button>
      </Box>
    </Box>
  );
}