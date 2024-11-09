<template>
    <form class="space-y-6">
        <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Correo</label>
            <input type="email" placeholder="Ingresa tu correo"
                class="w-full border border-gray-300 p-3 rounded-none focus:ring-1 focus:ring-black focus:border-black">
        </div>
        <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
            <input type="password" placeholder="Ingresa tu contraseña"
                class="w-full border border-gray-300 p-3 rounded-none focus:ring-1 focus:ring-black focus:border-black">
        </div>
        <button class="w-full bg-black text-white p-3 hover:bg-gray-800">
            Crear cuenta
        </button>
        
        <div class="mt-6 text-center space-y-2">
            <a @click.prevent="$emit('toggle')" class="text-blue-600 hover:underline cursor-pointer">¿Ya tienes cuenta? Iniciar sesión</a><br>
        </div>
    </form>
</template>

<script setup>
</script>
