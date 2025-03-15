import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Badge.module.css';

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
  info: styles.info,
};

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

const Badge = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  dot = false,
  className = '',
  ...props
}) => {
  const badgeClasses = [
    styles.badge,
    variants[variant],
    sizes[size],
    dot && styles.dot,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (dot) {
    return <span className={badgeClasses} {...props} />;
  }

  return (
    <span className={badgeClasses} {...props}>
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
      {children}
    </span>
  );
};

export default Badge; 