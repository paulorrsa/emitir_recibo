import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import styles from "../styles/dynamicForm.module.css";

const formConfig = {
  aluguel: [
    {
      type: "text",
      name: "locador",
      label: "Nome do Locador",
      required: true,
    },
    {
      type: "text",
      name: "locatario",
      label: "Nome do Locatário",
      required: true,
    },
    {
      type: "text",
      name: "endereco",
      label: "Endereço do Imóvel",
      required: true,
    },
    {
      type: "text",
      name: "valor",
      label: "Valor do Aluguel",
      required: true,
    },
    {
      type: "text",
      name: "referencia",
      label: "Período de Referência",
      required: true,
    },
    {
      type: "text",
      name: "cidade",
      label: "Cidade",
      required: true,
    },
    {
      type: "text",
      name: "estado",
      label: "Estado",
      required: true,
    },
    {
      type: "text",
      name: "data",
      label: "Data",
      required: true,
    },
    {
      type: "textarea",
      name: "observacoes",
      label: "Observações",
      required: false,
    },
  ],
  "compra-venda": [
    {
      type: "text",
      name: "vendedor",
      label: "Nome do Vendedor",
      required: true,
    },
    {
      type: "text",
      name: "comprador",
      label: "Nome do Comprador",
      required: true,
    },
    {
      type: "text",
      name: "descricao",
      label: "Descrição do Bem",
      required: true,
    },
    {
      type: "text",
      name: "valor",
      label: "Valor",
      required: true,
    },
    {
      type: "text",
      name: "cidade",
      label: "Cidade",
      required: true,
    },
    {
      type: "text",
      name: "estado",
      label: "Estado",
      required: true,
    },
    {
      type: "text",
      name: "data",
      label: "Data",
      required: true,
    },
    {
      type: "textarea",
      name: "observacoes",
      label: "Observações",
      required: false,
    },
  ],
  servicos: [
    {
      type: "text",
      name: "prestador",
      label: "Nome do Prestador",
      required: true,
    },
    {
      type: "text",
      name: "tomador",
      label: "Nome do Tomador",
      required: true,
    },
    {
      type: "text",
      name: "descricao",
      label: "Descrição dos Serviços",
      required: true,
    },
    {
      type: "text",
      name: "valor",
      label: "Valor",
      required: true,
    },
    {
      type: "text",
      name: "cidade",
      label: "Cidade",
      required: true,
    },
    {
      type: "text",
      name: "estado",
      label: "Estado",
      required: true,
    },
    {
      type: "text",
      name: "data",
      label: "Data",
      required: true,
    },
    {
      type: "textarea",
      name: "observacoes",
      label: "Observações",
      required: false,
    },
  ],
};

const DynamicForm = ({ type, onSubmit, onPreviewUpdate }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const fields = formConfig[type] || [];

  const formatCurrency = (value) => {
    if (!value) return "";
    const number = value.replace(/\D/g, "");
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number / 100);
  };

  const parseCurrency = (value) => {
    if (!value) return "";
    return value.replace(/\D/g, "");
  };

  useEffect(() => {
    const subscription = watch((value) => {
      const formattedData = {};
      Object.entries(value).forEach(([key, val]) => {
        if (key === "valor") {
          formattedData[key] = formatCurrency(val);
        } else {
          formattedData[key] = val;
        }
      });
      onPreviewUpdate(formattedData);
    });
    return () => subscription.unsubscribe();
  }, [watch, onPreviewUpdate]);

  const handleFormSubmit = (data) => {
    const formattedData = {};
    Object.entries(data).forEach(([key, val]) => {
      if (key === "valor") {
        formattedData[key] = formatCurrency(val);
      } else {
        formattedData[key] = val;
      }
    });
    onSubmit(formattedData);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      {fields.map((field, index) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={styles.field}
        >
          <label htmlFor={field.name} className={styles.label}>
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              {...register(field.name, {
                required: field.required && "Este campo é obrigatório",
              })}
              className={styles.textarea}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              {...register(field.name, {
                required: field.required && "Este campo é obrigatório",
                onChange: (e) => {
                  if (field.name === "valor") {
                    e.target.value = formatCurrency(e.target.value);
                  }
                },
              })}
              className={styles.input}
            />
          )}
          {errors[field.name] && (
            <span className={styles.error}>{errors[field.name].message}</span>
          )}
        </motion.div>
      ))}
      <motion.button
        type="submit"
        className={styles.submitButton}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Gerar Recibo
      </motion.button>
    </form>
  );
};

export default DynamicForm;
