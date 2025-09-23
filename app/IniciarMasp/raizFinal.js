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

  // Função base que converte a imagem e retorna os dados para outras funções usarem
  const generatePrintData = (callback) => {
    const imagePath = "/roteiro-imprimir.png";
    const img = new window.Image();
    img.crossOrigin = "Anonymous"; // Importante para evitar problemas de segurança do canvas
    img.src = imagePath;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL('image/png');
      callback(dataUrl); // Chama a função de callback com o resultado (a imagem em formato de texto)
    };

    img.onerror = () => {
      alert("Erro ao carregar a imagem. Verifique o caminho ou se há erros no console.");
      callback(null);
    };
  };

  // --- FUNÇÃO DE TESTE ---
  // Apenas exibe a imagem gerada na tela para validação visual
  const handleTestPrint = useCallback(() => {
    generatePrintData((dataUrl) => {
      if (dataUrl) {
        const previewImage = document.getElementById('previewImage');
        const previewContainer = document.getElementById('previewContainer');
        previewImage.src = dataUrl;
        previewContainer.style.display = 'block'; // Torna a área de preview visível
      }
    });
  }, []);

  // --- FUNÇÃO DE IMPRESSÃO REAL ---
  // Envia os dados para a impressora via RawBT
  const handlePrint = useCallback(() => {
    // Esconde o preview antes de imprimir para não confundir
    const previewContainer = document.getElementById('previewContainer');
    if (previewContainer) {
      previewContainer.style.display = 'none';
    }

    generatePrintData((dataUrl) => {
      if (dataUrl) {
        const base64String = dataUrl.split(',')[1];
        // URL corrigida para especificar que os dados são uma imagem PNG
        const rawBtUrl = `rawbt:image/png;base64,${base64String}`;
        window.location.href = rawBtUrl;
      }
    });
  }, []);

  return (
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

        {/*A PARTIR DAQUI: BOTÕES DE INICIAR E IMPRIMIR ROTEIRO*/}
        <Box className={styles.botaoEQrcode}>
          {/* --- NOVO BOTÃO DE TESTE --- */}
          <Box
            className={styles.botoIniciarRoteiro}
            onClick={handleTestPrint}
            sx={{
              cursor: 'pointer',
              backgroundColor: '#4CAF50', // Cor verde para diferenciar
              '@media (max-width: 767px)': { display: 'none !important' },
              '@media (min-width: 768px)': { display: 'block !important' },
            }}>
            <Typography variantMapping={{ inherit: "Button" }} sx={{ fontWeight: "600", fontSize: "30px", color: "white", textAlign: 'center', padding: '0 10px' }}>
              Testar
            </Typography>
          </Box>

          <Box // BOTÃO DE IMPRIMIR ROTEIRO REAL!
            className={styles.botoIniciarRoteiro}
            onClick={handlePrint}
            sx={{
              cursor: 'pointer',
              '@media (max-width: 767px)': { display: 'none !important' },
              '@media (min-width: 768px)': { display: 'block !important' },
            }}>
            <Typography variantMapping={{ inherit: "Button" }} sx={{ fontWeight: "600", fontSize: "30px", color: "white", textAlign: 'center', padding: '0 10px' }}>
              Imprimir Roteiro
            </Typography>
          </Box>
          
          {/* --- SEU QR CODE, DE VOLTA AO LUGAR CERTO --- */}
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
              alt="QR Code" // Adicionado alt text
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
        {/*------------------------------------FIM DOS BOTÕES-------------------------------------------*/}

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

      {/* --- NOVA ÁREA DE PREVIEW PARA O TESTE --- */}
      <Box
        id="previewContainer"
        sx={{
          display: 'none', // Começa escondido
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px',
          backgroundColor: 'white',
          border: '2px solid black',
          borderRadius: '8px',
          zIndex: 1000,
          textAlign: 'center'
        }}
      >
        <Typography variant="h6">Preview da Impressão:</Typography>
        <img id="previewImage" alt="Preview da imagem a ser impressa" style={{ maxWidth: '300px', border: '1px solid grey' }} />
      </Box>

      {/* Esta seção não é mais usada pela lógica de impressão direta, mas pode ser mantida. */}
      <section className={`${styles.printableArea} print-visible`}>
        <img src="/roteiro-imprimir.png" alt="Conteúdo do roteiro a ser impresso" className={styles.printImage} />
      </section>
    </>
  );
};

export default IniciarRoteiro20;