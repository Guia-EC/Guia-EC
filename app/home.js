"use client";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Carroussel143 from "../components/carroussel143";
import Slider142 from "../components/slider142";
import Carroussel243 from "../components/carroussel243";
import Slider343 from "../components/slider343";
import Carroussel343 from "../components/carroussel343";
import { useRouter } from "next/navigation";
import styles from "./home.module.css";
import Navbar from "../components/navbar";

const Home = () => {
  const router = useRouter();

  const onFavoritesButtomIconClick = useCallback(() => {
    router.push("/roteiros-favoritados204");
  }, [router]);

  const onRoutesButtomContainerClick = useCallback(() => {
    router.push("/seleo-de-tipo-de-roteiro2033");
  }, [router]);

  const onIaButtomIconClick = useCallback(() => {
    router.push("/chatbot");
  }, [router]);

  const onUserButtomIconClick = useCallback(() => {
    router.push("/tela-de-usuario202");
  }, [router]);

  return (
    <Box className={styles.home20}>
      <Carroussel143 />
      <Slider142 />
      <Carroussel243 />
      <Slider343 />
      <Carroussel343 />
      <Navbar activePage="home" />
    </Box>
  );
};

export default Home;
