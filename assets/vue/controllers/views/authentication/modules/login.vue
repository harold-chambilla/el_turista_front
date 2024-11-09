<template>
    <form @submit.prevent="handleLogin" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Correo</label>
        <input v-model="email" type="email" id="email" placeholder="Ingresa tu correo"
               class="w-full border border-gray-300 p-3 rounded-none focus:ring-1 focus:ring-black focus:border-black">
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
        <input v-model="password" type="password" id="password" placeholder="Ingresa tu contraseña"
               class="w-full border border-gray-300 p-3 rounded-none focus:ring-1 focus:ring-black focus:border-black">
      </div>
      <button type="submit" class="w-full bg-black text-white p-3 hover:bg-gray-800">
        Iniciar sesión
      </button>
  
      <!-- Mensaje de error -->
      <div v-if="auth.message" class="text-red-500 text-sm text-center mt-4">{{ auth.message }}</div>
  
      <div class="mt-6 text-center space-y-2">
        <a @click.prevent="$emit('toggle')" class="text-blue-600 hover:underline cursor-pointer">Crear nueva cuenta</a><br>
      </div>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { authStore } from '../../../store/auth.js';
  
  // Variables para los datos de inicio de sesión
  const email = ref('');
  const password = ref('');
  const auth = authStore();
  
  // Función para manejar el envío del formulario
  async function handleLogin() {
    try {
      await auth.login(email.value, password.value);
      // Aquí podrías redirigir o realizar alguna acción adicional tras el login exitoso
      console.log('Inicio de sesión exitoso');
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  }
  </script>
  