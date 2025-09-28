// 1. Importações necessárias do React e do Material-UI
import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material'; // Fab é o botão, Zoom é para a animação
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'; // O ícone de seta

// 2. Definição do componente
const ScrollToTopButton = () => {
  // 3. Criamos um estado chamado "isVisible". Ele começa como 'false' (invisível).
  //    É esse estado que vai controlar se o botão aparece ou não na tela.
  const [isVisible, setIsVisible] = useState(false);

  // 4. Esta é a função que verifica a posição da rolagem da página.
  const handleScroll = () => {
    // window.scrollY nos dá a posição vertical da barra de rolagem.
    // Se for maior que 300 pixels, mudamos o estado 'isVisible' para 'true'.
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      // Caso contrário, mudamos o estado 'isVisible' para 'false'.
      setIsVisible(false);
    }
  };

  // 5. Esta é a função que será executada quando o botão for clicado.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Rola para a posição 0 (o topo)
      behavior: 'smooth', // Faz a rolagem ser animada e suave, e não um salto brusco.
    });
  };

  // 6. O 'useEffect' é um hook do React que executa efeitos colaterais.
  //    Aqui, ele vai adicionar um "ouvinte" ao evento de 'scroll' da janela.
  useEffect(() => {
    // Toda vez que o usuário rolar a página, a função 'handleScroll' será chamada.
    window.addEventListener('scroll', handleScroll);

    // A função de retorno do useEffect serve para "limpar" o efeito.
    // Isso é importante para a performance e para evitar erros.
    // Quando o componente não estiver mais na tela, removemos o "ouvinte".
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio [] significa que este efeito só roda uma vez, quando o componente é montado.

  // 7. Esta é a parte visual do componente (o que será renderizado).
  return (
    // O componente <Zoom> do MUI cria uma animação de "aparecer" e "sumir".
    // A propriedade 'in' controla a animação. Se 'isVisible' for true, ele aparece.
    <Zoom in={isVisible}>
      {/* O <Fab> é o nosso botão flutuante.
        - onClick={scrollToTop}: Ao clicar, chama a função que rola para o topo.
        - color="primary": Usa a cor primária do seu tema.
        - size="small": Deixa o botão um pouco menor.
        - aria-label: Importante para acessibilidade.
        - sx={...}: Aqui definimos o CSS para posicioná-lo.
      */}
      <Fab
        onClick={scrollToTop}
        size="medium"
        aria-label="voltar ao topo"
        sx={{
          position: 'fixed', // Posição fixa em relação à tela
          bottom: '9rem',    // Distância de baixo
          right: '2rem',    // Distância da direita
          backgroundColor: '#000',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#000', // Um tom um pouco mais claro para dar feedback
           },
           '&:active': {
            backgroundColor: '#000',
            }
        }}
      >
        {/* Adiciona o ícone de seta para cima dentro do botão */}
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

// 8. Exporta o componente para que ele possa ser usado em outros arquivos.
export default ScrollToTopButton;