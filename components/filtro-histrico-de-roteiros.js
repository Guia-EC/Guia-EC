import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./filtro-histrico-de-roteiros.module.css";

const FiltroHistricoDeRoteiros = ({ className = "", estado = "Padrão" }) => {
  return (
    <Box
      className={[styles.filtroHistricoDeRoteiros, className].join(" ")}
      data-estado={estado}
    >
      <div className={styles.maisRecente}>Mais recente - Mais antigo</div>
    </Box>
  );
};

FiltroHistricoDeRoteiros.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  estado: PropTypes.string,
};

export default FiltroHistricoDeRoteiros;
