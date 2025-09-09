// components/DesktopAirbnbBannerGrid.js
import React from 'react';
import Carroussel343 from './carroussel343'; // << Verifique se este é o componente correto
import styles from './DesktopAirbnbBannerGrid.module.css';

const DesktopAirbnbBannerGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <Carroussel343 />
    </div>
  );
};

export default DesktopAirbnbBannerGrid;