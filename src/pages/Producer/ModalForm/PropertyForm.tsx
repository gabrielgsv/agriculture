import { FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { Control, Controller, UseFormRegister, UseFormSetValue } from "react-hook-form"
import { IFormInput } from "./FormContainer"
import Cleave from "cleave.js/react";

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
          name="totalHectares"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id='totalHectaresInput'
              type='text'
              as={Cleave}
              {...register('totalHectares', { required: 'Digite o total de hectares' })}
              onChange={e => setValue('totalHectares', e.target.value)}
              options={{
                delimiters: [],
                blocks: [10],
                numericOnly: true,
                delimiterLazyShow: true,
              }}
            />
          )}
        />
        {errors?.totalHectares?.message && <FormErrorMessage>{errors.totalHectares.message}</FormErrorMessage>}
      </FormLabel>

      <FormLabel>
        Área agricultável em hectares
        <Controller
          name="arableHectares"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id='arableHectaresInput'
              type='text'
              as={Cleave}
              {...register('arableHectares', { required: 'Digite a área agricultável' })}
              onChange={e => setValue('arableHectares', e.target.value)}
              options={{
                delimiters: [],
                blocks: [10],
                numericOnly: true,
                delimiterLazyShow: true,
              }}
            />
          )}
        />
        {errors?.arableHectares?.message && <FormErrorMessage>{errors.arableHectares.message}</FormErrorMessage>}
      </FormLabel>

      <FormLabel>
        Área de vegetação em hectares
        <Controller
          name="vegetationArable"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id='vegetationArableInput'
              type='text'
              as={Cleave}
              {...register('vegetationArable', { required: 'Digite a área de vegetação' })}
              onChange={e => setValue('vegetationArable', e.target.value)}
              options={{
                delimiters: [],
                blocks: [10],
                numericOnly: true,
                delimiterLazyShow: true,
              }}
            />
          )}
        />
        {errors?.vegetationArable?.message && <FormErrorMessage>{errors.vegetationArable.message}</FormErrorMessage>}
      </FormLabel>


    </>
  )
}

export default PropertyForm;