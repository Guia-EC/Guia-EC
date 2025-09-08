import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./filtro-histrico-de-roteiros9.module.css";

const FiltroHistricoDeRoteiros9 = ({
  className = "",
  propriedade1 = "Padrão",
}) => {
  return (
    <Box
      className={[styles.filtroHistricoDeRoteiros, className].join(" ")}
      data-propriedade1={propriedade1}
    >
      <div className={styles.maisAntigo}>Mais antigo - Mais recente</div>
    </Box>
  );
};

FiltroHistricoDeRoteiros9.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  propriedade1: PropTypes.string,
};

export default FiltroHistricoDeRoteiros9;
