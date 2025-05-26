import axios from 'axios';
import api from '../../../services/api';
import { IFormInput } from './FormContainer'
import { cpf as cpfValidator, cnpj as cnpjValidator } from 'cpf-cnpj-validator'
import { Dispatch } from 'react';
import { getProducers } from '../../../store/actions/producer';
import { UserId } from '../../../config/storage';

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

export function validateArea(
  total_hectares: number,
  arable_hectares: number,
  vegetation_arable: number,
  toast: any
) {
  const sum = Number(arable_hectares) + Number(vegetation_arable)
  if (sum <= Number(total_hectares)) {
    return true
  } else {
    toast({
      title: 'Área total não pode ser menor que a área arável!',
      description: 'A soma de área agrícultável e vegetação não deve ser maior que a área total da fazenda!',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
    return false
  }
}

export function createProducer(
  data: IFormInput,
  toast: any,
  onClose: () => void,
  dispatch: Dispatch<any>,
) {
  const isValid = validateArea(data.total_hectares as number, data.arable_hectares as number, data.vegetation_arable as number, toast)
  if (isValid) {
    const newData = { 
      ...data, 
      cpf: parseInt((data?.cpf as string).replace(/[^0-9]/g, '')), 
      cnpj: parseInt((data.cnpj as string).replace(/[^0-9]/g, '')),
      city: parseInt((data.city as string).replace(/[^0-9]/g, '')) 
    };
    api.post('/producers', newData)
      .then(data => {
        toast({
          title: 'Cadastro realizado com sucesso!',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        dispatch(getProducers())
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
}

export function updateProducer(
  data: IFormInput,
  toast: any,
  onClose: () => void,
  dispatch: Dispatch<any>,
) {
  const isValid = validateArea(data.total_hectares as number, data.arable_hectares as number, data.vegetation_arable as number, toast)
  if (isValid) {
    api.put(`/producers/${data.id}`, data)
      .then(data => {
        toast({
          title: 'Edição feita com sucesso!',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        dispatch(getProducers())
        onClose()
      })
      .catch(err => {
        console.error('err', err)
        toast({
          title: 'Ocorreu um erro ao realizar a edição!',
          description: err.response.data?.error,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      })
  }
}

export function deleteProducer(
  id: string,
  toast: any,
  onClose: () => void,
  dispatch: Dispatch<any>
) {
  api.delete(`/producers/${id}`)
    .then(data => {
      toast({
        title: 'Deletado com sucesso!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      dispatch(getProducers())
      onClose()
    })
    .catch(err => {
      console.error('err', err)
      toast({
        title: 'Ocorreu um erro ao deletar!',
        description: err.response.data?.error,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    })
}

export function getPlantedCrops(setPlantedCrops: (crops: any) => void) {
  const user_id = sessionStorage.getItem(UserId || "")

  return api.get(`/plantation-crops?user_id=${user_id}`)
    .then(data => {
      setPlantedCrops(data.data)
    })
    .catch(err => {
      console.error('err', err)
    })
}