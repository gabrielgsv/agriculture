import { Button, Flex, FormControl, Grid, ModalFooter, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import { createProducer, getCities, validateCpfCnpj } from "./services";
import PersonalForm from "./PersonalForm";
import LocalityForm from "./LocalityForm";
import PropertyForm from "./PropertyForm";
import CropsPlantedForm from "./CropsPlantedForm";

export interface ICity {
  id: string,
  nome: string
}

export interface IFormInput {
  cpf: string;
  cnpj: string
  name: string;
  farmName: string;
  uf: string;
  city: ICity;
  totalHectares: string;
  arableHectares: string;
  vegetationArable: string;
  cropsPlanted: any[];
}

interface typeProps {
  onClose: () => void,
}

const FormContainer = ({ onClose }: typeProps) => {
  const [cities, setCities] = useState<ICity[]>([{ id: '', nome: '' }]);
  const { register, setValue, watch, handleSubmit, control, formState: { errors, isValid, isSubmitted } } = useForm<IFormInput>({
    defaultValues: {
      cpf: '',
      cnpj: '',
      name: '',
      farmName: '',
      totalHectares: '',
      arableHectares: '',
      vegetationArable: '',
      cropsPlanted: [],
    }
  })

  const toast = useToast();

  useEffect(() => {
    if (watch('uf')) {
      getCities(watch('uf'), setCities)
    }
  }, [watch('uf')])

  const onSubmit = (data: IFormInput) => {
    validateCpfCnpj(watch('cpf'), watch('cnpj'), toast) &&
      createProducer(data, toast, onClose);
  };

  console.log('form', watch());

  return (
    <>
      <form
        onSubmit={
          handleSubmit(onSubmit)
        }
      >
        <FormControl isInvalid={isSubmitted && !isValid}>
          <Grid templateColumns='repeat(2, 1fr)' columnGap={2} rowGap={5}>
            <PersonalForm
              setValue={setValue}
              register={register}
              errors={errors}
              control={control}
            />

            <LocalityForm
              register={register}
              errors={errors}
              cities={cities}
            />

            <PropertyForm
              register={register}
              setValue={setValue}
              errors={errors}
              control={control}
            />
          </Grid>

          <Flex justify='center' marginTop={5}>
            <CropsPlantedForm
              setValue={setValue}
            />
          </Flex>

          <ModalFooter marginTop={50}>
            <Button type='submit' mr={3} colorScheme='teal'>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </FormControl>
      </form>
    </>
  );
};

export default FormContainer;