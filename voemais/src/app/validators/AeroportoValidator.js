import * as Yup from 'yup';

const AeroportoValidator = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'O mínimo de caracteres é 3!')
    .max(50, 'O máximo de caracteres é 50!')
    .required('Campo obrigatório'),
  sigla: Yup.string()
    .required('Campo obrigatório'),
  uf: Yup.string()
    .length(2, 'O estado deve ter exatamente 2 caracteres!')
    .required('Campo obrigatório'),
  cidade: Yup.string()
    .min(2, 'O mínimo de caracteres é 3!')
    .max(50, 'O máximo de caracteres é 50!')
    .required('Campo obrigatório'),
  pais: Yup.string()
    .min(2, 'O mínimo de caracteres é 3!')
    .max(50, 'O máximo de caracteres é 50!')
    .required('Campo obrigatório'),
});

export default AeroportoValidator;