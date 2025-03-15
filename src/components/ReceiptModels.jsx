import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoiceDollar,
  faHouse,
  faWrench,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ReceiptModels.module.css";

function ReceiptModels() {
  const models = [
    {
      id: "simples",
      title: "Recibo Simples",
      description: "Ideal para pagamentos diversos",
      icon: faFileInvoiceDollar,
      color: "var(--primary-500)",
      link: "/gerar?modelo=simples"
    },
    {
      id: "aluguel",
      title: "Recibo de Aluguel",
      description: "Perfeito para locadores",
      icon: faHouse,
      color: "var(--primary-600)",
      link: "/gerar?modelo=aluguel"
    },
    {
      id: "servico",
      title: "Recibo de Serviço",
      description: "Para prestadores de serviço",
      icon: faWrench,
      color: "var(--primary-700)",
      link: "/gerar?modelo=servico"
    },
    {
      id: "curso",
      title: "Recibo de Curso",
      description: "Para instituições de ensino",
      icon: faGraduationCap,
      color: "var(--primary-800)",
      link: "/gerar?modelo=curso"
    }
  ];

  return (
    <section className={styles.modelsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Modelos de Recibo</h2>
        <div className={styles.grid}>
          {models.map((model) => (
            <Link
              key={model.id}
              to={model.link}
              className={styles.modelCard}
            >
              <div
                className={styles.iconWrapper}
                style={{ backgroundColor: `${model.color}15` }}
              >
                <FontAwesomeIcon
                  icon={model.icon}
                  className={styles.icon}
                  style={{ color: model.color }}
                />
              </div>
              <h3 className={styles.modelTitle}>{model.title}</h3>
              <p className={styles.modelDescription}>{model.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReceiptModels;
