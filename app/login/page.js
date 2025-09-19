"use client"; // Necessário para usar hooks como useState e onClick

import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext"; // Importa nosso hook de autenticação
import styles from "./pgina-de-login.module.css"; // Supondo que o CSS está na mesma pasta

// Renomeei o componente para um nome mais padrão em React
const PaginaDeLogin = () => {
  const { signIn, signUp } = useAuth(); // Pega as funções do nosso AuthContext
  const router = useRouter();

  // Estados para controlar os valores dos inputs e mensagens de erro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função para lidar com o clique no botão de "Entrar"
  const handleLogin = async (e) => {
    e.preventDefault(); // Impede o recarregamento padrão da página
    setError("");
    setIsSubmitting(true);
    
    const { error } = await signIn({ email, password });
    
    if (error) {
      setError(error.message);
    } else {
      router.push("/"); // Redireciona para a home após o login
    }
    setIsSubmitting(false);
  };
  
  // Função para lidar com um futuro botão de "Cadastrar"
  // Atualmente o seu layout tem um botão "Entrar" e "Cadastrar" no topo
  const handleSignUp = async () => {
    setError("");
    setIsSubmitting(true);
    const { error } = await signUp({ email, password });
    if (error) {
      setError(error.message);
    } else {
      // Idealmente, redirecionar ou mostrar uma mensagem de sucesso
      alert('Cadastro realizado! Verifique seu e-mail para confirmar a conta.');
    }
    setIsSubmitting(false);
  };
  
  // O componente Cadastrar do seu código original pode ser transformado em um botão que chama handleSignUp
  const CadastrarButton = () => (
      <Button onClick={handleSignUp} variant="outlined" sx={{ borderRadius: '20px' }}>
          Cadastrar
      </Button>
  );

  return (
    // A tag <form> agora tem um onSubmit para a função de login
    <form
      className={styles.pginaDeLogin}
      onSubmit={handleLogin}
    >
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
        {/* Componente estático foi trocado por um botão funcional */}
        <CadastrarButton />
      </Box>
      <section className={styles.body}>
        <Box className={styles.descrio}>
          <Typography
            className={styles.login}
            variantMapping={{ inherit: "h1" }}
            sx={{ fontFamily: "var(--font-poppins)", fontWeight: "700", fontSize: "var(--font-size-32)" }}
          >
            Login
          </Typography>
          <div className={styles.acesseSuaConta}>
            Acesse sua conta para explorar roteiros em São Paulo
          </div>
        </Box>
        <Box className={styles.inputsEBotoDeEntrar}>
          <Box className={styles.inputs}>
            <Box className={styles.eMail}>
              <Box className={styles.ttulo}>
                <div className={styles.pginaDeLoginEMail}>E-mail</div>
              </Box>
              <TextField
                className={styles.input}
                placeholder="Digite seu e-mail..."
                variant="outlined"
                value={email} // Conecta o valor ao estado
                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado ao digitar
                required // Campo obrigatório
                sx={{ /* ... (estilos existentes) ... */ }}
              />
            </Box>
            <Box className={styles.senha}>
              <Box className={styles.pginaDeLoginTtulo}>
                <div className={styles.pginaDeLoginSenha}>Senha</div>
              </Box>
              <TextField
                className={styles.pginaDeLoginInput}
                placeholder="Digite sua senha..."
                type="password" // Esconde a senha
                variant="outlined"
                value={password} // Conecta o valor ao estado
                onChange={(e) => setPassword(e.target.value)} // Atualiza o estado ao digitar
                required // Campo obrigatório
                sx={{ /* ... (estilos existentes) ... */ }}
              />
            </Box>
          </Box>
          <Button
            className={styles.botoDeEntrar}
            disableElevation
            variant="contained"
            type="submit" // O tipo "submit" aciona o onSubmit do formulário
            disabled={isSubmitting} // Desabilita o botão durante o envio
            sx={{ /* ... (estilos existentes) ... */ }}
          >
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </Button>
          {/* Mostra mensagens de erro, se houver */}
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        </Box>
      </section>
      <Box className={styles.footer}>
        {/* A lógica para login com Google/iCloud precisaria de uma implementação separada */}
        <div className={styles.ouContinueCom}>Ou continue com</div>
        <Box className={styles.googleEIcloud}>
          <Button className={styles.logoGoogle} /* ... */ >Google</Button>
          <Button className={styles.logoIcloud} /* ... */ >iCloud</Button>
        </Box>
      </Box>
    </form>
  );
};

export default PaginaDeLogin;