import { FormErrorMessage, FormLabel, Input, Select } from '@chakra-ui/react'
import { UseFormRegister, UseFormWatch } from 'react-hook-form'
import { ICity, IFormInput } from './FormContainer'
import ufs from '../../../assets/ufs.json';

interface typeProps {
  register: UseFormRegister<IFormInput>
  errors: any
  cities: ICity[],
  watch: UseFormWatch<IFormInput>
}

const LocalityForm = ({ register, errors, cities, watch }: typeProps) => {
  return (
    <>
      <FormLabel>
        Nome Da Fazenda
        <Input
          id='farmNameInput'
          type='farmName'
          maxLength={100}
          {...register('farmName', { required: 'Digite a senha' })}
        />
        {errors?.farmName?.message && <FormErrorMessage>{errors.farmName.message}</FormErrorMessage>}
      </FormLabel>

      <FormLabel>
        UF
        <Select
          id='ufInput'
          {...register('uf', { required: 'Selecione a UF' })}
          value={watch('uf')}
        >
          {ufs.map(uf => (
            <option key={uf.sigla} value={uf.sigla}>{uf.sigla}</option>
          ))}
        </Select>
      </FormLabel>

      <FormLabel>
        Cidade
        <Select
          id='cityInput'
          {...register('city', { required: 'Selecione a Cidade' })}
          placeholder='Selecione a Cidade'
          value={watch('city')}
        >
          {cities.map(cityItem => (
            <option key={cityItem.id} value={cityItem.id}>{cityItem.nome}</option>
          ))}
        </Select>
        {errors?.city?.message && <FormErrorMessage>{errors.city.message}</FormErrorMessage>}
      </FormLabel>
    </>
  )
}

export default LocalityForm;