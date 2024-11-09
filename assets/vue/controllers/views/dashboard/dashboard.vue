<template>
    <div>
        <!-- Perfil en la esquina superior -->
        <div
            class="fixed top-8 right-8 p-3 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-transform duration-300 flex items-center space-x-3 z-50">
            <div class="relative">
                <img src="" alt="Perfil" class="w-10 h-10 rounded-full object-cover border-2 border-blue-500">
                <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <div class="flex flex-col items-start">
                <span class="font-semibold text-gray-800">Pedro Torres</span>
                <span class="text-sm text-gray-500">Administrador</span>
            </div>
        </div>
        <!-- Contenedor de Módulos -->
        <section class="flex justify-center items-center min-h-screen p-8">
            <div class="flex flex-col md:flex-row gap-8 md:gap-16 max-w-6xl mx-auto">
                <Reservation />
                <Administration />
            </div>
        </section>
    </div>

    <div>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>

    <div v-if="data">
      <h3>Datos Protegidos</h3>
      <p>{{ data }}</p>
    </div>
  </div>
</template>

<script setup>
import Reservation from './modules/reservation.vue'
import Administration from './modules/administration.vue'
import Navbar from '../../components/navbar.vue';

import { ref } from 'vue'
import axios from 'axios'

// Variables de estado
const email = ref('')
const password = ref('')
const token = ref('')
const data = ref(null)

// Función de login para obtener el token
const login = async () => {
  try {
    const response = await axios.post('https://apiet.ksperu.com/login_check', {
      email: email.value,
      password: password.value
    })

    // Guarda el token
    token.value = response.data.token
    console.log('Token obtenido:', token.value)
    fetchData() // Llamar a la función para obtener datos después del login
  } catch (error) {
    console.error('Error en el login:', error.response ? error.response.data : error.message)
  }
}

// Función para consumir un endpoint protegido usando el token
const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/tu-endpoint-protegido', {
      headers: {
        'Authorization': `Bearer ${token.value}`
      }
    })

    // Almacena los datos obtenidos
    data.value = response.data
  } catch (error) {
    console.error('Error al obtener datos:', error.response ? error.response.data : error.message)
  }
}
</script>