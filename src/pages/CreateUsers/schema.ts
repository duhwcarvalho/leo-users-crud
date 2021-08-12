import * as yup from 'yup';
import { validateCpf } from '../../utils';

export const userSchema = {
  nome: yup.string().required('Nome obrigatório'),
  cpf: yup.string().required('CPF obrigatório').test("validateCpf", "Informe um CPF válido", validateCpf),
  telefone: yup.string().required('Telefone obrigatório').min(11, 'Informe um telefone válido'),
  email: yup.string().email('Informe um email válido').required('Email obrigatório')
};