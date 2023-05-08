import * as Yup from 'yup'
import { validateBr } from 'js-brasil';

export const schemaRulesForm = Yup.object().shape({
  fullNamePatient: Yup.string()
    .min(5, 'O nome deve ter no mínimo 5 caracteres')
    .required('O nome é obrigatório'),
  fullNameMother: Yup.string()
    .min(5, 'O nome deve ter no mínimo 5 caracteres')
    .required('É obrigatório informar o nome completo da mãe do paciente.'),
  dateOfBirth: Yup.date()
    .typeError('Data de nascimento inválida')
    .max(new Date(), 'A data de nascimento informada não pode ser no futuro.')
    .required('É obrigatório informar a data de nascimento do paciente.'),
  cpf: Yup.string()
    .required('É obrigatório informar o CPF do paciente.')
    .test('validateCns', 'Por favor, insira um CPF válido.', (cpf) => {
      if (!cpf) { return true; }
      return validateBr.cpf(cpf);
    }),
  cns: Yup.string()
    .required('É obrigatório informar o CNS do paciente.')
    .test('validateCns', 'Por favor, insira um CNS válido.', (cns) => {
      if (!cns) { return true; }
      return validateBr.cns(cns);
    }),
  addressCep: Yup.string()
    .required('É obrigatório informar o CEP do endereço do paciente.')
    .matches(/^\d{5}\-\d{3}$/, 'Por favor, insira um CEP válido.'),
  addressState: Yup.string().required('É obrigatório informar o estado do endereço do paciente.'),
  addressCity: Yup.string().required('É obrigatório informar a cidade do endereço do paciente.'),
  addressNeighborhood: Yup.string().required('É obrigatório informar o bairro do endereço do paciente.'),
  addressComplement: Yup.string().notRequired(),
  addressNumber: Yup.string().required('É obrigatório informar o número do endereço do paciente.'),
});


// https://github.com/mariohmol/js-brasil
