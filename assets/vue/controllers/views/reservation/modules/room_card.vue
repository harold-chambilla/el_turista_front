<template>
  <div class="bg-white rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
    <div class="relative overflow-hidden">
      <div class="h-64 bg-gray-200">
        <img :src="room.image" :alt="room.name" class="w-full h-full object-cover transform transition duration-300 hover:scale-105" />
      </div>
      <div class="absolute top-4 right-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded-full font-semibold">
        {{ room.price }} x noche
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-3">{{ room.name }}</h3>
      <p class="text-gray-600 mb-4">{{ room.description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="feature in room.features" :key="feature" class="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
          {{ feature }}
        </span>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <span class="text-2xl text-blue-500">👥</span>
          <span class="text-gray-600">Hasta {{ room.capacity }} personas</span>
        </div>
        <button @click="onReserve" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Reservar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  room: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['reserve']);

function onReserve() {
  emit('reserve', props.room); // Usamos `props.room` en lugar de `room`
}
</script>
