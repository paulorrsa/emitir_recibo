import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.css';

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
  outline: styles.outline,
  ghost: styles.ghost,
  danger: styles.danger,
};

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  className = '',
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    variants[variant],
    sizes[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const iconClasses = [
    styles.icon,
    iconPosition === 'right' && styles.iconRight,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <div className={styles.spinner} />}
      {!loading && icon && iconPosition === 'left' && (
        <FontAwesomeIcon icon={icon} className={iconClasses} />
      )}
      <span className={styles.content}>{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <FontAwesomeIcon icon={icon} className={iconClasses} />
      )}
    </button>
  );
};

export default Button; 