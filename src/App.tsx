import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;