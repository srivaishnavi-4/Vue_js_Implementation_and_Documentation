<script setup>
import { ref } from 'vue'
import CardSlotDemo from './CardSlotDemo.vue'

// Reactive state for the input field
const userInput = ref('')
</script>

<template>
  <div class="parent-container">
    <h2>Slots & Input Real-Time Demo</h2>

    <!-- Real-time Input Field -->
    <div class="input-group">
      <label>Type to update Prop & Slot in real-time:</label>
      <input v-model="userInput" placeholder="Type something here..." />
    </div>

    <!-- Passing data down via Prop (:liveText) and Slots -->
    <CardSlotDemo :liveText="userInput">
      <!-- 1. NAMED SLOT (#header) -->
      <template #header>
        <h3 style="color: #35495e;">⚡ Custom Header Title</h3>
      </template>

      <!-- 2. DEFAULT SLOT (Injected content using the live input value) -->
      <p>
        <strong>Live Slot Output:</strong> {{ userInput ? userInput : 'Waiting for user input...' }}
      </p>
    </CardSlotDemo>
  </div>
</template>

<style scoped>
.parent-container {
  padding: 2rem;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 450px;
}
input {
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>