import axios from "axios";

import { Auth } from "../config/storage";

const api = axios.create({
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem(Auth || "")

  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export default api;
