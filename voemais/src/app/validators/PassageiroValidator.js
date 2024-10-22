import * as Yup from 'yup';

const PassageiroValidator = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'O mínimo de caracteres é 3!')
    .max(50, 'O máximo de caracteres é 50!')
    .required('Campo obrigatório'),
  documento: Yup.string()
    .min(5, 'O mínimo de caracteres é 5!')
    .max(20, 'O máximo de caracteres é 20!')
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('Formato de email inválido')
    .required('Campo obrigatório'),
  telefone: Yup.string()
    .matches(/^[0-9-]+$/, 'O telefone deve conter apenas números e traços (-)')
    .min(10, 'O mínimo de caracteres é 10!')
    .max(15, 'O máximo de caracteres é 15!')
    .required('Campo obrigatório'),
  nascimento: Yup.date()
    .max(new Date(), 'A data de nascimento não pode ser no futuro')
    .required('Campo obrigatório'),
});

export default PassageiroValidator;