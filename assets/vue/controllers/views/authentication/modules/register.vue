<template>
    <form @submit.prevent="registrarUsuario" class="space-y-6">
        <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Correo</label>
            <input v-model="email" type="email" placeholder="Ingresa tu correo"
                class="w-full border border-gray-300 p-3 rounded-none focus:ring-1 focus:ring-black focus:border-black">
        </div>
        <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
            <input v-model="password" type="password" placeholder="Ingresa tu contraseña"
                class="w-full border border-gray-300 p-3 rounded-none focus:ring-1 focus:ring-black focus:border-black">
        </div>
        <div>
            <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
            <input v-model="nombre" type="text" placeholder="Ingresa tu nombre"
                class="w-full border border-gray-300 p-3 rounded-none focus:ring-1 focus:ring-black focus:border-black">
        </div>
        <button type="submit" class="w-full bg-black text-white p-3 hover:bg-gray-800">
            Crear cuenta
        </button>
        
        <div class="mt-6 text-center space-y-2">
            <a @click.prevent="emit('toggle')" class="text-blue-600 hover:underline cursor-pointer">
                ¿Ya tienes cuenta? Iniciar sesión
            </a>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useUsuarioStore } from '../../../store/usuarioStorage.js';
import axios from 'axios';

// Define el evento de emisión 'toggle'
const emit = defineEmits(['toggle']);

// Accede al store de usuario
const usuarioStore = useUsuarioStore();

// Variables de estado para los datos del formulario
const email = ref('');
const password = ref('');
const nombre = ref('');

// Fecha de creación y otros valores predeterminados
const fechaCreacion = new Date().toISOString(); // Formato ISO 8601
const roles = ["ROLE_ADMIN"]; // Puedes ajustar el rol según tu lógica
const eliminado = false;

// Función para registrar al usuario
const registrarUsuario = async () => {
    try {
        const datosUsuario = {
            email: email.value,
            roles,
            password: password.value,
            nombre: nombre.value,
            fecha_creacion: fechaCreacion,
            eliminado
        };

        // Configuración del encabezado Content-Type
        const config = {
            headers: {
                'Content-Type': 'application/ld+json'
            }
        };

        // Llama a la acción registrarUsuario en el store con los datos y encabezado
        await usuarioStore.registrarUsuario(datosUsuario, config);

        // Mensaje de éxito
        alert('Usuario registrado exitosamente');

        // Emite el evento 'toggle' para cambiar al formulario de inicio de sesión
        emit('toggle');
        
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        alert('Hubo un error al registrar el usuario');
    }
};
</script>

<style scoped>
.input-field {
    /* Estilos para el campo de entrada */
}
</style>

