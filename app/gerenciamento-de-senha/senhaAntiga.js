"use client";
import { useMemo } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./senhaAntiga.module.css";

const SenhaAntiga = ({ className = "", nome, placeholder, inputColor }) => {
  const inputStyle = useMemo(() => {
    return {
      color: inputColor,
    };
  }, [inputColor]);

  return (
    <Box className={[styles.senhaAntiga, className].join(" ")}>
      <Box className={styles.ttulo}>
        <div className={styles.nome}>{nome}</div>
      </Box>
      <TextField
        className={styles.input}
        placeholder={placeholder}
        variant="outlined"
        slotProps={{
          input: {
            endAdornment: (
              <img
                width="22px"
                height="22px"
                src="/Eye.svg"
              />
            ),
          },
        }}
        sx={{
          "& fieldset": { borderColor: "#717171" },
          "& .MuiInputBase-root": {
            height: "56px",
            paddingRight: "20px",
            borderRadius: "10px",
            fontSize: "14px",
          },
          "& .MuiInputBase-input": { color: "#717171" },
          width: "345px",
        }}
        style={inputStyle}
      />
    </Box>
  );
};

SenhaAntiga.propTypes = {
  className: PropTypes.string,
  nome: PropTypes.string,
  placeholder: PropTypes.string,

  /** Style props */
  inputColor: PropTypes.string,
};

export default SenhaAntiga;
