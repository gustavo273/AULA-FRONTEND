import * as Yup from 'yup';

const PassagemValidator = Yup.object().shape({
  voo: Yup.string()
    .min(3, 'O mínimo de caracteres é 3!')
    .max(10, 'O máximo de caracteres é 10!')
    .required('Campo obrigatório'),
  passageiro: Yup.string()
    .min(3, 'O mínimo de caracteres é 3!')
    .max(50, 'O máximo de caracteres é 50!')
    .required('Campo obrigatório'),
  assento: Yup.string()
    .min(1, 'O mínimo de caracteres é 1!')
    .max(5, 'O máximo de caracteres é 5!')
    .required('Campo obrigatório'),
  preco: Yup.number()
    .positive('O preço deve ser um valor positivo!')
    .required('Campo obrigatório'),
});

export default PassagemValidator;