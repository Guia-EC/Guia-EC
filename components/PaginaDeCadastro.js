// /components/PaginaDeCadastro.js

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { Box, Typography, TextField, Button } from "@mui/material";
import Image from "next/image";
import styles from "./PaginaDeCadastro.module.css"; // Crie este arquivo CSS também
import HeaderButton from "./HeaderButton";

const PaginaDeCadastro = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Novo campo
  const [error, setError] = useState(null);

  const { signUp } = useAuth();
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    // Validação: Checar se as senhas são iguais
    if (password !== confirmPassword) {
      setError("As senhas não correspondem!");
      return; // Interrompe a execução
    }

    setError(null);

    try {
      const { error } = await signUp(email, password, fullName);
      if (error) throw error;
      
      alert("Cadastro realizado com sucesso! Você será redirecionado.");
      router.push('/tela-de-usuario'); // Redireciona para o perfil

    } catch (err) {
      setError(err.message);
      console.error("Erro no cadastro:", err.message);
    }
  };

  return (
    <form className={styles.paginaDeCadastro} onSubmit={handleSignUp}>
      <Box className={styles.header}>
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
          <TextField
            label="Nome Completo"
            variant="outlined"
            fullWidth
            margin="normal"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <TextField
            label="E-mail"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            label="Confirmação de Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            // Mostra erro se as senhas forem diferentes e o campo for tocado
            error={password !== confirmPassword && confirmPassword !== ""}
            helperText={password !== confirmPassword && confirmPassword !== "" ? "As senhas não correspondem" : ""}
          />

          {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className={styles.submitButton}
            sx={{ mt: 2, p: 1.5 }}
          >
            Cadastrar
          </Button>
        </Box>
      </section>
    </form>
  );
};

export default PaginaDeCadastro;