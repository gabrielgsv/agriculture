import { FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { Control, Controller, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { IFormInput } from './FormContainer'
import Cleave from 'cleave.js/react';

interface typeProps {
  control: Control<IFormInput>
  setValue: UseFormSetValue<IFormInput>
  register: UseFormRegister<IFormInput>
  errors: any
}

const PropertyForm = ({ control, setValue, register, errors }: typeProps) => {
  return (
    <>
      <FormLabel>
        Área em hectares da fazenda
        <Controller
          name='total_hectares'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id='total_hectaresInput'
              type='text'
              as={Cleave}
              {...register('total_hectares', { required: 'Digite o total de hectares' })}
              onChange={e => setValue('total_hectares', e.target.value)}
              options={{
                delimiters: [],
                blocks: [10],
                numericOnly: true,
                delimiterLazyShow: true,
              }}
            />
          )}
        />
        {errors?.total_hectares?.message && <FormErrorMessage>{errors.total_hectares.message}</FormErrorMessage>}
      </FormLabel>

      <FormLabel>
        Área agricultável em hectares
        <Controller
          name='arable_hectares'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id='arable_hectaresInput'
              type='text'
              as={Cleave}
              {...register('arable_hectares', { required: 'Digite a área agricultável' })}
              onChange={e => setValue('arable_hectares', e.target.value)}
              options={{
                delimiters: [],
                blocks: [10],
                numericOnly: true,
                delimiterLazyShow: true,
              }}
            />
          )}
        />
        {errors?.arable_hectares?.message && <FormErrorMessage>{errors.arable_hectares.message}</FormErrorMessage>}
      </FormLabel>

      <FormLabel>
        Área de vegetação em hectares
        <Controller
          name='vegetation_arable'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id='vegetation_arableInput'
              type='text'
              as={Cleave}
              {...register('vegetation_arable', { required: 'Digite a área de vegetação' })}
              onChange={e => setValue('vegetation_arable', e.target.value)}
              options={{
                delimiters: [],
                blocks: [10],
                numericOnly: true,
                delimiterLazyShow: true,
              }}
            />
          )}
        />
        {errors?.vegetation_arable?.message && <FormErrorMessage>{errors.vegetation_arable.message}</FormErrorMessage>}
      </FormLabel>


    </>
  )
}

export default PropertyForm;