import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faShieldHalved,
  faLock,
  faBolt,
  faFileInvoiceDollar,
  faArrowRight,
  faCheck,
  faCloud,
  faUserShield,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./WhyUse.module.css";

function WhyUse() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <FontAwesomeIcon icon={faRocket} className={styles.headerIcon} />
          <h1 className={styles.title}>Por que Usar</h1>
          <p className={styles.subtitle}>
            Descubra por que o Recibo Online é a escolha ideal para gerar seus
            recibos de forma profissional.
          </p>
        </header>

        <div className={styles.benefits}>
          <section className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <h2 className={styles.benefitTitle}>Rápido e Fácil</h2>
            <p className={styles.benefitDescription}>
              Gere recibos em segundos com nossa interface intuitiva. Sem
              necessidade de cadastro ou downloads complicados.
            </p>
            <ul className={styles.benefitList}>
              <li>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                Interface intuitiva
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                Sem cadastro necessário
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                Preenchimento automático
              </li>
            </ul>
          </section>

          <section className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <h2 className={styles.benefitTitle}>100% Seguro</h2>
            <p className={styles.benefitDescription}>
              Seus dados são processados localmente no seu navegador. Não
              armazenamos nenhuma informação em nossos servidores.
            </p>
            <ul className={styles.benefitList}>
              <li>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                Processamento local
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                Sem armazenamento de dados
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                Conexão segura HTTPS
              </li>
            </ul>
          </section>

          <section className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FontAwesomeIcon icon={faFileInvoiceDollar} />
            </div>
            <h2 className={styles.benefitTitle}>Profissional</h2>
            <p className={styles.benefitDescription}>
              Recibos com aparência profissional e todos os elementos
              necessários para validade legal e fiscal.
            </p>
            <ul className={styles.benefitList}>
              <li>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                Layout profissional
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                Elementos legais inclusos
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                Múltiplos modelos
              </li>
            </ul>
          </section>

          <section className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <h2 className={styles.benefitTitle}>Acessível</h2>
            <p className={styles.benefitDescription}>
              Acesse de qualquer dispositivo, a qualquer momento. Totalmente
              gratuito e sem limitações de uso.
            </p>
            <ul className={styles.benefitList}>
              <li>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                100% gratuito
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                Sem limites de uso
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                Responsivo
              </li>
            </ul>
          </section>
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Comece Agora Mesmo</h2>
          <p className={styles.ctaDescription}>
            Experimente gratuitamente e veja como é fácil gerar recibos
            profissionais.
          </p>
          <Link to="/gerar" className={styles.ctaButton}>
            Gerar Recibo
            <FontAwesomeIcon icon={faArrowRight} className={styles.ctaIcon} />
          </Link>
        </div>

        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Quer saber mais? Veja{" "}
            <Link to="/como-usar" className={styles.footerLink}>
              como usar
            </Link>{" "}
            nossa plataforma ou entre em{" "}
            <Link to="/contato" className={styles.footerLink}>
              contato
            </Link>{" "}
            conosco.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default WhyUse;
