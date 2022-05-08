import { Auth } from "../../config/storage";
import api from "../../services/api";

export function login(email: string, password: string, navigate: Function) {
  return api.post('login', {
    email,
    password,
  })
    .then((res: any) => {
      sessionStorage.setItem(Auth, res.data.accessToken);
      navigate('/');
    })
    .catch((err: any) => {
      throw err;
    });
}

export function logout() {
  sessionStorage.removeItem(Auth);
}