// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',  // Asegúrate de que la URL base esté configurada correctamente
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token JWT en cada solicitud
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');  // Asegúrate de que el token JWT esté en el localStorage
//   console.log('Token in Axios Request:', token); // Verifica si el token está disponible
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;  // Añade el token JWT al header Authorization
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default instance;