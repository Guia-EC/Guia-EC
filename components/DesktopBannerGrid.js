// components/DesktopBannerGrid.js
import React from 'react';
import Carroussel143 from './carroussel143'; // << Verifique se este é o componente correto
import styles from './DesktopBannerGrid.module.css';

const DesktopBannerGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <Carroussel143 />
    </div>
  );
};

export default DesktopBannerGrid;