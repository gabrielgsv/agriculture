import React, { useState } from "react";
import {
  Button,
  FormLabel,
  Input,
  FormErrorMessage,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { login } from "./service";
import { useNavigate } from "react-router-dom";

import { Container } from "../../components/Layout/Container";
import { marginFormElements } from "./style";

interface IFormInput {
  email: string;
  password: string;
}

const FormLogin = () => {
  const [load, setLoad] = useState(false);
  const toast = useToast();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    setLoad(true);
    login(data.email, data.password, navigate, toast, () => setLoad(false));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Container>
            <FormLabel htmlFor="email" className={marginFormElements}>
              Email
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Digite o email",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Email inválido",
                  },
                })}
              />
              {errors?.email?.message && (
                <FormErrorMessage>{errors.email.message}</FormErrorMessage>
              )}
            </FormLabel>

            <FormLabel htmlFor="password" className={marginFormElements}>
              Senha
              <Input
                id="password"
                type="password"
                {...register("password", { required: "Digite a senha" })}
              />
              {errors?.password?.message && (
                <FormErrorMessage>{errors.password.message}</FormErrorMessage>
              )}
            </FormLabel>

            <Button
              id="submit"
              type="submit"
              colorScheme="teal"
              className={marginFormElements}
              isLoading={load}
            >
              Entrar
            </Button>
          </Container>
        </FormControl>
      </form>
    </>
  );
};

export default FormLogin;
