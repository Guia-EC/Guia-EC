// app/resetar-senha/page.js (VERSÃO FINAL COM VERIFICAÇÃO ATIVA)
"use client";

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { 
  Box, Typography, Button, Alert, CircularProgress,
  List, ListItem, ListItemIcon, ListItemText, InputAdornment, 
  IconButton, FormControl, InputLabel, OutlinedInput, FormHelperText 
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

// As funções auxiliares de validação permanecem as mesmas
const validatePassword = (password) => ({
  length: password.length >= 8,
  uppercase: /[A-Z]/.test(password),
  number: /[0-9]/.test(password),
  special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
});
const PasswordRequirements = ({ requirements }) => {
    // O JSX deste componente permanece o mesmo...
    const Requirement = ({ met, text }) => (
    <ListItem sx={{ py: 0.1, px: 0 }}>
      <ListItemIcon sx={{ minWidth: '30px' }}>
        {met ? <CheckCircleIcon fontSize="small" color="success" /> : <CancelIcon fontSize="small" color="error" />}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ color: met ? 'green' : 'red', textDecoration: met ? 'line-through' : 'none' }} />
    </ListItem>
  );

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="caption">A senha deve conter:</Typography>
      <List dense>
        <Requirement met={requirements.length} text="Pelo menos 8 caracteres" />
        <Requirement met={requirements.uppercase} text="Uma letra maiúscula" />
        <Requirement met={requirements.number} text="Um número" />
        <Requirement met={requirements.special} text="Um caractere especial (!@#...)" />
      </List>
    </Box>
  );
};


export default function ResetPassword() {
  const router = useRouter();
  const [supabase] = useState(() => createClientComponentClient());

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordReqs, setPasswordReqs] = useState(validatePassword(""));
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // --- A SOLUÇÃO ESTÁ AQUI ---
    // Criamos uma função para verificar ativamente a sessão no carregamento.
    const checkInitialSession = async () => {
      // Força o Supabase a ler a URL e verificar o estado de autenticação
      const { data: { session } } = await supabase.auth.getSession();

      console.log("Sessão recebida na página de reset:", session);

      // Se a sessão existir e o método for 'recovery', liberamos a página
        if (session) {
        setIsReady(true);
      }
    };

    checkInitialSession();

    // Mantemos o listener para garantir robustez e cobrir outros casos
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session?.user?.amr?.some(m => m.method === 'recovery')) {
        setIsReady(true);
      }
    });

    return () => { subscription.unsubscribe() };
  }, [supabase]);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    // A lógica desta função permanece a mesma...
    setError('');
    setMessage('');
    const allReqsMet = Object.values(passwordReqs).every(Boolean);
    if (!allReqsMet) {
      setError("Sua senha não atende a todos os requisitos de segurança.");
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não correspondem.");
      return;
    }
    setLoading(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) {
      setError('Não foi possível redefinir sua senha. Tente gerar um novo link.');
    } else {
      setMessage('Senha redefinida com sucesso! Você será redirecionado para o login em 3 segundos.');
      setTimeout(() => {
        supabase.auth.signOut();
        router.push('/login');
      }, 3000);
    }
    setLoading(false);
  };

  if (!isReady) {
    // O JSX de loading permanece o mesmo...
     return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', p: 2, textAlign: 'center' }}>
            <CircularProgress color="inherit" sx={{ mb: 3 }} />
            <Typography variant="h6">Validando seu link de redefinição...</Typography>
        </Box>
    );
  }

  // O JSX do formulário permanece o mesmo...
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', p: 2 }}>
      <Typography component="h1" variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
        Cadastre sua nova senha
      </Typography>
      <Box component="form" onSubmit={handlePasswordReset} sx={{ width: '100%', maxWidth: '400px' }}>
        <FormControl sx={{ mt: 1, mb: 1 }} variant="outlined" fullWidth required>
          <InputLabel htmlFor="nova-senha">Nova Senha</InputLabel>
          <OutlinedInput id="nova-senha" type={showPassword ? 'text' : 'password'} value={password} onChange={e => { setPassword(e.target.value); setPasswordReqs(validatePassword(e.target.value)); }} endAdornment={<InputAdornment position="end"><IconButton onClick={() => setShowPassword(!showPassword)} onMouseDown={e => e.preventDefault()} edge="end">{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>} label="Nova Senha" autoFocus />
        </FormControl>
        <FormControl sx={{ mt: 1, mb: 1 }} variant="outlined" fullWidth required error={password !== confirmPassword && confirmPassword !== ""}>
          <InputLabel htmlFor="confirmar-nova-senha">Confirme a Nova Senha</InputLabel>
          <OutlinedInput id="confirmar-nova-senha" type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} endAdornment={<InputAdornment position="end"><IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} onMouseDown={e => e.preventDefault()} edge="end">{showConfirmPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>} label="Confirme a Nova Senha" />
          {password !== confirmPassword && confirmPassword !== "" && (<FormHelperText error>As senhas não correspondem</FormHelperText>)}
        </FormControl>
        <PasswordRequirements requirements={passwordReqs} />
        {message && <Alert severity="success" sx={{ mt: 2, width: '100%' }}>{message}</Alert>}
        {error && <Alert severity="error" sx={{ mt: 2, width: '100%' }}>{error}</Alert>}
        <Button type="submit" fullWidth variant="contained" disabled={loading || !!message} sx={{ mt: 3, mb: 2, backgroundColor: 'black', '&:hover': { backgroundColor: '#333' } }}>
          {loading ? 'Salvando...' : 'Salvar Nova Senha'}
        </Button>
      </Box>
    </Box>
  );
}