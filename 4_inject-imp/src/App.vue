<script setup>
import { ref, provide } from 'vue'
import IntermediateComponent from './components/IntermediateComponent.vue'

// Reactive state at the root level
const username = ref('John Doe')

const updateUsername = (newName) => {
  username.value = newName
}

// Providing data and functions down to any descendant component
provide('username', username)
provide('updateUsername', updateUsername)
</script>

<template>
  <main class="app-container">
    <h2>Provide / Inject Demonstration</h2>
    <p>Root State Username: <strong>{{ username }}</strong></p>

    <!-- Intermediate component contains the DeepChild -->
    <IntermediateComponent />
  </main>
</template>

<style>
.app-container {
  max-width: 500px;
  margin: 3rem auto;
  font-family: Arial, sans-serif;
  padding: 1.5rem;
  border: 2px solid #42b883;
  border-radius: 8px;
  background-color: #f0fff4;
}
</style>