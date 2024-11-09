import { defineStore } from 'pinia';
import axios from 'axios';

// URL base de la API
const API_URL = 'https://apiet.ksperu.com/api';

export const useUsuarioStore = defineStore('usuario', {
    state: () => ({
        usuario: null,
        token: null,
    }),

    getters: {
        isAuthenticated(state) {
            return !!state.token; // Devuelve true si el usuario está autenticado
        },
        getUsuario(state) {
            return state.usuario;
        }
    },

    actions: {
        // Acción para registrar un nuevo usuario
        async registrarUsuario(datosUsuario, config = {}) {
            try {
                const response = await axios.post(`${API_URL}/usuarios`, datosUsuario, config);
                
                // Almacena los datos del usuario después de la creación
                this.usuario = response.data;
                
                // Si la API devuelve un token, puedes almacenarlo aquí
                if (response.data.token) {
                    this.token = response.data.token;
                    localStorage.setItem('token', this.token);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
                }

                // Guardar en localStorage
                localStorage.setItem('usuario', JSON.stringify(this.usuario));
                
            } catch (error) {
                console.error('Error al registrar usuario:', error);
                throw error;
            }
        },

        // Inicia sesión y almacena el token y los datos del usuario
        async iniciarSesion(credentials) {
            try {
                const response = await axios.post(`${API_URL}/login`, credentials);
                this.token = response.data.token; // Supongamos que la API devuelve un token
                this.usuario = response.data.usuario; // Datos del usuario devueltos por la API

                // Guardar en localStorage
                localStorage.setItem('token', this.token);
                localStorage.setItem('usuario', JSON.stringify(this.usuario));
                
                // Configurar el token en los headers de axios para futuras solicitudes
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
            } catch (error) {
                console.error('Error al iniciar sesión:', error);
                throw error;
            }
        },

        // Cierra sesión y elimina los datos del usuario
        cerrarSesion() {
            this.token = null;
            this.usuario = null;
            localStorage.removeItem('token');
            localStorage.removeItem('usuario');

            // Eliminar el token de los headers de axios
            delete axios.defaults.headers.common['Authorization'];
        },

        // Cargar el usuario desde localStorage al inicializar
        cargarUsuario() {
            const token = localStorage.getItem('token');
            const usuario = localStorage.getItem('usuario');

            if (token && usuario) {
                this.token = token;
                this.usuario = JSON.parse(usuario);

                // Configurar el token en los headers de axios para futuras solicitudes
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
            }
        },

        // Actualizar los datos del usuario en el servidor
        async actualizarUsuario(data) {
            try {
                const response = await axios.patch(`${API_URL}/usuarios/${this.usuario.id}`, data);
                this.usuario = response.data;

                // Actualizar en localStorage
                localStorage.setItem('usuario', JSON.stringify(this.usuario));
            } catch (error) {
                console.error('Error al actualizar usuario:', error);
                throw error;
            }
        }
    }
});
