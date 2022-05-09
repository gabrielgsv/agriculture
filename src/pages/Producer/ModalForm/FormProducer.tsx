import { Button, Checkbox, CheckboxGroup, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Select, Stack } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import Cleave from 'cleave.js/react';

import ufs from '../../../assets/ufs.json';
import { useEffect, useState } from "react";
import { getCities } from "./services";

interface ICity {
  id: string,
  nome: string
}

interface IFormInput {
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

const FormProducer = () => {
  const [cities, setCities] = useState<ICity[]>(
    [
      { id: '', nome: '' }
    ]
  );
  const { register, setValue, watch, handleSubmit, control, formState: { errors, isValid, isSubmitted } } = useForm<IFormInput>()

  useEffect(() => {
    if (watch('uf')) {
      getCities(watch('uf'), setCities)
    }
  }, [watch('uf')])

  const onSubmit = (data: IFormInput) => {
    console.log(data);
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
          <Grid templateColumns='repeat(2, 1fr)' gap={2}>
            <FormLabel>
              CPF
              <Controller
                name="cpf"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id='cpfCnpj'
                    type='text'
                    as={Cleave}
                    onChange={() => setValue('cnpj', '')}
                    options={{
                      delimiters: ['.', '.', '-'],
                      blocks: [3, 3, 3, 2],
                      numericOnly: true,
                      delimiterLazyShow: true,
                    }}
                  />
                )}
              />
              {/* {errors?.email?.message && <FormErrorMessage>{errors.email.message}</FormErrorMessage>} */}
            </FormLabel>

            <FormLabel>
              CNPJ
              <Controller
                name="cnpj"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id='cnpj'
                    type='text'
                    as={Cleave}
                    onChange={() => setValue('cpf', '')}
                    options={{
                      delimiters: ['.', '.', '/', '-'],
                      blocks: [2, 3, 3, 4, 2],
                      numericOnly: true,
                      delimiterLazyShow: true,
                    }}
                  />
                )}
              />
              {/* {errors?.email?.message && <FormErrorMessage>{errors.email.message}</FormErrorMessage>} */}
            </FormLabel>

            <FormLabel>
              Nome do Produtor
              <Input
                id='name'
                type='name'
                maxLength={100}
                {...register('name', { required: 'Digite a senha' })}
              />
              {errors?.name?.message && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
            </FormLabel>

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
                {...register('uf', { required: 'Digite a UF' })}
              >
                {ufs.map(uf => (
                  <option key={uf.id} value={uf.id}>{uf.sigla}</option>
                ))}
              </Select>
            </FormLabel>

            <FormLabel>
              Cidade
              <Select
                {...register('city', { required: 'Digite a Cidade' })}
              >
                {cities.map(cityItem => (
                  <option key={cityItem.id} value={cityItem.id}>{cityItem.nome}</option>
                ))}
              </Select>
            </FormLabel>

            <FormLabel>
              Área total em hectares da fazenda
              <Controller
                name="totalHectares"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id='totalHectares'
                    type='text'
                    as={Cleave}
                    options={{
                      delimiters: [],
                      blocks: [10],
                      numericOnly: true,
                      delimiterLazyShow: true,
                    }}
                  />
                )}
              />
              {/* {errors?.email?.message && <FormErrorMessage>{errors.email.message}</FormErrorMessage>} */}
            </FormLabel>

            <FormLabel>
              Área agricultável em hectares
              <Controller
                name="arableHectares"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id='arableHectares'
                    type='text'
                    as={Cleave}
                    options={{
                      delimiters: [],
                      blocks: [10],
                      numericOnly: true,
                      delimiterLazyShow: true,
                    }}
                  />
                )}
              />
              {/* {errors?.email?.message && <FormErrorMessage>{errors.email.message}</FormErrorMessage>} */}
            </FormLabel>

            <FormLabel>
              Área de vegetação em hectares
              <Controller
                name="vegetationArable"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id='vegetationArable'
                    type='text'
                    as={Cleave}
                    options={{
                      delimiters: [],
                      blocks: [10],
                      numericOnly: true,
                      delimiterLazyShow: true,
                    }}
                  />
                )}
              />
              {/* {errors?.email?.message && <FormErrorMessage>{errors.email.message}</FormErrorMessage>} */}
            </FormLabel>

          </Grid>
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

          <Button id='submit' type='submit' colorScheme='teal' margin={20}>
            Entrar
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default FormProducer;
