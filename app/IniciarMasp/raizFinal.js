"use client";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Body from "../../components/body";
import styles from "./raizFinal.module.css";
import { useRouter } from "next/navigation";

const IniciarRoteiro20 = () => {
  const router = useRouter();

  const onVoltarIconClick = useCallback(() => {
    router.push("/seleo-de-tipo-de-roteiro207");
  }, [router]);

  // --- NOVA LÓGICA DE IMPRESSÃO DIRETA ---
  const handlePrint = useCallback(() => {
    // 1. Define o caminho da imagem que você quer imprimir.
    //    Este caminho deve ser acessível publicamente no seu projeto Next.js (dentro da pasta /public).
    const imagePath = "/roteiro-imprimir.png";

    // 2. Cria um objeto de imagem em memória para carregá-la.
    const img = new window.Image();
    img.src = imagePath;

    // 3. A conversão SÓ PODE ACONTECER DEPOIS que a imagem estiver 100% carregada.
    //    Por isso, toda a lógica principal fica dentro do `img.onload`.
    img.onload = () => {
      // 4. Cria um elemento <canvas> invisível para desenhar a imagem.
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');

      // 5. Desenha a imagem carregada no canvas.
      ctx.drawImage(img, 0, 0);

      // 6. Converte o conteúdo do canvas para uma string de texto no formato Base64.
      const dataUrl = canvas.toDataURL('image/png');
      const base64String = dataUrl.split(',')[1];

      // 7. Monta a URL especial do RawBT e "clica" nela.
      //    O Android irá interceptar essa URL e abrir o RawBT para processar a impressão.
      const rawBtUrl = `rawbt:image/png;base64,${base64String}`;
      window.location.href = rawBtUrl;
    };

    // Opcional: Adiciona um tratamento de erro caso a imagem não possa ser carregada.
    img.onerror = () => {
      console.error("Erro ao carregar a imagem para impressão.");
      alert("Não foi possível carregar a imagem para impressão. Verifique o caminho do arquivo.");
    };
  }, []);
  // --- FIM DA NOVA LÓGICA ---

  return (
    // O seu JSX permanece exatamente o mesmo. Nenhuma mudança é necessária aqui.
    <>
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

        <Box className={styles.botaoEQrcode}>
          <Box // BOTÃO DE IMPRIMIR ROTEIRO!
            className={styles.botoIniciarRoteiro}
            onClick={handlePrint} // AGORA CHAMA A NOVA FUNÇÃO
            sx={{
              cursor: 'pointer',
              '@media (max-width: 767px)': {
                display: 'none !important',
              },
              '@media (min-width: 768px)': {
                display: 'block !important',
              },
            }}>
            <Typography
              variantMapping={{ inherit: "Button" }}
              sx={{ fontWeight: "600", fontSize: "30px", color: "white", textAlign: 'center' }}
            >
              Imprimir Roteiro
            </Typography>
          </Box>
          <Box className={styles.qrCode} sx={{
            cursor: 'pointer',
            '@media (max-width: 767px)': {
              display: 'none !important',
            },
            '@media (min-width: 768px)': {
              display: 'block !important',
            },
          }}>
            <Image
              width={100}
              height={100}
              src="/QRCODE.svg"
              alt="QR Code" // Adicionado alt text para acessibilidade
            />
          </Box>
        </Box>
        <a href={"https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=Mirante+9+de+Julho&waypoints=Museu+de+Arte+de+São+Paulo|Charme+da+Paulista+Restaurante"} target="_blank" rel="noopener noreferrer" className={styles.slideLink}>
          <Box // BOTÃO DE INICIAR ROTA!
            className={styles.botoIniciarRoteiro}
            sx={{
              cursor: 'pointer',
              '@media (max-width: 767px)': {
                display: 'block !important',
              },
              '@media (min-width: 768px)': {
                display: 'none !important',
              },
            }}
          >
            <Typography
              variantMapping={{ inherit: "Button" }}
              sx={{ fontWeight: "600", fontSize: "30px", color: "white", textAlign: 'center' }}
            >
              Iniciar Rota com Google
            </Typography>
          </Box>
        </a>
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

      {/* Esta seção não é mais usada pela nova lógica, mas não há problema em mantê-la. */}
      <section className={`${styles.printableArea} print-visible`}>
        <img
          src="/roteiro-imprimir.png"
          alt="Conteúdo do roteiro a ser impresso"
          className={styles.printImage}
        />
      </section>
    </>
  );
};

export default IniciarRoteiro20;