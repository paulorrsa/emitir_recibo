import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faArrowLeft,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.page}
    >
      <div className={styles.content}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.errorCode}
        >
          404
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.title}
        >
          Página não encontrada
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={styles.description}
        >
          Desculpe, a página que você está procurando não existe ou foi movida.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={styles.actions}
        >
          <Link to="/" className={styles.button}>
            <FontAwesomeIcon icon={faHome} className={styles.buttonIcon} />
            Ir para Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className={`${styles.button} ${styles.secondaryButton}`}
          >
            <FontAwesomeIcon icon={faArrowLeft} className={styles.buttonIcon} />
            Voltar
          </button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={styles.search}
        >
          <div className={styles.searchContainer}>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Pesquisar no site..."
              className={styles.searchInput}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound; 