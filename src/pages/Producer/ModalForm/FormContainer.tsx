/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Flex, FormControl, Grid, ModalFooter, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { useEffect, useState } from 'react';
import { createProducer, getCities, updateProducer, validateCpfCnpj } from './services';
import PersonalForm from './PersonalForm';
import LocalityForm from './LocalityForm';
import PropertyForm from './PropertyForm';
import CropsPlantedForm from './CropsPlantedForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import DeleteAlert from './DeleteAlert';

export interface ICity {
  id: string,
  nome: string
}
export interface IFormInput {
  id?: string;
  cpf: number | null;
  cnpj: number | null;
  name: string;
  farm_name: string;
  uf: number;
  city: number;
  total_hectares: number | null;
  arable_hectares: number| null;
  vegetation_arable: number | null;
  plantation_crops: any[];
}

interface typeProps {
  onClose: () => void,
}

const FormContainer = ({ onClose }: typeProps) => {
  const [cities, setCities] = useState<ICity[]>([{ id: '', nome: '' }]);
  const { register, setValue, watch, reset, handleSubmit, control, formState: { errors, isValid, isSubmitted } } = useForm<IFormInput>({
    defaultValues: {
      cpf: null,
      cnpj: null,
      name: '',
      farm_name: '',
      total_hectares: null,
      arable_hectares: null,
      vegetation_arable: null,
      plantation_crops: [],
    },
  })

  const dispatch = useDispatch();

  const editProducer: any = useSelector(
    (state: any) => {
      return state?.Producer?.editProducer && state?.Producer?.editProducer[0];
    }
  )

  useEffect(() => {
    if (editProducer) {
      reset(editProducer)
      setValue('plantation_crops', editProducer.plantation_crops)
      setValue('city', editProducer.city)
      setValue('uf', editProducer.uf)
    }
  }, [])

  const toast = useToast();

  useEffect(() => {
    if (watch('uf')) {
      getCities(watch('uf'), setCities)
    }
  }, [watch('uf')])

  const onSubmit = (data: IFormInput) => {
    console.log("data", data);

    // if (data.id) {
    //   validateCpfCnpj(watch('cpf'), watch('cnpj'), toast) &&
    //     updateProducer(data, toast, onClose, dispatch);
    // } else {
    //   validateCpfCnpj(watch('cpf'), watch('cnpj'), toast) &&
    //     createProducer(data, toast, onClose, dispatch);
    // }
  };

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
              watch={watch}
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
              register={register}
              plantation_crops={watch('plantation_crops')}
            />
          </Flex>

          <ModalFooter marginTop={50}>
            {watch('id') &&
              (
                <DeleteAlert
                  id={watch('id')}
                  toast={toast}
                  onClose={onClose}
                />
              )}
            <Button type='submit' mr={3} colorScheme='teal' id='saveButton'>
              Salvar
            </Button>
            <Button id='cancelButton' onClick={() => {
              onClose()
            }}>
              Cancelar
            </Button>
          </ModalFooter>
        </FormControl>
      </form>
    </>
  );
};

export default FormContainer;