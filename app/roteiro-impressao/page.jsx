"use client";
import { useCallback } from 'react';
import styles from './roteiro.module.css';

const RoteiroParaImpressao = () => {
  const handlePrint = useCallback(() => {
    // Adicione este console.log para ter certeza que o botão está funcionando
    console.log("Botão de imprimir clicado!");
    window.print();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.noPrint}>
        <h1>Impressão de Imagem</h1>
        <button onClick={handlePrint} className={styles.botoIniciarRoteiro}>
          Imprimir Roteiro
        </button>
      </div>
      
      <section id="area-impressao" className={styles.printableArea}>
        <img 
          src="/roteiro-imprimir.png"
          alt="Conteúdo do roteiro a ser impresso" 
          className={styles.printImage}
        />
      </section>
    </main>
  );
};
export default RoteiroParaImpressao;