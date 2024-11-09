<template>
  <section class="container mx-auto mb-16">
    <h2 class="text-2xl font-semibold mb-8">Habitaciones Disponibles</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <room-card
        v-for="room in rooms"
        :key="room.id"
        :room="room"
        @reserve="handleReserve"
      />
    </div>
  </section>
</template>

<script setup>
import { defineEmits } from 'vue';
import RoomCard from './room_card.vue';

const emit = defineEmits(['reserve']);

// Lista de habitaciones
const rooms = [
  {
    id: 1,
    name: 'Suite Principal',
    description: 'Lujosa suite con vista panorámica, perfecta para una estancia inolvidable.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'S/200.00',
    features: ['Vista al mar', 'Balcón privado', 'Jacuzzi'],
    capacity: 2,
  },
  {
    id: 2,
    name: 'Habitación Doble',
    description: 'Espaciosa habitación con dos camas, ideal para familias o amigos.',
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'S/200.00',
    features: ['TV Smart', 'Minibar', 'WiFi'],
    capacity: 3,
  },
  {
    id: 3,
    name: 'Habitación Individual',
    description: 'Cómoda habitación individual con todas las comodidades necesarias.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'S/200.00',
    features: ['Escritorio', 'TV', 'WiFi'],
    capacity: 1,
  },
];

// Emitir el evento `reserve` al componente padre con la habitación seleccionada
function handleReserve(room) {
  emit('reserve', room);
}
</script>
