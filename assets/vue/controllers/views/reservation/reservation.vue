<template>
  <section class="mb-16">
    <h2 class="text-2xl font-semibold mb-8">Habitaciones Disponibles</h2>
    <room-list @reserve="openReservationModal" />

    <!-- Modal para el formulario de reserva -->
    <div v-if="selectedRoom" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="relative bg-white rounded-lg shadow-lg max-w-2xl w-full p-4">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">✕</button>
        <reservation-form :room="selectedRoom" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import RoomList from './modules/room_list.vue';
import ReservationForm from './modules/reservation_form.vue';

// Estado para la habitación seleccionada
const selectedRoom = ref(null);

// Función para abrir el modal con la habitación seleccionada
function openReservationModal(room) {
  selectedRoom.value = room;
}

// Cierra el modal de reserva
function closeModal() {
  selectedRoom.value = null;
}
</script>

<style scoped>
/* Opcional: Estilo para el fondo del modal */
.fixed {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
