// app/verificar-codigo/page.js
import { Suspense } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import VerifyOtpForm from './VerifyOtpForm'; // Importa nosso novo componente

// Componente de carregamento para o Suspense
function LoadingFallback() {
  return <CircularProgress color="inherit" />;
}

export default function VerifyOtpPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', p: 2 }}>
      <Typography component="h1" variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
        Verifique seu E-mail
      </Typography>
      
      <Suspense fallback={<LoadingFallback />}>
        <VerifyOtpForm />
      </Suspense>
    </Box>
  );
}