import { Button, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./cadastrar.module.css";

const Cadastrar = ({ className = "", estado = "Entrar" }) => {
  return (
    <Box
      className={[styles.entrarcadastrar, className].join(" ")}
      data-estado={estado}
    >
      <Button
        className={styles.entrar}
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "14",
          background: "#000",
          borderRadius: "10px",
          "&:hover": { background: "#000" },
          width: 130,
          height: 54,
        }}
        type="submit"
      >
        Entrar
      </Button>
      <Box className={styles.cadastrar}>
        <div className={styles.cadastrar2}>Cadastrar</div>
      </Box>
    </Box>
  );
};

Cadastrar.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  estado: PropTypes.string,
};

export default Cadastrar;
