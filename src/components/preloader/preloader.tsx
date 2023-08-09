import preloader from '../../../public/img/preloader.svg';
import React from 'react';
import styles from './preloader.module.css';

function Preloader(): React.JSX.Element {

  return (
    <div className={styles.preloader}>
      <img src={preloader} alt="Preloader"/>
    </div>
  );
}

export default Preloader;
