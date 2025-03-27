import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import store from "./store";
import theme from "./theme";
import translation from "./translation";

function App() {
  useEffect(() => {
    translation();
  }, []);

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
