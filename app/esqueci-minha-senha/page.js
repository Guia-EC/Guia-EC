// /app/esqueci-minha-senha/page.js
"use client";

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { Box, Typography, TextField, Button, Alert, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export default function ForgotPassword() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordResetRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    // A chamada ao Supabase continua a mesma! Não precisa do redirectTo.
    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      setError('Não foi possível enviar o código. Verifique o e-mail e tente novamente.');
    } else {
      // SUCESSO! Redireciona para a página de verificação, passando o email na URL
      router.push(`/verificar-codigo?email=${encodeURIComponent(email)}`);
    }

    setLoading(false);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      p: 2
    }}>
      <Typography component="h1" variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
        Esqueceu sua senha?
      </Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }}>
        Sem problemas! Digite seu e-mail e enviaremos um link para você cadastrar uma nova senha.
      </Typography>
      
      <Box component="form" onSubmit={handlePasswordResetRequest} sx={{ width: '100%', maxWidth: '400px' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Endereço de E-mail"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          {loading ? 'Enviando...' : 'Enviar Link de Redefinição'}
        </Button>
        
        <Box sx={{ textAlign: 'center' }}>
            <MuiLink component={Link} href="/login" variant="body2">
                Voltar para o Login
            </MuiLink>
        </Box>
      </Box>
    </Box>
  );
}