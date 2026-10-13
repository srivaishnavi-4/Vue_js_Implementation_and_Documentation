<script setup>
import { defineProps, defineEmits, inject } from 'vue'

defineProps({
  desk: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle-booking'])
const officeLocation = inject('officeLocation', 'Global Hub')

const handleBookingAction = (id) => {
  emit('toggle-booking', id)
}
</script>

<template>
  <div class="desk-card" :class="{ booked: desk.isBooked }">
    <!-- Named Slot for Header -->
    <header class="card-header">
      <slot name="header">
        <h3>Desk #{{ desk.number }}</h3>
      </slot>
      <span class="location-tag">{{ officeLocation }}</span>
    </header>

    <!-- Scoped Slot: Exposing desk data back to parent -->
    <div class="card-body">
      <slot :desk="desk" :isWindowSeat="desk.type === 'Window'">
        <p>Type: {{ desk.type }}</p>
      </slot>
    </div>

    <!-- Actions / Emit trigger -->
    <footer class="card-footer">
      <button 
        :class="desk.isBooked ? 'cancel-btn' : 'book-btn'" 
        @click="handleBookingAction(desk.id)"
      >
        {{ desk.isBooked ? 'Release Desk' : 'Book Desk' }}
      </button>
    </footer>
  </div>
</template>

<style scoped>
.desk-card {
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  padding: 1.25rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.desk-card.booked {
  background-color: #fff5f5;
  border-color: #feb2b2;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.location-tag {
  font-size: 0.75rem;
  background-color: #edf2f7;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: #4a5568;
}
.card-body {
  margin-bottom: 1rem;
  color: #4a5568;
}
.card-footer button {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}
.book-btn { background-color: #3182ce; color: white; }
.cancel-btn { background-color: #e53e3e; color: white; }
</style>