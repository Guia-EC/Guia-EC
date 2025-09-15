"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import TelaDeUsurio from "../../components/tela-de-usurio";
import { useRouter } from "next/navigation";
import styles from "./tela-de-usuario202.module.css";
import Navbar from "../../components/navbar";

const TelaDeUsuario202 = () => {
  const router = useRouter();

  const onFavoritesButtomIconClick = useCallback(() => {
    router.push("/roteiros-favoritados204");
  }, [router]);

  const onIaButtomIconClick = useCallback(() => {
    router.push("/chatbot");
  }, [router]);

  return (
    <Box className={styles.telaDeUsuario20}>
      <TelaDeUsurio tela="Home" />
      <Navbar activePage="user" />
    </Box>
  );
};

export default TelaDeUsuario202;
