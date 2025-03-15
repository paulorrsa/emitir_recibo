import styles from "./TermsOfService.module.css";

function TermsOfService() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Termos de Uso</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Aceitação dos Termos</h2>
          <p className={styles.sectionText}>
            Ao acessar e utilizar o Recibo Online, você concorda em cumprir
            estes termos de uso. Se você não concordar com qualquer parte destes
            termos, não poderá utilizar nosso serviço.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Descrição do Serviço</h2>
          <p className={styles.sectionText}>
            O Recibo Online é uma ferramenta gratuita que permite a geração de
            recibos profissionais. O serviço é fornecido "como está", sem
            garantias de qualquer tipo, expressas ou implícitas.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Uso do Serviço</h2>
          <p className={styles.sectionText}>
            Ao utilizar nosso serviço, você concorda em:
          </p>
          <ul className={styles.list}>
            <li>Fornecer informações precisas e verdadeiras</li>
            <li>Não utilizar o serviço para fins ilegais</li>
            <li>Não interferir no funcionamento do serviço</li>
            <li>Não tentar acessar áreas restritas do sistema</li>
            <li>Não utilizar o serviço para distribuir malware ou vírus</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Responsabilidades</h2>
          <p className={styles.sectionText}>
            O Recibo Online não se responsabiliza por:
          </p>
          <ul className={styles.list}>
            <li>Precisão das informações fornecidas pelos usuários</li>
            <li>Uso indevido dos recibos gerados</li>
            <li>
              Problemas técnicos que possam ocorrer durante o uso do serviço
            </li>
            <li>Perda de dados ou informações durante o uso do serviço</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Modificações</h2>
          <p className={styles.sectionText}>
            Reservamos o direito de modificar ou descontinuar o serviço a
            qualquer momento, com ou sem aviso prévio. Também podemos atualizar
            estes termos de uso periodicamente.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            6. Limitação de Responsabilidade
          </h2>
          <p className={styles.sectionText}>
            Em nenhuma circunstância o Recibo Online será responsável por danos
            diretos, indiretos, incidentais, consequenciais ou punitivos
            resultantes do uso ou impossibilidade de uso do serviço.
          </p>
        </section>

        <div className={styles.contactSection}>
          <h3>Contato</h3>
          <p>
            Para mais informações sobre nossos termos de uso, entre em contato:
          </p>
          <p className={styles.contactEmail}>contato@emitirrecibo.com.br</p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
