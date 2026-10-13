<script setup>
import { ref, provide } from 'vue'
import WorkspaceDashboard from './components/WorkspaceDashboard.vue'

// Provide global data down to children without prop drilling
const officeLocation = ref('New York HQ (Floor 4)')

const toggleLocation = () => {
  officeLocation.value = officeLocation.value.includes('New York') 
    ? 'London Hub (Floor 2)' 
    : 'New York HQ (Floor 4)'
}

provide('officeLocation', officeLocation)
</script>

<template>
  <main class="app-container">
    <header class="app-header">
      <div>
        <h1>Workspace Reservation Portal</h1>
        <p class="subtitle">Current Location: <strong>{{ officeLocation }}</strong></p>
      </div>
      <button class="switch-btn" @click="toggleLocation">
        Switch Office Building
      </button>
    </header>

    <WorkspaceDashboard />
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #f7fafc;
  color: #2d3748;
}
.app-container {
  max-width: 960px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #edf2f7;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}
.subtitle {
  color: #718096;
  margin: 4px 0 0 0;
  font-size: 0.9rem;
}
.switch-btn {
  padding: 0.5rem 1rem;
  background-color: #2b6cb0;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
.switch-btn:hover {
  background-color: #2c5282;
}
</style>