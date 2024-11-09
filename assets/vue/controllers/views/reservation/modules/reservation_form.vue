<template>
  <section v-if="room" class="mt-8 bg-white rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-5">
      <div class="p-8 lg:col-span-3">
        <h2 class="text-3xl font-bold mb-2 text-gray-800">Reserva tu Estancia</h2>
        <p class="text-gray-600 mb-8">Complete los detalles para confirmar su reserva</p>
        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
            <input type="text" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" placeholder="Ingresa tu nombre completo" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
            <input type="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" placeholder="ejemplo@correo.com" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Fecha de Ingreso</label>
              <input type="date" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Fecha de Salida</label>
              <input type="date" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Número de Huéspedes</label>
            <select class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200">
              <option value="1">1 Persona</option>
              <option value="2">2 Personas</option>
              <option value="3">3 Personas</option>
            </select>
          </div>
          <button type="submit" class="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-300 font-medium text-lg">
            Confirmar Reserva
          </button>
        </form>
      </div>
      
      <!-- Sección de la Imagen -->
      <div class="relative lg:col-span-2 flex items-center justify-center">
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        <img :src="room.image" class="w-full max-h-48 object-cover object-center rounded-b-lg lg:rounded-none lg:rounded-r-lg" alt="Habitación" />
        <div class="absolute bottom-0 left-0 right-0 p-4 text-white text-center lg:text-left">
          <h3 class="text-2xl font-bold mb-1">{{ room.name }}</h3>
          <p class="text-gray-200 text-sm">{{ room.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  room: Object
});
</script>

<style scoped>
/* Limitar la altura de la imagen */
.max-h-48 {
  max-height: 12rem; /* Limita la altura a 12rem (192px) */
}

@media (min-width: 1024px) {
  .max-h-48 {
    max-height: 100%; /* En pantallas grandes, la altura puede ocupar todo el espacio disponible */
  }
}
</style>
