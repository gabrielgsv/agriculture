import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import theme from './theme';
import { Provider } from 'react-redux';
import store from './store';
import translation from './translation';

function App() {

  useEffect(() => {
    translation()
  }, [])

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;