import * as Yup from 'yup';

const VooValidator = Yup.object().shape({
  internacional: Yup.string()
    .oneOf(['Sim', 'Nao', 'nao', 'sim', 'Não'], 'Selecione Sim ou Não')
    .required('Campo obrigatório'),
  identificador: Yup.string()
    .min(3, 'O mínimo de caracteres é 3!')
    .max(10, 'O máximo de caracteres é 10!')
    .required('Campo obrigatório'),
  checkin: Yup.date()
    .required('Campo obrigatório')
    .min(new Date(), 'A data de check-in não pode ser no passado'),
  embarque: Yup.date()
    .required('Campo obrigatório')
    .min(Yup.ref('checkin'), 'A data de embarque deve ser após a data de check-in'),
  origem: Yup.string()
    .required('Campo obrigatório'),
  destino: Yup.string()
    .required('Campo obrigatório'),
  empresa: Yup.string()
    .required('Campo obrigatório'),
  preco: Yup.number()
    .typeError('O preço deve ser um número!')
    .positive('O preço deve ser um valor positivo!')
    .required('Campo obrigatório'),
});

export default VooValidator;