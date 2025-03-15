import styles from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Política de Privacidade</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introdução</h2>
          <p className={styles.sectionText}>
            O Recibo Online está comprometido em proteger sua privacidade. Esta
            política de privacidade descreve como coletamos, usamos e protegemos
            suas informações quando você utiliza nosso serviço.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Coleta de Dados</h2>
          <p className={styles.sectionText}>
            Nossa plataforma foi desenvolvida com foco na privacidade e
            segurança dos usuários. Todas as informações que você insere são
            processadas localmente em seu navegador, sem armazenamento em nossos
            servidores. Não utilizamos cookies de rastreamento ou qualquer outro
            método de coleta de dados.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Uso das Informações</h2>
          <p className={styles.sectionText}>
            As informações que você fornece são utilizadas exclusivamente para:
          </p>
          <ul className={styles.list}>
            <li>Gerar o recibo conforme suas especificações</li>
            <li>Permitir a visualização prévia do recibo</li>
            <li>Facilitar a impressão ou download do documento</li>
          </ul>
          <p className={styles.sectionText}>
            Não compartilhamos, vendemos ou utilizamos suas informações para
            qualquer outro propósito.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Segurança</h2>
          <p className={styles.sectionText}>
            Implementamos as seguintes medidas de segurança para proteger suas
            informações:
          </p>
          <ul className={styles.list}>
            <li>Processamento local de dados no seu navegador</li>
            <li>Conexão segura via HTTPS</li>
            <li>Sem armazenamento de dados em servidores</li>
            <li>Sem uso de cookies de rastreamento</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Seus Direitos</h2>
          <p className={styles.sectionText}>
            Como não armazenamos seus dados, você tem controle total sobre suas
            informações. Você pode:
          </p>
          <ul className={styles.list}>
            <li>
              Usar o serviço sem se preocupar com o armazenamento de dados
            </li>
            <li>Limpar seus dados simplesmente fechando o navegador</li>
            <li>Gerar quantos recibos desejar sem deixar rastros</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Contato</h2>
          <p className={styles.sectionText}>
            Para mais informações sobre nossa política de privacidade, entre em
            contato:
          </p>
          <p className={styles.contactEmail}>contato@emitirrecibo.com.br</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Atualizações da Política</h2>
          <p className={styles.sectionText}>
            Podemos atualizar esta política de privacidade ocasionalmente.
            Recomendamos que você revise esta página periodicamente para se
            manter informado sobre como protegemos suas informações.
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
