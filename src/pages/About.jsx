import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faShieldAlt,
  faClock,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";
import Container from "../components/Container";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sobre o Recibo Online</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Nossa Missão</h2>
          <p className={styles.sectionText}>
            O Recibo Online nasceu com o objetivo de simplificar a vida de
            profissionais autônomos, pequenos empresários e prestadores de
            serviço, oferecendo uma solução gratuita e profissional para a
            geração de recibos.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Por que escolher o Recibo Online?
          </h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <FontAwesomeIcon
                icon={faFileInvoice}
                className={styles.featureIcon}
              />
              <h3>Recibos Profissionais</h3>
              <p>
                Gere recibos com layout profissional e todas as informações
                necessárias
              </p>
            </div>
            <div className={styles.feature}>
              <FontAwesomeIcon
                icon={faShieldAlt}
                className={styles.featureIcon}
              />
              <h3>Seguro e Confiável</h3>
              <p>
                Seus dados são processados localmente, sem armazenamento em
                servidores
              </p>
            </div>
            <div className={styles.feature}>
              <FontAwesomeIcon icon={faClock} className={styles.featureIcon} />
              <h3>Rápido e Prático</h3>
              <p>Gere seus recibos em segundos, sem necessidade de cadastro</p>
            </div>
            <div className={styles.feature}>
              <FontAwesomeIcon
                icon={faHandHoldingUsd}
                className={styles.featureIcon}
              />
              <h3>Totalmente Gratuito</h3>
              <p>Sem custos ocultos ou limitações de uso</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Como Funciona</h2>
          <ol className={styles.steps}>
            <li>
              Escolha o modelo de recibo que melhor se adequa à sua necessidade
            </li>
            <li>Preencha as informações necessárias no formulário</li>
            <li>Visualize o recibo em tempo real</li>
            <li>Imprima ou salve o recibo em PDF</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comece Agora</h2>
          <p className={styles.sectionText}>
            Não perca mais tempo com burocracia. Gere seus recibos de forma
            rápida e profissional.
          </p>
          <Link to="/" className={styles.button}>
            Gerar Recibo
          </Link>
        </section>
      </div>
    </div>
  );
}

export default About;
