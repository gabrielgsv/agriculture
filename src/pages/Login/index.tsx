import React, { useEffect } from 'react';
import { animation, textStyled } from './style'
import Lottie from 'react-lottie-player';

import animationPlant from '../../assets/animations/plant.json'
import { Container } from '../../components/Container';
import FormLogin from './FormLogin';
import { logout } from './service';

const Login = () => {
  useEffect(() => {
    logout();
  }, [])

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
          <FormLogin />
        </Container>
      </Container>
    </>
  );
};

export default Login;