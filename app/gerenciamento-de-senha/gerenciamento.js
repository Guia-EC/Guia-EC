"use client";
import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import SenhaAntiga from "./senhaAntiga";
import PropTypes from "prop-types";
import styles from "./gerenciamento.module.css";

const Gerenciamento = ({ className = "" }) => {
  const [senhaAntigaItems] = useState([
    {
      nome: "Senha Antiga",
      placeholder: "Digite sua senha antiga...",
      inputColor: "#000",
    },
    {
      nome: "Senha Nova",
      placeholder: "Digite sua senha nova...",
      inputColor: "#000",
    },
    {
      nome: "Confirmação de Senha",
      placeholder: "Confirme sua senha nova...",
      inputColor: "#000",
    },
  ]);
  return (
    <Box className={[styles.telaDeUsurio, className].join(" ")}>
      <section className={styles.header}>
        <Button
          className={styles.botoDeVoltar}
          disableElevation
          variant="outlined"
          sx={{
            borderColor: "#000",
            borderRadius: "100px",
            "&:hover": { borderColor: "#000" },
            width: 42,
            height: 41,
          }}
        />
        <Box className={styles.ttulo}>
          <Typography
            className={styles.gerenciamentoDeSenha}
            variant="inherit"
            variantMapping={{ inherit: "h2" }}
            sx={{ fontWeight: "700" }}
          >
            Gerenciamento de Senha
          </Typography>
          <div className={styles.redefinaSuaSenha}>Redefina sua senha</div>
        </Box>
      </section>
      <section className={styles.body}>
        <Box className={styles.inputs}>
          {senhaAntigaItems.map((item, index) => (
            <SenhaAntiga
              key={index}
              nome={item.nome}
              placeholder={item.placeholder}
              inputColor={item.inputColor}
            />
          ))}
        </Box>
        <Button
          className={styles.botoDeEnviar}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#000",
            borderRadius: "10px",
            "&:hover": { background: "#000" },
            width: 345,
            height: 55,
          }}
        >
          Salvar
        </Button>
      </section>
    </Box>
  );
};

Gerenciamento.propTypes = {
  className: PropTypes.string,
};

export default Gerenciamento;
