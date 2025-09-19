"use client"; // Necessário para usar hooks como useState e onClick

import { useState } from "react";
import { Box, Collapse, Alert } from "@mui/material"; // Componentes do MUI para o alert
import Image from "next/image";
import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext"; // 1. Importa o hook de autenticação
import { useRouter } from "next/navigation";     // 2. Importa o router para redirecionar
import styles from "./favoritar.module.css";

const Favoritar = ({ className = "", estado = "Padrão", roteiroId }) => {
  // 3. Pega o estado do usuário e o router
  const { user } = useAuth();
  const router = useRouter();

  // 4. Estado para controlar a visibilidade do alert
  const [showAlert, setShowAlert] = useState(false);

  // 5. Função que decide o que fazer ao clicar
  const handleFavoriteClick = () => {
    if (user) {
      // Se o usuário ESTIVER LOGADO
      // Aqui entrará a sua futura lógica para favoritar de verdade
      console.log(`Usuário ${user.email} favoritou o roteiro ${roteiroId}`);
      // Ex: toggleFavorite(roteiroId);
    } else {
      // Se o usuário NÃO ESTIVER LOGADO
      // Ativa a exibição do alert
      setShowAlert(true);
    }
  };

  return (
    // Usamos um Fragment <> para retornar o botão e o alert no mesmo nível
    <>
      <Box
        className={[styles.favoritar, className].join(" ")}
        data-estado={estado}
        onClick={handleFavoriteClick} // 6. Adiciona o evento de clique
        sx={{ cursor: 'pointer' }}   // Adiciona um cursor de ponteiro para indicar que é clicável
      >
        <Image
          className={styles.favoriteIcon}
          loading="lazy"
          width={22}
          height={21.3}
          sizes="100vw"
          alt="Favoritar roteiro"
          src="/Favorite-Icon2.svg"
        />
      </Box>

      {/* 7. O Alert do MUI, que só aparece quando showAlert é true */}
      <Collapse in={showAlert} sx={{ position: 'fixed', bottom: 20, left: 20, zIndex: 9999 }}>
        <Alert
          severity="info"
          onClick={() => router.push('/login')} // Redireciona ao clicar
          onClose={(e) => {
            e.stopPropagation(); // Impede que o clique no "X" acione o onClick do Alert
            setShowAlert(false);
          }}
          sx={{ cursor: 'pointer' }}
        >
          Para favoritar, é necessário fazer login! Clique aqui para entrar.
        </Alert>
      </Collapse>
    </>
  );
};

Favoritar.propTypes = {
  className: PropTypes.string,
  roteiroId: PropTypes.string.isRequired, // Adicionado para saber qual roteiro favoritar
  /** Variant props */
  estado: PropTypes.string,
};

export default Favoritar;