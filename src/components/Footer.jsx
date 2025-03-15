import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFileInvoiceDollar,
  faShieldAlt,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Main Footer Section */}
        <div className={styles.mainFooter}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h3 className={styles.brandTitle}>Emitir Recibo</h3>
            <p className={styles.brandDescription}>
              Gere recibos profissionais de forma rápida e segura, sem cadastro.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/paulo.r.sa/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://wa.me/5594999441569"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Links Rápidos</h4>
            <ul className={styles.linkList}>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/gerar">Gerar Recibo</Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Legal</h4>
            <ul className={styles.linkList}>
              <li>
                <Link to="/privacidade">Política de Privacidade</Link>
              </li>
              <li>
                <Link to="/termos">Termos de Uso</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contato</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:contato@emitirrecibo.com.br">
                  <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                  contato@emitirrecibo.com.br
                </a>
              </li>
              <li>
                <a href="https://wa.me/5594999441569">
                  <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={styles.trustIndicators}>
          <div className={styles.trustItem}>
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
            <span>100% Legal</span>
          </div>
          <div className={styles.trustItem}>
            <FontAwesomeIcon icon={faShieldAlt} />
            <span>Dados Seguros</span>
          </div>
          <div className={styles.trustItem}>
            <FontAwesomeIcon icon={faUserShield} />
            <span>Sem Cadastro</span>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>
            © {new Date().getFullYear()} Emitir Recibo. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
