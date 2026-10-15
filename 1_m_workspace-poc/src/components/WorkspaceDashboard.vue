<script setup>
import { ref, inject, watch } from 'vue'
import DeskCard from './DeskCard.vue'

// Inject the global office location from App.vue
const officeLocation = inject('officeLocation')

// Define separate desk inventories for each location
const locationDatabases = {
  'New York HQ (Floor 4)': [
    { id: 1, number: 'NY-10A', type: 'Window', amenities: 'Dual Monitors', isBooked: false },
    { id: 2, number: 'NY-12B', type: 'Quiet Zone', amenities: 'Noise-canceling', isBooked: true }
  ],
  'London Hub (Floor 2)': [
    { id: 3, number: 'LDN-01', type: 'Collaboration', amenities: 'Whiteboard', isBooked: false },
    { id: 4, number: 'LDN-05', type: 'Window', amenities: 'Standing Desk', isBooked: false }
  ]
}

// Active desks list reactive to the current office location
const currentDesks = ref(locationDatabases[officeLocation.value] || [])

// Whenever officeLocation changes, update the desk list for that floor
watch(officeLocation, (newLocation) => {
  currentDesks.value = locationDatabases[newLocation] || []
})

const toggleBooking = (id) => {
  const desk = currentDesks.value.find(d => d.id === id)
  if (desk) desk.isBooked = !desk.isBooked
}
</script>

<template>
  <div class="dashboard">
    <h2>Available Workspaces at {{ officeLocation }}</h2>
    
    <div class="desk-grid">
      <DeskCard 
        v-for="desk in currentDesks" 
        :key="desk.id" 
        :desk="desk"
        @toggle-booking="toggleBooking"
      >
        <template #header>
          <h3>🪑 Desk {{ desk.number }}</h3>
        </template>

        <template #default="{ desk: slotDesk, isWindowSeat }">
          <p class="desk-meta">
            <strong>Zone:</strong> {{ slotDesk.type }} 
            <span v-if="isWindowSeat" class="badge">☀️ Sunlight View</span>
          </p>
          <p class="amenities">Features: {{ slotDesk.amenities }}</p>
        </template>
      </DeskCard>
    </div>
  </div>
</template>