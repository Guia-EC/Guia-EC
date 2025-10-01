// app/verificar-codigo/VerifyOtpForm.js
"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

export default function VerifyOtpForm() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const searchParams = useSearchParams();
  
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const emailFromUrl = searchParams.get('email');
    if (emailFromUrl) {
      setEmail(decodeURIComponent(emailFromUrl));
    }
  }, [searchParams]);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: verifyError } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: 'recovery',
    });

    if (verifyError) {
      setError('Código inválido ou expirado. Tente novamente.');
    } else {
      router.push('/resetar-senha');
    }
    setLoading(false);
  };

  return (
    <>
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
    </>
  );
}