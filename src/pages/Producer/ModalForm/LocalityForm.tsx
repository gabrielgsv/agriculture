import { FormErrorMessage, FormLabel, Input, Select } from "@chakra-ui/react"
import { UseFormRegister } from "react-hook-form"
import { ICity, IFormInput } from "./FormContainer"
import ufs from '../../../assets/ufs.json';

interface typeProps {
  register: UseFormRegister<IFormInput>
  errors: any
  cities: ICity[]
}

const LocalityForm = ({ register, errors, cities }: typeProps) => {
  return (
    <>
      <FormLabel>
        Nome Da Fazenda
        <Input
          id='farmName'
          type='farmName'
          maxLength={100}
          {...register('farmName', { required: 'Digite a senha' })}
        />
        {errors?.farmName?.message && <FormErrorMessage>{errors.farmName.message}</FormErrorMessage>}
      </FormLabel>

      <FormLabel>
        UF
        <Select
          {...register('uf', { required: 'Selecione a UF' })}
        >
          {ufs.map(uf => (
            <option key={uf.id} value={uf.id}>{uf.sigla}</option>
          ))}
        </Select>
      </FormLabel>

      <FormLabel>
        Cidade
        <Select
          {...register('city', { required: 'Selecione a Cidade' })}
          placeholder='Selecione a Cidade'
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