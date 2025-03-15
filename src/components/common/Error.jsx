import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faRedo,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Error.module.css';

const Error = ({
  message = 'Ocorreu um erro inesperado.',
  onRetry,
  fullScreen = false,
}) => {
  const errorContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles.error}
    >
      <FontAwesomeIcon icon={faExclamationCircle} className={styles.errorIcon} />
      <p className={styles.errorMessage}>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className={styles.retryButton}>
          <FontAwesomeIcon icon={faRedo} className={styles.retryIcon} />
          Tentar Novamente
        </button>
      )}
    </motion.div>
  );

  if (fullScreen) {
    return (
      <div className={styles.fullScreen}>
        <div className={styles.fullScreenContent}>
          {errorContent}
        </div>
      </div>
    );
  }

  return errorContent;
};

export default Error; 