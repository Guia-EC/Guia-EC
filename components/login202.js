import { Box } from "@mui/material";
import PginaDeLogin from "./pgina-de-login";
import PropTypes from "prop-types";
import styles from "./login202.module.css";

const Login202 = ({ className = "" }) => {
  return (
    <Box className={[styles.login20, className].join(" ")}>
      <PginaDeLogin pGina="Login" />
    </Box>
  );
};

Login202.propTypes = {
  className: PropTypes.string,
};

export default Login202;
