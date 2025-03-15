import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCookie,
  faShieldHalved,
  faCircleInfo,
  faGears,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./CookiesPolicy.module.css";

function CookiesPolicy() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <FontAwesomeIcon icon={faCookie} className={styles.headerIcon} />
          <h1 className={styles.title}>Política de Cookies</h1>
          <p className={styles.subtitle}>
            Entenda como utilizamos cookies e outras tecnologias em nosso
            serviço de geração de recibos online.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              className={styles.sectionIcon}
            />
            O que são Cookies?
          </h2>
          <div className={styles.sectionContent}>
            <p>
              Cookies são pequenos arquivos de texto que são armazenados no seu
              computador ou dispositivo móvel quando você visita um site. Eles
              são amplamente utilizados para fazer os sites funcionarem de
              maneira mais eficiente e fornecer informações aos proprietários do
              site.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon icon={faGears} className={styles.sectionIcon} />
            Como Utilizamos os Cookies
          </h2>
          <div className={styles.sectionContent}>
            <p>
              O Recibo Online é projetado para funcionar sem o uso de cookies de
              rastreamento. Nosso serviço:
            </p>
            <ul className={styles.list}>
              <li>Não utiliza cookies para rastrear seu comportamento</li>
              <li>Não armazena informações pessoais em cookies</li>
              <li>Processa todos os dados localmente em seu navegador</li>
              <li>
                Utiliza apenas cookies técnicos essenciais quando absolutamente
                necessário
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon
              icon={faShieldHalved}
              className={styles.sectionIcon}
            />
            Cookies Essenciais
          </h2>
          <div className={styles.sectionContent}>
            <p>
              Em algumas situações, podemos utilizar cookies estritamente
              necessários para o funcionamento básico do site. Estes cookies não
              coletam informações pessoais e são utilizados apenas para:
            </p>
            <ul className={styles.list}>
              <li>Manter o site funcionando corretamente</li>
              <li>Lembrar suas preferências de tema (claro/escuro)</li>
              <li>Garantir a segurança do site</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FontAwesomeIcon
              icon={faUserShield}
              className={styles.sectionIcon}
            />
            Seus Direitos e Escolhas
          </h2>
          <div className={styles.sectionContent}>
            <p>
              A maioria dos navegadores permite que você gerencie suas
              preferências de cookies. Você pode:
            </p>
            <ul className={styles.list}>
              <li>Excluir cookies existentes</li>
              <li>Impedir que cookies sejam aceitos</li>
              <li>Receber notificações antes de um cookie ser armazenado</li>
            </ul>
            <p>
              Note que, como nosso serviço utiliza o mínimo possível de cookies,
              desativá-los pode não afetar significativamente sua experiência em
              nosso site.
            </p>
          </div>
        </section>

        <footer className={styles.footer}>
          <p className={styles.footerText}>Última atualização: Março 2024</p>
          <div className={styles.footerLinks}>
            <Link to="/privacidade" className={styles.footerLink}>
              Política de Privacidade
            </Link>
            <span className={styles.footerDivider}>•</span>
            <Link to="/termos" className={styles.footerLink}>
              Termos de Uso
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CookiesPolicy;
