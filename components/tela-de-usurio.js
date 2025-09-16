"use client";
import { useCallback } from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import styles from "./tela-de-usurio.module.css";

const TelaDeUsurio = ({ className = "", tela = "Home" }) => {
  const router = useRouter();

  const onMeusDadosClick = useCallback(() => {
    router.push("/meus-dados"); // <-- Altere para a rota correta
  }, [router]);

  const onHistricoDeRoteirosClick = useCallback(() => {
    router.push("/histrico-de-roteiros");
  }, [router]);

  return (
    <section
      className={[styles.telaDeUsurio, className].join(" ")}
      data-tela={tela}
    >
      <Box className={styles.cardDeUsurio}>
        <Box className={styles.header} />
        <Box className={styles.body}>
           <Box className={styles.perfil}>
          <Box className={styles.telaDeUsurioPerfil} />
          <Typography
            className={styles.dr}
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{ fontWeight: "400" }}
          >
            DR
          </Typography>
        </Box>
          <Box className={styles.nomeEEMail}>
            <Typography
              className={styles.douglasRocha}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ fontWeight: "700" }}
            >
              Douglas Rocha
            </Typography>
            <div className={styles.douglasrochagmailcom}>
              douglas.rocha@gmail.com
            </div>
          </Box>
        </Box>
      </Box>
      <Box className={styles.telaDeUsurioBody}>
        <Button
          className={styles.meusDados}
          startIcon={<img width="16px" height="16px" src="/adicionar-usuario-1.png" />}
          disableElevation
          variant="outlined"
          sx={{
            // A linha "justifyContent" foi REMOVIDA daqui
            textTransform: "none",
            color: "#000",
            fontSize: "16",
            borderColor: "#000",
            borderRadius: "10px",
            "&:hover": { borderColor: "#000" },
            width: 345,
            height: 54,
          }}
          onClick={onMeusDadosClick}
        >
          Meus Dados
        </Button>

        <Button
          className={styles.histricoDeRoteiros}
          startIcon={<img width="16px" height="16px" src="/map-1.png" />}
          // ... resto dos botões que já estavam corretos
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "16",
            borderColor: "#000",
            borderRadius: "10px",
            "&:hover": { borderColor: "#000" },
            width: 345,
            height: 54,
          }}
          onClick={onHistricoDeRoteirosClick}
        >
          Histórico de Roteiros
        </Button>
        <Button
          className={styles.gerenciamentoDeSenha}
          startIcon={<img width="16px" height="16px" src="/padlock-1.png" />}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "16",
            borderColor: "#000",
            borderRadius: "10px",
            "&:hover": { borderColor: "#000" },
            width: 345,
            height: 54,
          }}
        >
          Gerenciamento de Senha
        </Button>
        <Button
          className={styles.faleConosco}
          startIcon={<img width="16px" height="16px" src="/message-1.png" />}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "16",
            borderColor: "#000",
            borderRadius: "10px",
            "&:hover": { borderColor: "#000" },
            width: 345,
            height: 54,
          }}
        >
          Fale Conosco
        </Button>
        <Box className={styles.botoDeSair}>
          <Image
            className={styles.logout11}
            loading="lazy"
            width={16}
            height={16}
            sizes="100vw"
            alt=""
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