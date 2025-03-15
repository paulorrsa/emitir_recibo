import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoText}>Emitir</span>
              <span className={styles.logoHighlight}>Recibo</span>
            </Link>

            <nav className={styles.nav}>
              <NavLink to="/" className={styles.navLink} end>
                Início
              </NavLink>
              <NavLink to="/gerar/recibo" className={styles.navLink}>
                Gerar Recibo
              </NavLink>
              <NavLink to="/tipos" className={styles.navLink}>
                Tipos
              </NavLink>
              <NavLink to="/sobre" className={styles.navLink}>
                Sobre
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>
                Emitir
                <span className={styles.footerTitleHighlight}>Recibo</span>
              </h3>
              <p className={styles.footerDescription}>
                Gere recibos profissionais de forma rápida e segura. Nossa
                plataforma oferece uma solução completa para suas necessidades
                de documentação.
              </p>
            </div>

            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>Links Úteis</h3>
              <ul className={styles.footerLinks}>
                <li>
                  <Link to="/gerar/recibo" className={styles.footerLink}>
                    Gerar Recibo
                  </Link>
                </li>
                <li>
                  <Link to="/tipos" className={styles.footerLink}>
                    Tipos de Recibo
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className={styles.footerLink}>
                    Sobre Nós
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>Recursos</h3>
              <ul className={styles.footerLinks}>
                <li>
                  <Link to="/gerar/recibo" className={styles.footerLink}>
                    Recibo Simples
                  </Link>
                </li>
                <li>
                  <Link to="/gerar/aluguel" className={styles.footerLink}>
                    Recibo de Aluguel
                  </Link>
                </li>
                <li>
                  <Link to="/gerar/servico" className={styles.footerLink}>
                    Recibo de Serviço
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              <p>
                © {new Date().getFullYear()} EmitirRecibo. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
