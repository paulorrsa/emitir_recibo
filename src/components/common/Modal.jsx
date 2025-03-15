import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faExclamationTriangle,
  faCheckCircle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Modal.module.css';

const icons = {
  warning: faExclamationTriangle,
  success: faCheckCircle,
  info: faInfoCircle,
};

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  type = 'info',
  showCloseButton = true,
  onConfirm,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  showActions = true,
}) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.overlay}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.75, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className={styles.modal}
          >
            <div className={styles.header}>
              {type && (
                <FontAwesomeIcon
                  icon={icons[type]}
                  className={`${styles.icon} ${styles[type]}`}
                />
              )}
              <h2 className={styles.title}>{title}</h2>
              {showCloseButton && (
                <button onClick={onClose} className={styles.closeButton}>
                  <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} />
                </button>
              )}
            </div>

            <div className={styles.content}>{children}</div>

            {showActions && (
              <div className={styles.actions}>
                <button
                  onClick={onClose}
                  className={`${styles.button} ${styles.cancelButton}`}
                >
                  {cancelText}
                </button>
                <button
                  onClick={() => {
                    onConfirm?.();
                    onClose();
                  }}
                  className={`${styles.button} ${styles.confirmButton}`}
                >
                  {confirmText}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal; 