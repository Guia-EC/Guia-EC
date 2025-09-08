import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./chatbot.module.css";

const Chatbot = () => {
  return (
    <Box className={styles.chatbot}>
      <Box className={styles.interactionWrapper}>
        <Box className={styles.interaction}>
          <Box className={styles.response}>
            <Box className={styles.metadata}>
              <Image
                className={styles.profileIcon}
                loading="lazy"
                width={12}
                height={19}
                sizes="100vw"
                alt=""
                src="/Profile.svg"
              />
              <Box className={styles.metadataChild} />
            </Box>
          </Box>
          <Typography
            className={styles.maia}
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{ fontWeight: "600" }}
          >
            maIA
          </Typography>
        </Box>
      </Box>
      <section className={styles.request}>
        <Box className={styles.input}>
          <Box className={styles.query}>
            <Box className={styles.questionArea}>
              <Box className={styles.wrapperIndicator}>
                <Image
                  className={styles.indicatorIcon}
                  loading="lazy"
                  width={52.2}
                  height={49.2}
                  sizes="100vw"
                  alt=""
                  src="/Indicator2.svg"
                />
              </Box>
              <Box className={styles.options}>
                <Box className={styles.optionsChild} />
                <Box className={styles.confirmation}>
                  <Box className={styles.greeting}>
                    <Typography
                      className={styles.ol}
                      variant="inherit"
                      variantMapping={{ inherit: "h3" }}
                      sx={{ fontWeight: "700" }}
                    >
                      Olá!
                    </Typography>
                    <div className={styles.oQueVoc}>
                      O que você gostaria de saber?
                    </div>
                  </Box>
                </Box>
                <Box className={styles.rectangleParent}>
                  <Box className={styles.frameChild} />
                  <Box className={styles.selectionArea} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.feedback}>
            <Box className={styles.wrapperResponseMarker}>
              <Image
                className={styles.indicatorIcon}
                loading="lazy"
                width={52.2}
                height={49.2}
                sizes="100vw"
                alt=""
                src="/Indicator2.svg"
              />
            </Box>
            <Box className={styles.submission}>
              <Box className={styles.submissionChild} />
              <Box className={styles.inputDisplay}>
                <div className={styles.pergunteOQue}>
                  Pergunte o que quiser!
                </div>
              </Box>
              <Box className={styles.submissionItem} />
            </Box>
          </Box>
        </Box>
      </section>
      <Box className={styles.prompt}>
        <Box className={styles.promptChild} />
        <div className={styles.comoPossoIr}>Como posso ir ao masp?</div>
        <Image
          className={styles.enviar1Icon}
          loading="lazy"
          width={20}
          height={20}
          sizes="100vw"
          alt=""
          src="/enviar-1@2x.png"
        />
        <Box className={styles.attachmentIcons}>
          <Image
            className={styles.microfone1Icon}
            loading="lazy"
            width={20}
            height={20}
            sizes="100vw"
            alt=""
            src="/microfone-1@2x.png"
          />
          <Image
            className={styles.clipeDePapel1Icon}
            loading="lazy"
            width={20}
            height={20}
            sizes="100vw"
            alt=""
            src="/clipe-de-papel-1@2x.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Chatbot;
