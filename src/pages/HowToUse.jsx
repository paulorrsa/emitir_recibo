import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faEdit,
  faDownload,
  faPrint,
  faEye,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./HowToUse.module.css";

function HowToUse() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <FontAwesomeIcon icon={faLightbulb} className={styles.headerIcon} />
          <h1 className={styles.title}>Como Usar</h1>
          <p className={styles.subtitle}>
            Aprenda a gerar recibos profissionais em poucos passos simples.
          </p>
        </header>

        <div className={styles.steps}>
          <section className={styles.step}>
            <div className={styles.stepIcon}>
              <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>1. Preencha os Dados</h2>
              <p className={styles.stepDescription}>
                Insira as informações necessárias no formulário, como valor,
                data, nome do pagador e descrição do serviço ou produto. Todos
                os campos obrigatórios são claramente marcados.
              </p>
              <div className={styles.stepTips}>
                <h3 className={styles.tipsTitle}>Dicas:</h3>
                <ul className={styles.tipsList}>
                  <li>Use valores numéricos precisos</li>
                  <li>Verifique a ortografia dos nomes</li>
                  <li>Seja claro na descrição</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.step}>
            <div className={styles.stepIcon}>
              <FontAwesomeIcon icon={faEye} />
            </div>
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>2. Visualize o Recibo</h2>
              <p className={styles.stepDescription}>
                Antes de baixar ou imprimir, confira a prévia do recibo para
                garantir que todas as informações estão corretas. Você pode
                fazer ajustes se necessário.
              </p>
              <div className={styles.stepTips}>
                <h3 className={styles.tipsTitle}>O que verificar:</h3>
                <ul className={styles.tipsList}>
                  <li>Dados do pagador e beneficiário</li>
                  <li>Valor em números e por extenso</li>
                  <li>Data e local corretos</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.step}>
            <div className={styles.stepIcon}>
              <FontAwesomeIcon icon={faDownload} />
            </div>
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>3. Baixe ou Imprima</h2>
              <p className={styles.stepDescription}>
                Escolha entre baixar o recibo em PDF ou imprimir diretamente. O
                arquivo PDF é ideal para envio digital, enquanto a impressão é
                perfeita para documentação física.
              </p>
              <div className={styles.stepTips}>
                <h3 className={styles.tipsTitle}>Recomendações:</h3>
                <ul className={styles.tipsList}>
                  <li>Use papel A4 para impressão</li>
                  <li>Guarde uma cópia digital do PDF</li>
                  <li>Verifique a qualidade da impressão</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Pronto para Começar?</h2>
          <p className={styles.ctaDescription}>
            Gere seu recibo agora mesmo de forma rápida, fácil e gratuita.
          </p>
          <Link to="/gerar" className={styles.ctaButton}>
            Gerar Recibo
            <FontAwesomeIcon icon={faArrowRight} className={styles.ctaIcon} />
          </Link>
        </div>

        <footer className={styles.footer}>
          <p className={styles.footerText}>
            Ainda tem dúvidas? Consulte nossa{" "}
            <Link to="/por-que-usar" className={styles.footerLink}>
              página de benefícios
            </Link>{" "}
            ou entre em{" "}
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

export default HowToUse;
