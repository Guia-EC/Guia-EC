"use client";

import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../app/home.module.css"; // CSS dedicado para este componente

/**
 * Componente de Navegação reutilizável.
 * @param {object} props
 * @param {string} props.activePage - O nome da página ativa ('home', 'favorites', etc.) para destacar o ícone correto.
 */
const Navbar = ({ activePage }) => {
  const router = useRouter();

  // Funções de navegação otimizadas
  const onHomeClick = useCallback(() => router.push("/"), [router]);
  const onFavoritesClick = useCallback(
    () => router.push("/roteiros-favoritados204"),
    [router]
  );
  const onRoutesClick = useCallback(
    () => router.push("/seleo-de-tipo-de-roteiro2033"),
    [router]
  );
  const onIaClick = useCallback(() => router.push("/chatbot"), [router]);
  const onUserClick = useCallback(
    () => router.push("/tela-de-usuario202"),
    [router]
  );

  return (
    <section className={styles.navbar}>
      <Box className={styles.navbarOptions}>
        {}
        <Image
          className={styles.navIcon}
          width={32}
          height={32}
          alt="Home"
          src={
            activePage === "home"
              ? "/icone-home-laranja.svg"
              : "/icone-home-branco.svg"
          } // Lógica do ícone ativo
          onClick={onHomeClick}
          style={{ cursor: "pointer" }}
        />
        {}
        <Image
          className={styles.navIcon}
          width={32}
          height={32}
          alt="Favoritos"
          src={
            activePage === "favorites"
              ? "/icone-estrela-laranja.svg"
              : "/icone-estrela-branco.svg"
          } // Lógica do ícone ativo
          onClick={onFavoritesClick}
          style={{ cursor: "pointer" }}
        />
        {}
        <Box
          className={styles.routesButtom}
          onClick={onRoutesClick}
          style={{ cursor: "pointer" }}
        >
          <Box className={styles.boto} />
          <Image
            width={44.6}
            height={44.6}
            alt="Criar Roteiro"
            src="/icone-roteiro.svg"
          />
        </Box>
        {}
        <Image
          className={styles.navIcon}
          width={34}
          height={34}
          alt="Chatbot IA"
          src="/icone-ia.svg" // Ícone padrão
          onClick={onIaClick}
          style={{ cursor: "pointer" }}
        />
        {}
        <Image
          className={styles.navIcon}
          width={31.7}
          height={31.7}
          alt="Perfil do Usuário"
          src={
            activePage === "user"
              ? "icone-usuario-laranja.svg"
              : "icone-usuario-branco.svg"
          } // Lógica do ícone ativo
          onClick={onUserClick}
          style={{ cursor: "pointer" }}
        />
      </Box>
    </section>
  );
};

export default Navbar;
