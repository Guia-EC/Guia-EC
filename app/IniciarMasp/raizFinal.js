"use client";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Body from "../../components/body";
import styles from "./raizFinal.module.css"; // Certifique-se que este caminho está correto
import { useRouter } from "next/navigation";

const IniciarRoteiro20 = () => {
  const router = useRouter();

  const onVoltarIconClick = useCallback(() => {
    router.push("/seleo-de-tipo-de-roteiro207");
  }, [router]);

  // Função simplificada que apenas chama a impressão do navegador
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    // Usamos um fragmento <> para ter dois elementos no nível principal
    <>
      {/* 1. Todo o conteúdo visível da sua página vai dentro desta div com a classe "noPrint" */}
      <Box className={`${styles.iniciarRoteiro20} ${styles.noPrint}`}>
        <section className={styles.imagemHero}>
          <Image
            className={styles.voltarIcon}
            width={0}
            height={0}
            sizes="100vw"
            alt=""
            src="/botao-voltar-branco.svg"
            onClick={onVoltarIconClick}
          />
        </section>
        <Body />
        
        <Box
          className={styles.botoIniciarRoteiro}
          onClick={handlePrint} // O onClick agora chama a função de impressão direta
          sx={{
            cursor: 'pointer',
            display: { xs: 'none', md: 'block' }, // Sua lógica de responsividade mantida
          }}
        >
          <Typography
            variantMapping={{ inherit: "Button" }}
            sx={{ fontWeight: "600", fontSize: "30px", color: "white", textAlign: 'center' }}
          >
            Imprimir Roteiro
          </Typography>
        </Box>

        <section className={styles.ttulo}>
          <Box className={styles.iniciarRoteiro20Ttulo}>
            <Typography
              className={styles.masp}
              variant="inherit"
              variantMapping={{ inherit: "h1" }}
              sx={{ fontWeight: "700", lineHeight: "4.375rem" }}
            >
              MASP
            </Typography>
            <Typography
              className={styles.museuDeArte}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "600", fontSize: "var(--font-size-20)" }}
            >
              Museu de Arte de São Paulo
            </Typography>
          </Box>
          <Box className={styles.descrio}>
            <div>1957-1968 Lina Bo Bardi</div>
            <div>Avenida Paulista, 1578 Cerqueira César</div>
          </Box>
        </section>
      </Box>

      {/* 2. Aqui está a área de impressão. Ela fica fora da div "noPrint". */}
      {/* Ela é invisível na tela, mas será a única coisa visível na impressão. */}
      <section className={`${styles.printableArea} print-visible`}>
        <img
          src="/roteiro-imprimir.png" // O caminho para a sua imagem
          alt="Conteúdo do roteiro a ser impresso"
          className={styles.printImage}
        />
      </section>
    </>
  );
};

export default IniciarRoteiro20;