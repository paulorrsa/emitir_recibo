import React from 'react';
import { motion } from 'framer-motion';
import styles from './Loading.module.css';

const Loading = ({ size = 'medium', fullScreen = false }) => {
  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };

  const spinner = (
    <motion.div
      className={`${styles.spinner} ${sizeClasses[size]}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div className={styles.spinnerInner} />
    </motion.div>
  );

  if (fullScreen) {
    return (
      <div className={styles.fullScreen}>
        <div className={styles.fullScreenContent}>
          {spinner}
          <p className={styles.loadingText}>Carregando...</p>
        </div>
      </div>
    );
  }

  return spinner;
};

export default Loading; 