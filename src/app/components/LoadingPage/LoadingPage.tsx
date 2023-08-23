import React from 'react';
import styles from './LoadingPage.module.scss';

const LoadingPage: React.FC = () => {

  const { loadingPage, loadingText } = styles;
  return (
    <div className={loadingPage}>
      <div className={loadingText}>Loading...</div>
    </div>
  );
};

export default LoadingPage;
