<template>
    <div class="flex h-screen">
        <div class="hidden md:flex w-full bg-cover bg-center" style="background-image: url('/images/bg-autenticacion.jpeg');">
            <div class="bg-black bg-opacity-50 flex items-center justify-center w-full h-full">
                <div class="text-center p-8">
                    <h2 class="text-4xl font-bold text-white">EL TURISTA</h2>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-16">
            <div class="w-full max-w-sm space-y-8">
                <div class="text-center mb-8">
                    <img src="" alt="" class="w-auto h-12 mx-auto">
                </div>
                
                <!-- Título dinámico según el componente -->
                <h1 class="text-2xl font-bold text-gray-800 text-center mb-4">
                    {{ isLogin ? 'Iniciar sesión' : 'Crear cuenta' }}
                </h1>

                <!-- Componentes hijos (Login o Register) -->
                <Login v-if="isLogin" @toggle="toggleAuth" />
                <Register v-else @toggle="toggleAuth" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Login from './modules/login.vue'
import Register from './modules/register.vue'

const isLogin = ref(true) // Por defecto, mostrar el login

const toggleAuth = () => {
    isLogin.value = !isLogin.value // Cambia entre Login y Register
}
</script>
