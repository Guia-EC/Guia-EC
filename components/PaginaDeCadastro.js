// /components/PaginaDeCadastro.js

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { Box, Typography, TextField, Button, CircularProgress, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Image from "next/image";
import styles from "./PaginaDeCadastro.module.css";
import HeaderButton from "./HeaderButton"; // Verifique se o nome do arquivo/componente está correto

// --- FUNÇÃO AUXILIAR PARA VALIDAR A SENHA ---
const validatePassword = (password) => {
  return {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
};

// --- COMPONENTE PARA MOSTRAR OS REQUISITOS ---
const PasswordRequirements = ({ requirements }) => {
  const Requirement = ({ met, text }) => (
    <ListItem sx={{ py: 0.1, px: 0 }}>
      <ListItemIcon sx={{ minWidth: '30px' }}>
        {met ? <CheckCircleIcon fontSize="small" color="success" /> : <CancelIcon fontSize="small" color="error" />}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ color: met ? 'green' : 'red', textDecoration: met ? 'line-through' : 'none' }} />
    </ListItem>
  );

  return (
    <Box sx={{ mt: 1 }}>
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

const PaginaDeCadastro = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [passwordReqs, setPasswordReqs] = useState(validatePassword(""));
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signUp } = useAuth();
  const router = useRouter();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordReqs(validatePassword(newPassword));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (email !== confirmEmail) {
      setError("Os e-mails não correspondem!");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await signUp({ email, password, fullName });
      if (error) throw error;
      
      setSuccessMessage("Cadastro realizado! Verifique seu e-mail para ativar a conta. Em uns instantes você será redirecionado para a página de login!");
      setTimeout(() => {
        router.push('/login');
      }, 5000);

    } catch (err) {
      console.error("Erro no cadastro:", err.message);
      if (err.message.includes("User already registered")) {
        setError("Este e-mail já está em uso. Tente fazer login.");
      } else if (err.message.includes("Password should be at least")) {
        setError("Sua senha não atende aos requisitos de segurança.");
      } else {
        setError("Ocorreu um erro ao realizar o cadastro. Tente novamente.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box className={styles.paginaDeCadastro}>
      <Box className={styles.header}>
        {/* ========================================================= */}
        {/* PROPRIEDADES DA IMAGEM E CLASSES RESTAURADAS         */}
        {/* ========================================================= */}
        <Image
          className={styles.logoIcon}
          loading="lazy"
          width={42.8}
          height={39}
          alt="Logo"
          src="/logo-ec-1@2x.png"
        />
        <HeaderButton variant="login" />
      </Box>

      <form onSubmit={handleSignUp}>
        <section className={styles.body}>
          <Box className={styles.descricao}>
            <Typography variant="h1" className={styles.titulo}>
              Crie sua Conta
            </Typography>
            <div className={styles.subtitulo}>
              Explore roteiros incríveis em São Paulo
            </div>
          </Box>
          <Box className={styles.formContainer}>
            <TextField label="Nome Completo" variant="outlined" fullWidth margin="normal" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            <TextField label="E-mail" type="email" variant="outlined" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextField label="Confirmação de E-mail" type="email" variant="outlined" fullWidth margin="normal" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} required error={email !== confirmEmail && confirmEmail !== ""} helperText={email !== confirmEmail && confirmEmail !== "" ? "Os e-mails não correspondem" : ""} />
            <TextField label="Senha" type="password" variant="outlined" fullWidth margin="normal" value={password} onChange={handlePasswordChange} required />
            
            <PasswordRequirements requirements={passwordReqs} />
            
            {error && <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>{error}</Typography>}
            {successMessage && <Typography color="primary" sx={{ mt: 2, textAlign: 'center', color: 'green' }}>{successMessage}</Typography>}

            <Button type="submit" variant="contained" fullWidth className={styles.submitButton} sx={{ mt: 2, p: 1.5 }} disabled={isSubmitting}>
              {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Cadastrar"}
            </Button>
          </Box>
        </section>
      </form>
    </Box>
  );
};

export default PaginaDeCadastro;