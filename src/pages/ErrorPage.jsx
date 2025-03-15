import { useRouteError, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faHome,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  const error = useRouteError();

  // Determine o tipo de erro e a mensagem apropriada
  const getErrorMessage = () => {
    if (error.status === 404) {
      return "A página que você está procurando não existe.";
    }
    if (error.status === 500) {
      return "Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.";
    }
    return "Desculpe, ocorreu um erro inesperado.";
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className={styles.icon}
          size="3x"
        />
        <h1 className={styles.title}>
          {error.status === 404 ? "Página não encontrada" : "Oops!"}
        </h1>
        <p className={styles.message}>{getErrorMessage()}</p>
        <div className={styles.actions}>
          <Link to="/" className={styles.button}>
            <FontAwesomeIcon icon={faHome} className={styles.buttonIcon} />
            Voltar para o início
          </Link>
          <button
            onClick={() => window.history.back()}
            className={`${styles.button} ${styles.secondaryButton}`}
          >
            <FontAwesomeIcon icon={faArrowLeft} className={styles.buttonIcon} />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
