import { Box } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./favoritar1.module.css";

const Favoritar1 = ({ className = "", estado = "Padrão" }) => {
  return (
    <Box
      className={[styles.favoritar, className].join(" ")}
      data-estado={estado}
    >
      <Image
        className={styles.favoriteIcon}
        loading="lazy"
        width={22}
        height={21.3}
        sizes="100vw"
        alt=""
        src="/Favorite-Icon2.svg"
      />
    </Box>
  );
};

Favoritar1.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  estado: PropTypes.string,
};

export default Favoritar1;
