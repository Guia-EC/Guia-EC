import {
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./nome.module.css";

const Nome = ({ className = "", nome, placeholder }) => {
  return (
    <Box className={[styles.nome, className].join(" ")}>
      <Box className={styles.ttulo}>
        <div className={styles.nome2}>{nome}</div>
      </Box>
      <TextField
        className={styles.input}
        placeholder={placeholder}
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#000" },
          "& .MuiInputBase-root": {
            height: "56px",
            borderRadius: "10px",
            fontSize: "14px",
          },
          "& .MuiInputBase-input": { color: "#000" },
          width: "345px",
        }}
      />
    </Box>
  );
};

Nome.propTypes = {
  className: PropTypes.string,
  nome: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Nome;
