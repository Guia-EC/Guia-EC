// app/verificar-codigo/page.js
"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

export default function VerifyOtp() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const searchParams = useSearchParams();
  
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Pega o e-mail da URL para usarmos na verificação
    const emailFromUrl = searchParams.get('email');
    if (emailFromUrl) {
      setEmail(decodeURIComponent(emailFromUrl));
    }
  }, [searchParams]);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error: verifyError } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: 'recovery',
    });

    if (verifyError) {
      setError('Código inválido ou expirado. Tente novamente.');
      console.error("Erro ao verificar OTP:", verifyError.message);
    } else {
      // SUCESSO! O usuário agora tem uma sessão válida para trocar a senha.
      // Redirecionamos para a página final.
      router.push('/resetar-senha');
    }
    setLoading(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', p: 2 }}>
      <Typography component="h1" variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
        Verifique seu E-mail
      </Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary', textAlign: 'center' }}>
        Enviamos um código de 6 dígitos para <strong>{email}</strong>. Por favor, insira-o abaixo.
      </Typography>
      
      <Box component="form" onSubmit={handleVerifyOtp} sx={{ width: '100%', maxWidth: '400px' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="otp"
          label="Código de 6 dígitos"
          name="otp"
          autoFocus
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          disabled={loading}
        />
        
        {error && <Alert severity="error" sx={{ mt: 2, width: '100%' }}>{error}</Alert>}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={loading}
          sx={{ mt: 3, mb: 2, backgroundColor: 'black', '&:hover': { backgroundColor: '#333' } }}
        >
          {loading ? 'Verificando...' : 'Verificar e Continuar'}
        </Button>
      </Box>
    </Box>
  );
}