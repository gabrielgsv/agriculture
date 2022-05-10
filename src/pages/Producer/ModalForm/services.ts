import axios from "axios";
import api from "../../../services/api";
import { IFormInput } from './FormContainer'
import { cpf as cpfValidator, cnpj as cnpjValidator } from 'cpf-cnpj-validator'

interface IBGECityResponse {
  id: string,
  nome: string;
}

export function getCities(uf: string, setCities: (cities: any) => void) {
  axios
    .get<IBGECityResponse[]>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    )
    .then((res) => {
      const cities = res.data;

      setCities(cities);
    });
}

export function createProducer(data: IFormInput, toast: any, onClose: () => void) {
  api.post('/producer', data)
    .then(data => {
      console.log('data', data)
      toast({
        title: 'Cadastro realizado com sucesso!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      onClose()
    })
    .catch(err => {
      console.error('err', err)
      toast({
        title: 'Ocorreu um erro ao realizar o cadastro!',
        description: err.response.data?.error,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    })
}

export function validateCpfCnpj(cpf: string, cnpj: string, toast: any) {
  if (cpf) {
    let valid = cpfValidator.isValid(cpf)
    valid === false && toast({
      title: 'CPF inválido!',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
    return valid
  }
  else if (cnpj) {
    let valid = cnpjValidator.isValid(cnpj)
    valid === false && toast({
      title: 'CNPJ inválido!',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
    return valid
  } else {
    toast({
      title: 'Digite o CPF ou CNPJ!',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
    return false
  }
}