import { Checkbox, CheckboxGroup, FormLabel, Grid, Stack } from "@chakra-ui/react"
import { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form"
import { IFormInput } from "./FormContainer"

interface typeProps {
  setValue: UseFormSetValue<IFormInput>
  register: UseFormRegister<IFormInput>
  watch: UseFormWatch<IFormInput>
}

const CropsPlantedForm = ({ setValue, register, watch }: typeProps) => {
  return (
    <FormLabel>
      Selecione as Culturas Plantadas:
      <CheckboxGroup
        colorScheme='teal'
        size='lg'
        value={watch('cropsPlanted')}
        {...register('cropsPlanted')}
        onChange={value => setValue('cropsPlanted', value)}
      >
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
          <Grid templateColumns='repeat(2, 1fr)' columnGap={8} rowGap={3}>
            <Checkbox value='soybean'>Soja</Checkbox>
            <Checkbox value='corn'>Milho</Checkbox>
            <Checkbox value='cotton'>Algodão</Checkbox>
            <Checkbox value='coffee'>Café</Checkbox>
            <Checkbox value='sugarCane'>Cana de Açucar</Checkbox>
          </Grid>
        </Stack>
      </CheckboxGroup>
    </FormLabel>
  )
}

export default CropsPlantedForm;