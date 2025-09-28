"use client";

import { useState, useCallback } from "react"; // <<< ADICIONADO useState
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext"; // <<< ADICIONADO para checar o usuário
import LoginModal from "./LoginModal"; // <<< ADICIONADO para usar o modal
import styles from "../app/home.module.css";

/**
 * Componente de Navegação reutilizável.
 * @param {object} props
 * @param {string} props.activePage - O nome da página ativa ('home', 'favorites', etc.) para destacar o ícone correto.
 */
const Navbar = ({ activePage }) => {
  const router = useRouter();
  const { user } = useAuth(); // <<< OBTÉM o estado de autenticação do usuário
  const [modalOpen, setModalOpen] = useState(false); // <<< ESTADO para controlar o modal

  // Funções de navegação
  const onHomeClick = useCallback(() => router.push("/"), [router]);
  const onRoutesClick = useCallback(
    () => router.push("/seleo-de-tipo-de-roteiro2033"),
    [router]
  );
  const onIaClick = useCallback(() => router.push("/chatbot"), [router]);

  // <<< LÓGICA ATUALIZADA para Favoritos e Usuário >>>
  const onFavoritesClick = useCallback(() => {
    if (user) {
      router.push("/roteiros-favoritados204");
    } else {
      setModalOpen(true); // Abre o modal se não houver usuário
    }
  }, [router, user]); // Adiciona 'user' como dependência

  const onUserClick = useCallback(() => {
    if (user) {
      router.push("/tela-de-usuario202");
    } else {
      setModalOpen(true); // Abre o modal se não houver usuário
    }
  }, [router, user]); // Adiciona 'user' como dependência

  return (
    <> {/* <<< Envolvemos em um Fragment para adicionar o Modal */}
      <section className={styles.navbar}>
        <Box className={styles.navbarOptions}>
          {/* Ícone Home */}
          <Image
            className={styles.navIcon}
            width={32}
            height={32}
            alt="Home"
            src={
              activePage === "home"
                ? "/icone-home-laranja.svg"
                : "/icone-home-branco.svg"
            }
            onClick={onHomeClick}
            style={{ cursor: "pointer" }}
          />

          {/* Ícone Favoritos (com nova lógica) */}
          <Image
            className={styles.navIcon}
            width={32}
            height={32}
            alt="Favoritos"
            src={
              activePage === "favorites"
                ? "/icone-estrela-laranja.svg"
                : "/icone-estrela-branco.svg"
            }
            onClick={onFavoritesClick} // <<< USA A NOVA FUNÇÃO
            style={{ cursor: "pointer" }}
          />

          {/* Botão Criar Roteiro */}
          <Box
            className={styles.routesButtom}
            onClick={onRoutesClick}
            style={{ cursor: "pointer" }}
          >
            <Box className={styles.boto} />
            <Image
              className={styles.roteiro}
              width={44.6}
              height={44.6}
              alt="Criar Roteiro"
              src="/icone-roteiro.svg"
            />
          </Box>

          {/* Ícone IA */}
          <Image
            className={styles.navIcon}
            width={34}
            height={34}
            alt="Chatbot IA"
            src="/icone-ia.svg"
            onClick={onIaClick}
            style={{ cursor: "pointer" }}
          />

          {/* Ícone Usuário (com nova lógica) */}
          <Image
            className={styles.navIcon}
            width={31.7}
            height={31.7}
            alt="Perfil do Usuário"
            src={
              activePage === "user"
                ? "icone-usuario-laranja.svg"
                : "icone-usuario-branco.svg"
            }
            onClick={onUserClick} // <<< USA A NOVA FUNÇÃO
            style={{ cursor: "pointer" }}
          />
        </Box>
      </section>

      {/* <<< RENDERIZA O MODAL (ele só aparece quando modalOpen é true) >>> */}
      <LoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;