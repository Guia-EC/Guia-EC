import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Image from "next/image";
import Cadastrar from "./cadastrar";
import PropTypes from "prop-types";
import styles from "./pgina-de-login.module.css";

const PginaDeLogin = ({ className = "", pGina = "Login" }) => {
  return (
    <form
      className={[styles.pginaDeLogin, className].join(" ")}
      data-pGina={pGina}
    >
      <Box className={styles.header}>
        <Image
          className={styles.logoEc1Icon}
          loading="lazy"
          width={42.8}
          height={39}
          sizes="100vw"
          alt=""
          src="/logo-ec-1@2x.png"
        />
        <Cadastrar estado="Entrar" />
      </Box>
      <section className={styles.body}>
        <Box className={styles.descrio}>
          <Typography
            className={styles.login}
            variantMapping={{ inherit: "h1" }}
            sx={{
              fontFamily: "var(--font-poppins)",
              fontWeight: "700",
              fontSize: "var(--font-size-32)",
            }}
          >
            Login
          </Typography>
          <div className={styles.acesseSuaConta}>
            Acesse sua conta para explorar roterios em São Paulo
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
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "54px",
                    backgroundColor: "#f1f1f1",
                    borderRadius: "10px",
                    fontSize: "12px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
            </Box>
            <Box className={styles.senha}>
              <Box className={styles.pginaDeLoginTtulo}>
                <div className={styles.pginaDeLoginSenha}>Senha</div>
              </Box>
              <TextField
                className={styles.pginaDeLoginInput}
                placeholder="Digite sua senha..."
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "54px",
                    backgroundColor: "#f1f1f1",
                    borderRadius: "10px",
                    fontSize: "12px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
            </Box>
          </Box>
          <Button
            className={styles.botoDeEntrar}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fafafa",
              fontSize: "16",
              background: "#0f0f0f",
              borderRadius: "10px",
              "&:hover": { background: "#0f0f0f" },
              width: 341,
              height: 54,
            }}
            type="submit"
          >
            Entrar
          </Button>
        </Box>
      </section>
      <Box className={styles.footer}>
        <div className={styles.ouContinueCom}>Ou continue com</div>
        <Box className={styles.googleEIcloud}>
          <Button
            className={styles.logoGoogle}
            startIcon={
              <img width="14.6px" height="14.6px" src="/pesquisa-1.png" />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "12",
              background: "#f1f1f1",
              borderRadius: "10px",
              "&:hover": { background: "#f1f1f1" },
              width: 156,
              height: 54,
            }}
            type="submit"
          >
            Google
          </Button>
          <Button
            className={styles.logoIcloud}
            startIcon={
              <img width="16px" height="16px" src="/logotipo-da-apple-1.png" />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "12",
              background: "#f1f1f1",
              borderRadius: "10px",
              "&:hover": { background: "#f1f1f1" },
              width: 156,
              height: 54,
            }}
            type="submit"
          >
            iCloud
          </Button>
        </Box>
      </Box>
    </form>
  );
};

PginaDeLogin.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  pGina: PropTypes.string,
};

export default PginaDeLogin;
