// /components/pgina-de-login.js

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { Box, Typography, TextField, Button, InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Image from "next/image";
import HeaderButton from "./HeaderButton"; // Seu componente de botão de navegação
import styles from "./pgina-de-login.module.css";

const PginaDeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // NOVO ESTADO
  const [error, setError] = useState(null);
  
  const { signIn } = useAuth();
  const router = useRouter();


  //Para lógica de mostrar ou esconder a senha!
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPassword(validatePassword(newPassword));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const { error } = await signIn({email, password});
      if (error) throw error;
      router.push('/');
    } catch (err) {
      setError("E-mail ou senha inválidos.");
      console.error("Erro no login:", err.message);
    }
  };

  return (
    // 1. O componente principal agora é uma <Box>, não o <form>.
    <Box className={styles.pginaDeLoginContainer}>
      {/* O cabeçalho com o botão de navegação fica AQUI FORA do form */}
      <Box className={styles.header}>
        <Image
          className={styles.logoEc1Icon}
          loading="lazy"
          width={42.8}
          height={39}
          sizes="100vw"
          alt="Logo"
          src="/logo-ec-1@2x.png"
        />
        {/* Este botão tem sua própria lógica de navegação e não submete o form */}
        <HeaderButton variant="cadastro" /> 
      </Box>

      {/* 2. O <form> começa aqui, envolvendo apenas os campos de login. */}
      <form className={styles.pginaDeLogin} onSubmit={handleLogin}>
        <section className={styles.body}>
          <Box className={styles.descrio}>
            <Typography className={styles.login} variant="h1">
              Login
            </Typography>
            <div className={styles.acesseSuaConta}>
              Acesse sua conta para explorar roteiros em São Paulo
            </div>
          </Box>
          <Box className={styles.inputsEBotoDeEntrar}>
            <Box className={styles.inputs}>
              <TextField
                label="E-mail"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormControl sx={{ mt: 1, mb: 1 }} variant="outlined" fullWidth required>
              <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Senha"
              />
            </FormControl>
            </Box>
            {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
            
            {/* 3. Este é o único botão que envia o formulário */}
            <Button
              className={styles.botoDeEntrar}
              variant="contained"
              type="submit" // Este é o botão que efetivamente faz o login
              fullWidth
              sx={{ mt: 2, p: 1.5 }}
            >
              Entrar
            </Button>

            <Typography className={styles.footer} variant="h1">
              Ou continue com
            </Typography>

            <Box className={styles.loginGoogleApple}>
              <Button className={styles.botoGoogleApple}>
                <Image
                  className={styles.logoGoogle}
                  loading="lazy"
                  width={42.8}
                  height={39}
                  sizes="100vw"
                  alt="Logo"
                  src="/Google-Icon.svg"
                />
                Google
              </Button>
              <Button className={styles.botoGoogleApple}>
                <Image
                  className={styles.logoApple}
                  loading="lazy"
                  width={42.8}
                  height={39}
                  sizes="100vw"
                  alt="Logo"
                  src="/Apple-Icon.svg"
                />
                iCloud
              </Button>
            </Box>
          </Box>
        </section>
      </form>
    </Box>
  );
};

export default PginaDeLogin;