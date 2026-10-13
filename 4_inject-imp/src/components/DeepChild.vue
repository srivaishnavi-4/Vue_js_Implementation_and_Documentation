<script setup>
import { inject } from 'vue'

const username = inject('username', 'Guest User')
const updateUsername = inject('updateUsername')
</script>

<template>
  <div class="deep-child-box">
    <h4>Deep Child Component (Level 2)</h4>
    <p>Injected Username: <strong>{{ username }}</strong></p>
    
    <button @click="updateUsername('Alice Smith')">
      Change Name to Alice
    </button>
  </div>
</template>

<style scoped>
.deep-child-box {
  border: 2px dashed #3182ce;
  padding: 1rem;
  border-radius: 6px;
  background-color: #ebf8ff;
  margin-top: 1rem;
}
button {
  padding: 6px 12px;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>