import React from 'react';
import { animation, marginFormElements, textStyled } from './style'
import { Button, FormLabel, Input, FormErrorMessage, FormControl } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import Lottie from 'react-lottie-player';

import animationPlant from '../../assets/animations/plant.json'
import { Container } from '../../components/Container';
import { login } from './service';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isValid, isSubmitted } } = useForm<IFormInput>()


  const onSubmit = (data: IFormInput) => {
    login(data.email, data.password, navigate)
  };

  return (
    <>
      <Container width='100%' height='100vh'>
        <Lottie
          animationData={animationPlant}
          play
          className={animation}
          loop={false}
        />

        <p className={textStyled}>Faça login para continuar</p>

        <Container width='400px' height='300px'>
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
                      required: "Digite o email",
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Email inválido"
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
        </Container>
      </Container>
    </>
  );
};

export default Login;