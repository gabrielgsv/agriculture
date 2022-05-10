import { Checkbox, CheckboxGroup, FormLabel, Stack } from "@chakra-ui/react"
import { UseFormSetValue } from "react-hook-form"
import { IFormInput } from "./FormContainer"

interface typeProps {
  setValue: UseFormSetValue<IFormInput>
}

const CropsPlantedForm = ({ setValue }: typeProps) => {
  return (
    <>
      <FormLabel>
        Selecione as Culturas Plantadas
        <CheckboxGroup
          colorScheme='teal'
          size='lg'
          onChange={value => setValue('cropsPlanted', value)}
        >
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            <Checkbox value='soybean'>Soja</Checkbox>
            <Checkbox value='corn'>Milho</Checkbox>
            <Checkbox value='cotton'>Algodão</Checkbox>
            <Checkbox value='coffee'>Café</Checkbox>
            <Checkbox value='sugarCane'>Cana de Açucar</Checkbox>
          </Stack>
        </CheckboxGroup>
      </FormLabel>
    </>
  )
}

export default CropsPlantedForm;