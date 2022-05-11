import { Checkbox, CheckboxGroup, FormLabel, Grid, Stack } from "@chakra-ui/react"
import { UseFormRegister, UseFormSetValue } from "react-hook-form"
import { IFormInput } from "./FormContainer"

interface typeProps {
  setValue: UseFormSetValue<IFormInput>
  register: UseFormRegister<IFormInput>
  cropsPlanted: any[]
}

const CropsPlantedForm = ({ setValue, register, cropsPlanted }: typeProps) => {
  return (
    <FormLabel>
      Selecione as Culturas Plantadas:
      <CheckboxGroup
        colorScheme='teal'
        size='lg'
        value={cropsPlanted}
        {...register('cropsPlanted')}
        onChange={value => setValue('cropsPlanted', value)}
      >
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
          <Grid templateColumns='repeat(2, 1fr)' columnGap={8} rowGap={3}>
            <Checkbox value='soybean' id='soybeanCheckBox'>Soja</Checkbox>
            <Checkbox value='corn' id='cornCheckBox'>Milho</Checkbox>
            <Checkbox value='cotton' id='cottonCheckBox'>Algodão</Checkbox>
            <Checkbox value='coffee' id='coffeeCheckBox'>Café</Checkbox>
            <Checkbox value='sugarCane' id='sugarCaneCheckBox'>Cana de Açucar</Checkbox>
          </Grid>
        </Stack>
      </CheckboxGroup>
    </FormLabel>
  )
}

export default CropsPlantedForm;