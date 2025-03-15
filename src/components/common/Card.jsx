import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Card.module.css';

const Card = ({
  children,
  title,
  icon,
  headerActions,
  footer,
  variant = 'default',
  hover = false,
  className = '',
  ...props
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    hover && styles.hover,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} {...props}>
      {(title || headerActions) && (
        <div className={styles.header}>
          {(title || icon) && (
            <div className={styles.titleContainer}>
              {icon && (
                <FontAwesomeIcon icon={icon} className={styles.icon} />
              )}
              {title && <h3 className={styles.title}>{title}</h3>}
            </div>
          )}
          {headerActions && (
            <div className={styles.headerActions}>{headerActions}</div>
          )}
        </div>
      )}

      <div className={styles.content}>{children}</div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card; 