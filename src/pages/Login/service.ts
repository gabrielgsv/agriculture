import { Auth } from "../../config/storage";
import api from "../../services/api";

export function login(
  email: string,
  password: string,
  navigate: Function,
  toast: any,
  callBack: Function
) {
  return api
    .post("login", {
      email,
      password,
    })
    .then((res: any) => {
      sessionStorage.setItem(Auth, res.data.access_token);
      callBack();
      navigate("/");
    })
    .catch((err: any) => {
      callBack();
      toast({
        title: "Ocorreu um erro ao realizar o login!",
        description: "Por favor verifique seu e-mail e senha.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.error(err);
    });
}

export function logout() {
  sessionStorage.removeItem(Auth);
}
