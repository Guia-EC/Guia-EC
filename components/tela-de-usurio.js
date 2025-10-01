"use client";
import { useCallback, useEffect } from "react"; // Adicionado useEffect
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import styles from "./tela-de-usurio.module.css";
import { useAuth } from "../context/AuthContext"; // Importa o hook de autenticação

const getInitials = (name = "") => {
  const nameParts = name.trim().split(" ");
  if (nameParts.length === 1) return nameParts[0] ? nameParts[0][0].toUpperCase() : "";

  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];

  const firstInitial = firstName ? firstName[0].toUpperCase() : "";
  const lastInitial = lastName ? lastName[0].toUpperCase() : "";

  return `${firstInitial}${lastInitial}`;
};

const TelaDeUsurio = ({ className = "", tela = "Home" }) => {
  const router = useRouter();
  
  // --- LÓGICA DE AUTENTICAÇÃO E LOGOUT ---
  const { user, signOut, loading } = useAuth(); // Pega o usuário, a função signOut e o estado de loading

  const handleLogout = async () => {
    try {
      await signOut();
      // Redireciona para a página inicial após o logout
      router.push('/'); 
    } catch (error) {
      console.error("Erro ao fazer logout:", error.message);
    }
  };

  // --- PROTEÇÃO DA ROTA: Redireciona se não estiver logado ---
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);
  // --- FIM DA LÓGICA ---

  const onHistricoDeRoteirosClick = useCallback(() => {
    router.push("/histrico-de-roteiros");
  }, [router]);

  const onGerenciamentoClick = useCallback(() => {
    router.push("/gerenciamento-de-senha");
  }, [router]);

  const onFaleConoscoClick = useCallback(() => {
    router.push("/fale-conosco");
  }, [router]);
  
  // Mostra um estado de carregamento enquanto a sessão é verificada
  if (loading || !user) {
    return <div>Carregando perfil...</div>;
  }

    // ========================= DADOS DINÂMICOS =========================
  // Pegamos o nome completo do objeto 'user' (com um fallback para o email)
  const fullName = user.fullName || user.email;
  // Calculamos as iniciais
  const initials = getInitials(fullName);
  // ===================================================================

  return (
    <section
      className={[styles.telaDeUsurio, className].join(" ")}
      data-tela={tela}
    >
      <Box className={styles.header} />
      <Box className={styles.body}>
        <Box className={styles.perfil}>
          <Box className={styles.telaDeUsurioPerfil} />
          <Typography
            className={styles.dr}
            variant="h1" 
            sx={{ fontWeight: "400", fontSize: '4rem' }}
          >
            {initials}
          </Typography>
        </Box>
        <Box className={styles.nomeEEMail}>
          <Typography
            className={styles.douglasRocha}
            sx={{ fontWeight: "700", fontSize: '20px' }}
          >
            {fullName}
          </Typography>
          {/* Exibe o e-mail do usuário logado dinamicamente */}
          <div className={styles.douglasrochagmailcom}>
            {user.email}
          </div>
        </Box>
      </Box>
      <Box className={styles.telaDeUsurioBody}>
        <Button
          className={styles.histricoDeRoteiros}
          startIcon={<img width="16px" height="16px" src="/map-1.png" />}
          disableElevation
          variant="outlined"
          sx={{ /* ... (estilos inalterados) ... */ }}
          onClick={onHistricoDeRoteirosClick}
        >
          Histórico de Roteiros
        </Button>
       {/* <Button
          className={styles.gerenciamentoDeSenha}
          startIcon={<img width="16px" height="16px" src="/padlock-1.png" />}
          disableElevation
          variant="outlined"
          sx={{}}
          onClick={onGerenciamentoClick}>
          Gerenciamento de Senha
        </Button> */}
        <Button
          className={styles.faleConosco}
          startIcon={<img width="16px" height="16px" src="/message-1.png" />}
          disableElevation
          variant="outlined"
          sx={{ /* ... (estilos inalterados) ... */ }}
          onClick={onFaleConoscoClick}
        >
          Fale Conosco
        </Button>
        
        {/* Botão de Sair agora com a função de logout */}
        <Box 
          className={styles.botoDeSair} 
          onClick={handleLogout} 
          style={{ cursor: 'pointer' }}
        >
          <Image
            className={styles.logout11}
            loading="lazy"
            width={16}
            height={16}
            sizes="100vw"
            alt="Sair"
            src="/logout-1-1@2x.png"
          />
          <div className={styles.sair}>Sair</div>
        </Box>
      </Box>
    </section>
  );
};

TelaDeUsurio.propTypes = {
  className: PropTypes.string,
  tela: PropTypes.string,
};

export default TelaDeUsurio;