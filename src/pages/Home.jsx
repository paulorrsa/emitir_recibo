import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoiceDollar,
  faHome,
  faBriefcase,
  faGraduationCap,
  faArrowRight,
  faCheckCircle,
  faShieldAlt,
  faBolt,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import ReceiptModels from "../components/ReceiptModels";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Gere seus recibos de forma rápida e segura
          </h1>
          <p className={styles.description}>
            Crie recibos profissionais em segundos. 100% legal e sem necessidade
            de cadastro.
          </p>
          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>
              <FontAwesomeIcon
                icon={faShieldAlt}
                className={styles.trustIcon}
              />
              <span>100% Legal</span>
            </div>
            <div className={styles.trustItem}>
              <FontAwesomeIcon
                icon={faShieldAlt}
                className={styles.trustIcon}
              />
              <span>Dados Seguros</span>
            </div>
            <div className={styles.trustItem}>
              <FontAwesomeIcon icon={faBolt} className={styles.trustIcon} />
              <span>Rápido e Fácil</span>
            </div>
          </div>
          <Link to="/gerar" className={styles.ctaButton}>
            Gerar Recibo Agora
          </Link>
        </div>
      </section>

      {/* Receipt Models Section */}
      <ReceiptModels />

      {/* How to Use Section */}
      <section className={styles.howToUse}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Como Usar</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Escolha o Modelo</h3>
              <p className={styles.stepDescription}>
                Selecione o tipo de recibo que você precisa gerar
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Preencha os Dados</h3>
              <p className={styles.stepDescription}>
                Insira as informações necessárias no formulário
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Imprima ou Salve</h3>
              <p className={styles.stepDescription}>
                Baixe o recibo em PDF ou imprima diretamente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className={styles.whyUse}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Por que Usar</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <FontAwesomeIcon
                icon={faShieldAlt}
                className={styles.featureIcon}
              />
              <h3 className={styles.featureTitle}>Segurança</h3>
              <p className={styles.featureDescription}>
                Seus dados são processados localmente e não são armazenados
              </p>
            </div>
            <div className={styles.feature}>
              <FontAwesomeIcon icon={faBolt} className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>Eficiência</h3>
              <p className={styles.featureDescription}>
                Gere recibos em segundos, sem complicações
              </p>
            </div>
            <div className={styles.feature}>
              <FontAwesomeIcon icon={faPrint} className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>Impressão Otimizada</h3>
              <p className={styles.featureDescription}>
                Layout profissional e otimizado para impressão
              </p>
            </div>
            <div className={styles.feature}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={styles.featureIcon}
              />
              <h3 className={styles.featureTitle}>100% Legal</h3>
              <p className={styles.featureDescription}>
                Modelos em conformidade com a legislação
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
