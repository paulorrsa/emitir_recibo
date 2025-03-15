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
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./PopularReceipts.module.css";

const popularReceipts = [
  {
    id: 1,
    title: "Prestação de Serviços",
    description: "Para profissionais autônomos",
    icon: faHandHoldingUsd,
    color: "#18B5A8",
  },
  {
    id: 2,
    title: "Aluguel",
    description: "Imóveis residenciais e comerciais",
    icon: faBriefcase,
    color: "#1DE0D0",
  },
  {
    id: 3,
    title: "Aulas Particulares",
    description: "Professores e instrutores",
    icon: faGraduationCap,
    color: "#0F736A",
  },
  {
    id: 4,
    title: "Transporte",
    description: "Motoristas e entregadores",
    icon: faCar,
    color: "#04332F",
  },
  {
    id: 5,
    title: "Manutenção",
    description: "Eletricistas, encanadores, etc.",
    icon: faWrench,
    color: "#18B5A8",
  },
  {
    id: 6,
    title: "Consultoria",
    description: "Consultores e assessores",
    icon: faHandshake,
    color: "#1DE0D0",
  },
  {
    id: 7,
    title: "Serviços Domésticos",
    description: "Diaristas e cuidadores",
    icon: faHouse,
    color: "#0F736A",
  },
  {
    id: 8,
    title: "Alimentação",
    description: "Catering e delivery",
    icon: faUtensils,
    color: "#04332F",
  },
];

const PopularReceipts = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Tipos de Recibos Mais Pesquisados</h2>
          <p className={styles.subtitle}>
            Escolha entre os tipos de recibos mais utilizados pelos nossos
            usuários
          </p>
        </div>

        <div className={styles.grid}>
          {popularReceipts.map((receipt) => (
            <Link
              key={receipt.id}
              to={`/gerar/recibo?tipo=${receipt.id}`}
              className={styles.card}
            >
              <div
                className={styles.iconWrapper}
                style={{ backgroundColor: `${receipt.color}20` }}
              >
                <FontAwesomeIcon
                  icon={receipt.icon}
                  className={styles.icon}
                  style={{ color: receipt.color }}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{receipt.title}</h3>
                <p className={styles.cardDescription}>{receipt.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.footer}>
          <Link to="/tipos-recibos" className={styles.seeMore}>
            Ver mais tipos de recibos
            <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularReceipts;
