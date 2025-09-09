// components/DesktopSymplaGrid.js
import React from 'react';

// --- CORREÇÃO: Importando o componente correto ---
import Carroussel243 from './carroussel243';

// Importa o arquivo de estilo
import styles from './DesktopSymplaGrid.module.css';

const DesktopSymplaGrid = () => {
  return (
    <div className={styles.gridContainer}>
      {/* --- CORREÇÃO: Renderizando o componente correto --- */}
      <Carroussel243 />
    </div>
  );
};

export default DesktopSymplaGrid;

