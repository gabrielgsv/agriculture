import { Checkbox, CheckboxGroup, FormLabel, Grid, Stack } from '@chakra-ui/react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { IFormInput } from './FormContainer'
import { useEffect, useState } from 'react'
import { getPlantedCrops } from './services'

interface typeProps {
  setValue: UseFormSetValue<IFormInput>
  register: UseFormRegister<IFormInput>
  plantation_crops: any[]
}

interface PlantedCrops {
  id: string,
  name: string
}

const CropsPlantedForm = ({ setValue, register, plantation_crops }: typeProps) => {
  const [plantedCrops, setPlantedCrops] = useState<PlantedCrops[] | []>([]);

  useEffect(() => {
    getPlantedCrops(setPlantedCrops);
  }, [plantation_crops]);

  return (
    <FormLabel>
      Selecione as Culturas Plantadas:
      <CheckboxGroup
        colorScheme='teal'
        size='lg'
        value={plantation_crops}
        {...register('plantation_crops')}
        onChange={value => setValue('plantation_crops', value)}
      >
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
          <Grid templateColumns='repeat(2, 1fr)' columnGap={8} rowGap={3}>
            {plantedCrops.map((plantedCrop: PlantedCrops) => (
              <>
                <Checkbox key={plantedCrop.id} value={plantedCrop.id} id={`${plantedCrop.id}CheckBox`}>{plantedCrop.name}</Checkbox>
              </>
            ))}
          </Grid>
        </Stack>
      </CheckboxGroup>
    </FormLabel>
  )
}

export default CropsPlantedForm;