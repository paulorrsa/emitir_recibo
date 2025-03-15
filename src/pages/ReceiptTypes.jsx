import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingUsd,
  faBriefcase,
  faGraduationCap,
  faCar,
  faHouse,
  faHandshake,
  faWrench,
  faUtensils,
  faPaintRoller,
  faCut,
  faMusic,
  faDumbbell,
  faCamera,
  faLaptop,
  faBook,
  faPaw,
  faTree,
  faTruck,
  faPlane,
  faShip,
  faFileAlt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Container from "../components/Container";
import styles from "./ReceiptTypes.module.css";

const types = [
  {
    icon: faFileAlt,
    title: "Recibo Simples",
    description:
      "Ideal para registrar pagamentos diversos de forma rápida e profissional.",
    link: "/gerar/recibo",
  },
  {
    icon: faHome,
    title: "Recibo de Aluguel",
    description:
      "Perfeito para documentar pagamentos de aluguel com todas as informações necessárias.",
    link: "/gerar/aluguel",
  },
  {
    icon: faBriefcase,
    title: "Recibo de Serviço",
    description:
      "Especialmente formatado para registrar prestação de serviços profissionais.",
    link: "/gerar/servico",
  },
  {
    icon: faCar,
    title: "Recibo de Venda",
    description:
      "Ideal para documentar transações de compra e venda de bens e produtos.",
    link: "/gerar/venda",
  },
  {
    icon: faGraduationCap,
    title: "Recibo de Curso",
    description:
      "Perfeito para escolas e instituições de ensino registrarem pagamentos de mensalidades.",
    link: "/gerar/curso",
  },
  {
    icon: faHandshake,
    title: "Recibo de Comissão",
    description:
      "Especialmente formatado para registrar pagamentos de comissões e bonificações.",
    link: "/gerar/comissao",
  },
];

const ReceiptTypes = () => {
  return (
    <div className={styles.page}>
      <Container>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Tipos de Recibo</h1>
          <p className={styles.heroDescription}>
            Escolha entre diversos modelos de recibo, cada um formatado
            especialmente para atender diferentes necessidades e situações.
          </p>
        </section>

        <section className={styles.types}>
          <div className={styles.typesGrid}>
            {types.map((type, index) => (
              <Link to={type.link} className={styles.typeCard} key={index}>
                <FontAwesomeIcon icon={type.icon} className={styles.typeIcon} />
                <h3 className={styles.typeTitle}>{type.title}</h3>
                <p className={styles.typeDescription}>{type.description}</p>
                <span className={styles.typeLink}>Gerar Recibo</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Não Encontrou o Tipo Ideal?</h2>
          <p className={styles.ctaDescription}>
            Use nosso modelo de recibo simples e personalize conforme sua
            necessidade.
          </p>
          <Link to="/gerar/recibo" className={styles.ctaButton}>
            Criar Recibo Personalizado
          </Link>
        </section>
      </Container>
    </div>
  );
};

export default ReceiptTypes;
