<script setup>
import DeepChild from './DeepChild.vue'
</script>

<template>
  <div class="intermediate-box">
    <h3>Intermediate Component (Level 1)</h3>
    <p class="note">I am in the middle, but I don't need to pass any props down!</p>
    
    <!-- Rendering the deep child -->
    <DeepChild />
  </div>
</template>

<style scoped>
.intermediate-box {
  border: 2px solid #e2e8f0;
  padding: 1.25rem;
  border-radius: 8px;
  background-color: #f7fafc;
  margin-top: 1rem;
}
.note {
  font-size: 0.85rem;
  color: #718096;
  font-style: italic;
}
</style>