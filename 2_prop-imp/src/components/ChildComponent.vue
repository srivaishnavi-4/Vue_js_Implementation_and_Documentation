<script setup>
import { defineProps, defineEmits } from 'vue'

// 1. Receive data from parent via props
defineProps({
  itemName: {
    type: String,
    required: true
  },
  stockCount: {
    type: Number,
    required: true
  }
})

// 2. Define custom events to send back to the parent
const emit = defineEmits(['item-purchased'])

const handleButtonClick = () => {
  // Trigger the emit event upwards
  emit('item-purchased')
}
</script>

<template>
  <div class="child-box">
    <h4>Child Component (Item Card)</h4>
    <p>Product: <strong>{{ itemName }}</strong></p>
    <p>Available Stock: {{ stockCount }}</p>
    
    <button @click="handleButtonClick" :disabled="stockCount <= 0">
      {{ stockCount > 0 ? 'Buy Item' : 'Sold Out' }}
    </button>
  </div>
</template>

<style scoped>
.child-box {
  border: 2px dashed #42b883;
  padding: 1rem;
  border-radius: 6px;
  background-color: #f0fff4;
  margin-top: 1rem;
}
button {
  padding: 6px 12px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:disabled {
  background-color: #cbd5e0;
  cursor: not-allowed;
}
</style>