import { FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import Cleave from 'cleave.js/react'
import { Control, Controller, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { IFormInput } from './FormContainer'

interface typeProps {
  control: Control<IFormInput>
  setValue: UseFormSetValue<IFormInput>
  register: UseFormRegister<IFormInput>
  errors: any
}

const PersonalForm = ({ control, setValue, register, errors }: typeProps) => {
  return (
    <>
      <FormLabel>
        CPF
        <Controller
          name='cpf'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id='cpfInput'
              type='text'
              as={Cleave}
              onChange={e => {
                setValue('cnpj', '')
                setValue('cpf', e.target.value)
              }}
              options={{
                delimiters: ['.', '.', '-'],
                blocks: [3, 3, 3, 2],
                numericOnly: true,
                delimiterLazyShow: true,
              }}
            />
          )}
        />
      </FormLabel>

      <FormLabel>
        CNPJ
        <Controller
          name='cnpj'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id='cnpjInput'
              type='text'
              as={Cleave}
              onChange={(e) => {
                setValue('cpf', '')
                setValue('cnpj', e.target.value)
              }}
              options={{
                delimiters: ['.', '.', '/', '-'],
                blocks: [2, 3, 3, 4, 2],
                numericOnly: true,
                delimiterLazyShow: true,
              }}
            />
          )}
        />
      </FormLabel>

      <FormLabel>
        Nome do Produtor
        <Input
          id='nameInput'
          type='name'
          maxLength={100}
          {...register('name', { required: 'Digite o nome' })}
        />
        {errors?.name?.message && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
      </FormLabel>
    </>
  )
}

export default PersonalForm;