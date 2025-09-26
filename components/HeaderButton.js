// /components/cadastrar.js


"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

const HeaderButton = ({ className = "", variant = "cadastro" }) => {
  const router = useRouter();
  const isLoginVariant = variant === 'login';
  const buttonText = isLoginVariant ? "Entrar" : "Cadastrar";
  const destinationUrl = isLoginVariant ? "/login" : "/cadastro";

  const handleRedirect = () => {
    router.push(destinationUrl);
  };

  return (
    <Button
      className={className}
      onClick={handleRedirect}
      disableElevation
      variant={isLoginVariant ? "outlined" : "contained"}
      // ==========================================================
      // AQUI ESTÁ A GARANTIA FINAL: ESTE BOTÃO É DO TIPO "BUTTON"
      // ==========================================================
      type="button" 
      sx={{
        textTransform: "none",
        fontWeight: "600",
        fontSize: "14px",
        borderRadius: "10px",
        width: 130,
        height: 54,
        borderWidth: "1.5px",
        ...(variant === 'cadastro' && {
          color: "#fff",
          background: "#0f0f0f",
          "&:hover": { background: "#333" },
        }),
        ...(variant === 'login' && {
          color: "#0f0f0f",
          borderColor: "#0f0f0f",
          "&:hover": { 
            borderColor: "#333",
            color: "#333",
            background: "rgba(0, 0, 0, 0.04)"
          },
        }),
      }}
    >
      {buttonText}
    </Button>
  );
};

HeaderButton.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['login', 'cadastro']),
};

export default HeaderButton;