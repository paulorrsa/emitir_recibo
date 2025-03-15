import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faFileInvoiceDollar,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import {
  formatCPFCNPJ,
  formatCEP,
  formatCurrency,
  unformatCurrency,
  validateCPFCNPJ,
} from "../utils/format";
import styles from "./ReceiptForm.module.css";

export default function ReceiptForm({ data, onChange, onSubmit }) {
  const [errors, setErrors] = useState({});
  const [displayAmount, setDisplayAmount] = useState(
    data.amount ? formatCurrency(String(data.amount * 100)) : "",
  );
  const [isLoadingCEP, setIsLoadingCEP] = useState(false);

  const fetchAddressByCEP = async (cep) => {
    try {
      setIsLoadingCEP(true);
      const cleanCEP = cep.replace(/\D/g, "");
      if (cleanCEP.length !== 8) return;

      const response = await fetch(
        `https://viacep.com.br/ws/${cleanCEP}/json/`,
      );
      const cepData = await response.json();

      if (cepData.erro) {
        setErrors((prev) => ({ ...prev, zipCode: "CEP não encontrado" }));
        return;
      }

      // Atualiza os campos de endereço mantendo todos os dados existentes
      onChange({
        ...data, // Mantém todos os dados existentes do formulário
        address: `${cepData.logradouro}${cepData.complemento ? `, ${cepData.complemento}` : ""}`,
        city: cepData.localidade,
        state: cepData.uf,
        zipCode: cep,
      });

      // Remove o erro do CEP se existir
      if (errors.zipCode) {
        const newErrors = { ...errors };
        delete newErrors.zipCode;
        setErrors(newErrors);
      }
    } catch (error) {
      setErrors((prev) => ({ ...prev, zipCode: "Erro ao buscar CEP" }));
    } finally {
      setIsLoadingCEP(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Aplicar formatação
    if (name === "document" || name === "receiverDocument") {
      formattedValue = formatCPFCNPJ(value);
    } else if (name === "zipCode") {
      formattedValue = formatCEP(value);
      if (formattedValue.length === 9) {
        // CEP completo (00000-000)
        fetchAddressByCEP(formattedValue);
      }
    } else if (name === "amount") {
      formattedValue = formatCurrency(value);
      setDisplayAmount(formattedValue);
      formattedValue = unformatCurrency(formattedValue);
    }

    // Validar campos
    const newErrors = { ...errors };
    if (name === "document" || name === "receiverDocument") {
      const isValid = validateCPFCNPJ(formattedValue);
      if (!isValid && formattedValue.length > 0) {
        newErrors[name] = "CPF/CNPJ inválido";
      } else {
        delete newErrors[name];
      }
    }

    setErrors(newErrors);

    // Atualizar o estado
    const updatedData = {
      ...data,
      [name]: formattedValue,
    };
    onChange(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar todos os campos antes de enviar
    const newErrors = {};

    if (data.document && !validateCPFCNPJ(data.document)) {
      newErrors.document = "CPF/CNPJ do pagador inválido";
    }

    if (data.receiverDocument && !validateCPFCNPJ(data.receiverDocument)) {
      newErrors.receiverDocument = "CPF/CNPJ do recebedor inválido";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(data);
  };

  const getInputClassName = (fieldName) => {
    return `${styles.input} ${errors[fieldName] ? styles.inputError : ""}`;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <FontAwesomeIcon icon={faUser} className={styles.sectionIcon} />
          Pagador
        </h3>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
              className={getInputClassName("name")}
              placeholder="Nome completo"
              required
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="document" className={styles.label}>
              CPF/CNPJ
            </label>
            <input
              type="text"
              id="document"
              name="document"
              value={data.document}
              onChange={handleChange}
              className={getInputClassName("document")}
              placeholder="CPF ou CNPJ"
              required
            />
            {errors.document && (
              <span className={styles.error}>{errors.document}</span>
            )}
          </div>
        </div>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="zipCode" className={styles.label}>
              CEP
            </label>
            <div className={styles.inputWithStatus}>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={data.zipCode}
                onChange={handleChange}
                className={getInputClassName("zipCode")}
                placeholder="00000-000"
                required
              />
              {isLoadingCEP && <div className={styles.loadingIndicator} />}
            </div>
            {errors.zipCode && (
              <span className={styles.error}>{errors.zipCode}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="address" className={styles.label}>
              Endereço
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={data.address}
              onChange={handleChange}
              className={getInputClassName("address")}
              placeholder="Rua, número"
              required
            />
            {errors.address && (
              <span className={styles.error}>{errors.address}</span>
            )}
          </div>
        </div>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="city" className={styles.label}>
              Cidade
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={data.city}
              onChange={handleChange}
              className={getInputClassName("city")}
              placeholder="Cidade"
              required
            />
            {errors.city && <span className={styles.error}>{errors.city}</span>}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="state" className={styles.label}>
              Estado
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={data.state}
              onChange={handleChange}
              className={getInputClassName("state")}
              placeholder="UF"
              maxLength={2}
              required
            />
            {errors.state && (
              <span className={styles.error}>{errors.state}</span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <FontAwesomeIcon icon={faUserTie} className={styles.sectionIcon} />
          Recebedor
        </h3>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="receiverName" className={styles.label}>
              Nome
            </label>
            <input
              type="text"
              id="receiverName"
              name="receiverName"
              value={data.receiverName}
              onChange={handleChange}
              className={getInputClassName("receiverName")}
              placeholder="Nome completo"
              required
            />
            {errors.receiverName && (
              <span className={styles.error}>{errors.receiverName}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="receiverDocument" className={styles.label}>
              CPF/CNPJ
            </label>
            <input
              type="text"
              id="receiverDocument"
              name="receiverDocument"
              value={data.receiverDocument}
              onChange={handleChange}
              className={getInputClassName("receiverDocument")}
              placeholder="CPF ou CNPJ"
              required
            />
            {errors.receiverDocument && (
              <span className={styles.error}>{errors.receiverDocument}</span>
            )}
          </div>
        </div>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="receiverAddress" className={styles.label}>
              Endereço
            </label>
            <input
              type="text"
              id="receiverAddress"
              name="receiverAddress"
              value={data.receiverAddress}
              onChange={handleChange}
              className={getInputClassName("receiverAddress")}
              placeholder="Endereço completo"
              required
            />
            {errors.receiverAddress && (
              <span className={styles.error}>{errors.receiverAddress}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="receiverEmail" className={styles.label}>
              E-mail
            </label>
            <input
              type="email"
              id="receiverEmail"
              name="receiverEmail"
              value={data.receiverEmail}
              onChange={handleChange}
              className={getInputClassName("receiverEmail")}
              placeholder="email@exemplo.com"
              required
            />
            {errors.receiverEmail && (
              <span className={styles.error}>{errors.receiverEmail}</span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <FontAwesomeIcon
            icon={faFileInvoiceDollar}
            className={styles.sectionIcon}
          />
          Detalhes do Recibo
        </h3>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="amount" className={styles.label}>
              Valor
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={displayAmount}
              onChange={handleChange}
              className={getInputClassName("amount")}
              placeholder="R$ 0,00"
              required
            />
            {errors.amount && (
              <span className={styles.error}>{errors.amount}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="paymentMethod" className={styles.label}>
              Forma de Pagamento
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={data.paymentMethod}
              onChange={handleChange}
              className={getInputClassName("paymentMethod")}
              required
            >
              <option value="">Selecione...</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Cartão de Débito">Cartão de Débito</option>
              <option value="PIX">PIX</option>
              <option value="Transferência">Transferência</option>
              <option value="Cheque">Cheque</option>
            </select>
            {errors.paymentMethod && (
              <span className={styles.error}>{errors.paymentMethod}</span>
            )}
          </div>
        </div>
        <div className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label htmlFor="paymentTerms" className={styles.label}>
              Condição de Pagamento
            </label>
            <select
              id="paymentTerms"
              name="paymentTerms"
              value={data.paymentTerms}
              onChange={handleChange}
              className={getInputClassName("paymentTerms")}
              required
            >
              <option value="">Selecione...</option>
              <option value="À Vista">À Vista</option>
              <option value="Parcelado">Parcelado</option>
              <option value="30 Dias">30 Dias</option>
              <option value="60 Dias">60 Dias</option>
              <option value="90 Dias">90 Dias</option>
            </select>
            {errors.paymentTerms && (
              <span className={styles.error}>{errors.paymentTerms}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="reference" className={styles.label}>
              Nº do Recibo
            </label>
            <input
              type="text"
              id="reference"
              name="reference"
              value={data.reference}
              onChange={handleChange}
              className={getInputClassName("reference")}
              placeholder="Número"
              required
            />
            {errors.reference && (
              <span className={styles.error}>{errors.reference}</span>
            )}
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="description" className={styles.label}>
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            value={data.description}
            onChange={handleChange}
            className={`${getInputClassName("description")} ${styles.textarea}`}
            placeholder="Descrição detalhada do serviço ou produto"
            required
          />
          {errors.description && (
            <span className={styles.error}>{errors.description}</span>
          )}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="date" className={styles.label}>
            Data
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={data.date}
            onChange={handleChange}
            className={getInputClassName("date")}
            required
          />
          {errors.date && <span className={styles.error}>{errors.date}</span>}
        </div>
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submitButton}>
          Gerar Recibo
        </button>
      </div>
    </form>
  );
}
