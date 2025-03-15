import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Avatar.module.css';

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
  xlarge: styles.xlarge,
};

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const Avatar = ({
  src,
  alt,
  name,
  size = 'medium',
  status,
  className = '',
  ...props
}) => {
  const avatarClasses = [
    styles.avatar,
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderContent = () => {
    if (src) {
      return <img src={src} alt={alt || name} className={styles.image} />;
    }

    if (name) {
      return <span className={styles.initials}>{getInitials(name)}</span>;
    }

    return <FontAwesomeIcon icon={faUser} className={styles.icon} />;
  };

  return (
    <div className={avatarClasses} {...props}>
      {renderContent()}
      {status && (
        <span className={`${styles.status} ${styles[status]}`} />
      )}
    </div>
  );
};

export default Avatar; 