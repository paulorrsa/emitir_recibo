import React from "react";
import styles from "./ReceiptPreview.module.css";

const formatCurrency = (value) => {
  if (!value) return "R$ 0,00";
  const amount = parseFloat(value);
  if (isNaN(amount)) return "R$ 0,00";

  // Converte para centavos e remove decimais
  const cents = Math.round(amount * 100);

  // Separa reais e centavos
  const reais = Math.floor(cents / 100).toString();
  const centavos = (cents % 100).toString().padStart(2, "0");

  // Remove zeros à esquerda
  const cleanReais = reais.replace(/^0+/, "") || "0";

  // Formata com pontos de milhar apenas se o valor for maior que 999
  let formattedReais = cleanReais;
  if (cleanReais.length > 3) {
    formattedReais = cleanReais.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  return `R$ ${formattedReais},${centavos}`;
};

const numberToWords = (number) => {
  const units = [
    "",
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
  ];
  const teens = [
    "dez",
    "onze",
    "doze",
    "treze",
    "quatorze",
    "quinze",
    "dezesseis",
    "dezessete",
    "dezoito",
    "dezenove",
  ];
  const tens = [
    "",
    "",
    "vinte",
    "trinta",
    "quarenta",
    "cinquenta",
    "sessenta",
    "setenta",
    "oitenta",
    "noventa",
  ];
  const scales = ["", "mil", "milhão", "milhões"];

  if (number === 0) return "zero";

  const numberStr = Math.floor(number).toString().padStart(12, "0");
  const billions = parseInt(numberStr.slice(0, 3));
  const millions = parseInt(numberStr.slice(3, 6));
  const thousands = parseInt(numberStr.slice(6, 9));
  const hundreds = parseInt(numberStr.slice(9, 12));

  const convertHundreds = (n) => {
    if (n === 0) return "";

    const hundredsDigit = Math.floor(n / 100);
    const tensDigit = Math.floor((n % 100) / 10);
    const unitsDigit = n % 10;

    let result = "";

    if (hundredsDigit > 0) {
      if (hundredsDigit === 1 && tensDigit === 0 && unitsDigit === 0) {
        result += "cem";
      } else {
        const hundreds = [
          "",
          "cento",
          "duzentos",
          "trezentos",
          "quatrocentos",
          "quinhentos",
          "seiscentos",
          "setecentos",
          "oitocentos",
          "novecentos",
        ];
        result += hundreds[hundredsDigit];
      }
    }

    if (tensDigit > 0 || unitsDigit > 0) {
      if (hundredsDigit > 0) result += " e ";

      if (tensDigit === 1) {
        result += teens[unitsDigit];
      } else {
        if (tensDigit > 0) result += tens[tensDigit];
        if (unitsDigit > 0) {
          if (tensDigit > 0) result += " e ";
          result += units[unitsDigit];
        }
      }
    }

    return result;
  };

  let result = "";

  if (billions > 0) {
    result += convertHundreds(billions) + " bilhões ";
  }

  if (millions > 0) {
    if (millions === 1) {
      result += "um milhão ";
    } else {
      result += convertHundreds(millions) + " milhões ";
    }
  }

  if (thousands > 0) {
    if (thousands === 1) {
      result += "mil ";
    } else {
      result += convertHundreds(thousands) + " mil ";
    }
  }

  if (hundreds > 0) {
    if (result !== "") result += "e ";
    result += convertHundreds(hundreds);
  }

  return result.trim();
};

const formatAmountInWords = (value) => {
  if (!value) return "zero reais";
  const amount = parseFloat(value);
  if (isNaN(amount)) return "zero reais";

  const reais = Math.floor(amount);
  const centavos = Math.round((amount - reais) * 100);

  let result = "";

  if (reais === 0 && centavos === 0) return "zero reais";

  if (reais > 0) {
    result += numberToWords(reais);
    result += reais === 1 ? " real" : " reais";
  }

  if (centavos > 0) {
    if (reais > 0) result += " e ";
    result += numberToWords(centavos);
    result += centavos === 1 ? " centavo" : " centavos";
  }

  return result;
};

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const ReceiptPreview = ({ data }) => {
  const {
    reference,
    name,
    document,
    address,
    city,
    state,
    zipCode,
    receiverName,
    receiverDocument,
    receiverAddress,
    receiverEmail,
    amount,
    description,
    paymentMethod,
    paymentTerms,
    date,
  } = data;

  return (
    <div className={styles.preview}>
      <div className={styles.receipt}>
        <div className={styles.header}>
          <h1 className={styles.title}>Recibo</h1>
          <span className={styles.reference}>Nº {reference}</span>
        </div>

        <div className={styles.amount}>{formatCurrency(amount)}</div>
        <div className={styles.amountInWords}>
          ({formatAmountInWords(amount)})
        </div>

        <div className={styles.content}>
          <p className={styles.text}>
            Recebi de <strong>{name}</strong>
            {document && <>, CPF/CNPJ: {document}</>}, residente em{" "}
            <strong>
              {address}
              {city && state ? `, ${city}/${state}` : ""}
              {zipCode && ` - CEP: ${zipCode}`}
            </strong>
            , a importância de <strong>{formatCurrency(amount)}</strong> (
            <strong>{formatAmountInWords(amount)}</strong>) referente a{" "}
            {description}.
          </p>

          {paymentMethod && (
            <p className={styles.paymentMethod}>
              Forma de pagamento: <strong>{paymentMethod}</strong>
              {paymentTerms && (
                <>
                  {" "}
                  - Condição: <strong>{paymentTerms}</strong>
                </>
              )}
            </p>
          )}
        </div>

        <div className={styles.beneficiaryInfo}>
          <p className={styles.beneficiaryContact}>
            Dados do Beneficiário:
            <br />
            {receiverAddress && (
              <>
                {receiverAddress}
                <br />
              </>
            )}
            {receiverEmail && (
              <>
                {receiverEmail}
                <br />
              </>
            )}
          </p>
        </div>

        <div className={styles.signature}>
          <div className={styles.line} />
          <div className={styles.signatureContent}>
            <strong className={styles.name}>{receiverName}</strong>
            {receiverDocument && (
              <span className={styles.document}>
                CPF/CNPJ: {receiverDocument}
              </span>
            )}
          </div>
        </div>

        <div className={styles.date}>
          {city && state ? `${city}/${state}, ` : ""}
          {formatDate(date)}
        </div>

        <div className={styles.validityNote}>
          Este recibo é um documento válido para comprovação de pagamento.
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;
