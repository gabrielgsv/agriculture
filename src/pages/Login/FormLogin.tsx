import React from 'react';
import { Button, FormLabel, Input, FormErrorMessage, FormControl } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { login } from './service';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../components/Layout/Container';
import { marginFormElements } from './style';

interface IFormInput {
  email: string;
  password: string;
}

const FormLogin = () => {
  const onSubmit = (data: IFormInput) => {
    login(data.email, data.password, navigate)
  };

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isValid, isSubmitted } } = useForm<IFormInput>()

  return (
    <>
      <form
        onSubmit={
          handleSubmit(onSubmit)
        }
      >
        <FormControl isInvalid={isSubmitted && !isValid}>
          <Container>
            <FormLabel htmlFor='email' className={marginFormElements}>
              Email
              <Input
                id='email'
                type='email'
                {...register('email', {
                  required: 'Digite o email',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Email inválido'
                  }
                })}
              />
              {errors?.email?.message && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
            </FormLabel>

            <FormLabel htmlFor='password' className={marginFormElements}>
              Senha
              <Input
                id='password'
                type='password'
                {...register('password', { required: 'Digite a senha' })}
              />
              {errors?.password?.message && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
            </FormLabel>

            <Button id='submit' type='submit' colorScheme='teal' className={marginFormElements}>
              Entrar
            </Button>
          </Container>
        </FormControl>
      </form>
    </>
  );
};

export default FormLogin;



