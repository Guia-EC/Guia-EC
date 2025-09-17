"use client";
import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import Nome from "./nome";
import PropTypes from "prop-types";
import styles from "./faleConosco.module.css";

const FaleConosco = ({ className = "" }) => {
  const [nomeItems] = useState([
    {
      nome: "Nome",
      placeholder: "Digite seu nome...",
    },
    {
      nome: "E-mail",
      placeholder: "Digite seu e-mail...",
    },
    {
      nome: "Assunto",
      placeholder: "Assunto...",
    },
  ]);
  return (
    <Box className={[styles.telaDeUsurio, className].join(" ")}>
      <Box className={styles.header}>
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
            className={styles.faleConosco}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "700" }}
          >
            Fale Conosco
          </Typography>
        </Box>
      </Box>
      <section className={styles.body}>
        <Box className={styles.inputs}>
          {nomeItems.map((item, index) => (
            <Nome key={index} nome={item.nome} placeholder={item.placeholder} />
          ))}
          <Box className={styles.mesangem}>
            <Box className={styles.telaDeUsurioTtulo}>
              <div className={styles.mensagem}>Mensagem</div>
            </Box>
            <textarea className={styles.input} rows={12} cols={17} />
          </Box>
        </Box>
        <Button
          className={styles.botoDeSalvar}
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
          Enviar
        </Button>
      </section>
    </Box>
  );
};

FaleConosco.propTypes = {
  className: PropTypes.string,
};

export default FaleConosco;
