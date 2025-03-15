import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import Container from "../components/Container";
import ReceiptForm from "../components/ReceiptForm";
import ReceiptPreview from "../components/ReceiptPreview";
import useStore from "../store/useStore";
import { formatCurrency } from "../utils/format";
import styles from "./GenerateReceipt.module.css";

const GenerateReceipt = () => {
  const { type } = useParams();
  const { addReceipt, setLoading, setError, clearError } = useStore();
  const [formData, setFormData] = useState({
    name: "",
    document: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    receiverName: "",
    receiverDocument: "",
    amount: "",
    description: "",
    paymentMethod: "",
    date: new Date().toISOString().split("T")[0],
    reference: Math.random().toString(36).substring(2, 10).toUpperCase(),
  });

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      clearError();

      const receipt = {
        ...data,
        type,
        createdAt: new Date().toISOString(),
        id: Date.now(),
      };

      await addReceipt(receipt);
      setFormData(receipt);
    } catch (error) {
      setError("Erro ao gerar recibo. Por favor, tente novamente.");
      console.error("Error generating receipt:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (data) => {
    setFormData(data);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.grid}>
          <div className={`${styles.formSection} no-print`}>
            <ReceiptForm
              data={formData}
              onChange={handleFormChange}
              onSubmit={handleSubmit}
            />
          </div>
          <div className={styles.previewSection}>
            <div className={`${styles.previewHeader} no-print`}>
              <h2 className={styles.previewTitle}>Pré-visualização</h2>
              <button onClick={handlePrint} className={styles.printButton}>
                <FontAwesomeIcon icon={faPrint} className={styles.printIcon} />
                Imprimir
              </button>
            </div>
            <div className="print-only">
              <ReceiptPreview data={formData} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GenerateReceipt;
