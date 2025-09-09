// components/DesktopBannerGrid.js
import React from 'react';
import Carroussel243 from './carroussel243'; // << Verifique se este é o componente correto
import styles from './DesktopSymplaBannerGrid.module.css';

const DesktopSymplaBannerGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <Carroussel243 />
    </div>
  );
};

export default DesktopSymplaBannerGrid;