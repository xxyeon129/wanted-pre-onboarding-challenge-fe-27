import axios, { AxiosInstance } from 'axios';
import { USER_TOKEN_KEY } from '../consts/user.const';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const requestInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(USER_TOKEN_KEY);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      console.log('interceptor error', error);
      Promise.reject(error);
    }
  );
};

const createInstance = () => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 2000,
  });

  requestInterceptors(instance);

  return instance;
};

export const apiInstance = createInstance();
