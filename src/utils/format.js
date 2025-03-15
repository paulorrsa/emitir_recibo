export const formatCPFCNPJ = (value) => {
  const numbers = value.replace(/\D/g, "");
  
  if (numbers.length <= 11) {
    return numbers
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  
  return numbers
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
};

export const formatCEP = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .substring(0, 9);
};

export const formatCurrency = (value) => {
  let numbers = value.replace(/\D/g, "");
  
  // Remove zeros à esquerda
  numbers = numbers.replace(/^0+/, "") || "0";
  
  // Adiciona zeros à direita se necessário
  numbers = numbers.padStart(3, "0");
  
  // Separa reais e centavos
  const reais = numbers.slice(0, -2);
  const centavos = numbers.slice(-2);
  
  // Formata com pontos de milhar apenas se o valor for maior que 999
  let formattedReais = reais;
  if (reais.length > 3) {
    formattedReais = reais.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  
  return `R$ ${formattedReais},${centavos}`;
};

export const unformatCurrency = (value) => {
  if (!value) return "";
  const numbers = value.replace(/\D/g, "");
  if (numbers === "") return "";
  return (parseInt(numbers, 10) / 100).toFixed(2);
};

export const validateCPFCNPJ = (value) => {
  const numbers = value.replace(/\D/g, "");
  
  if (numbers.length === 11) {
    return validateCPF(numbers);
  }
  
  if (numbers.length === 14) {
    return validateCNPJ(numbers);
  }
  
  return false;
};

const validateCPF = (cpf) => {
  if (cpf.length !== 11) return false;
  
  if (/^(\d)\1{10}$/.test(cpf)) return false;
  
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  
  let digit = 11 - (sum % 11);
  if (digit >= 10) digit = 0;
  if (digit !== parseInt(cpf.charAt(9))) return false;
  
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  
  digit = 11 - (sum % 11);
  if (digit >= 10) digit = 0;
  if (digit !== parseInt(cpf.charAt(10))) return false;
  
  return true;
};

const validateCNPJ = (cnpj) => {
  if (cnpj.length !== 14) return false;
  
  if (/^(\d)\1{13}$/.test(cnpj)) return false;
  
  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  const digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;
  
  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) pos = 9;
  }
  
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;
  
  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;
  
  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) pos = 9;
  }
  
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) return false;
  
  return true;
}; 