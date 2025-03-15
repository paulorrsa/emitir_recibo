import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logo}>
          <FontAwesomeIcon icon={faReceipt} className={styles.logoIcon} />
          <span className={styles.logoText}>Emitir Recibo</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <div className={styles.navLinks}>
            <Link
              to="/"
              className={`${styles.navLink} ${isActive("/") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Início</span>
            </Link>
            <Link
              to="/sobre"
              className={`${styles.navLink} ${isActive("/sobre") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Sobre</span>
            </Link>
            <Link
              to="/privacidade"
              className={`${styles.navLink} ${isActive("/privacidade") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Privacidade</span>
            </Link>
            <Link
              to="/termos"
              className={`${styles.navLink} ${isActive("/termos") ? styles.active : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Termos</span>
            </Link>
          </div>
          <Link
            to="/gerar"
            className={styles.ctaButton}
            onClick={() => setIsMenuOpen(false)}
          >
            Gerar Recibo
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
