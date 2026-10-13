<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

// Parent state
const product = ref({
  name: 'Mechanical Keyboard',
  stock: 3
})

// Function that handles the notification sent from the child component
const reduceStock = () => {
  if (product.value.stock > 0) {
    product.value.stock--
  }
}
</script>

<template>
  <div class="parent-box">
    <h2>Parent Component Dashboard</h2>
    <p>Current Stock State tracked in Parent: <strong>{{ product.stock }}</strong></p>

    <!-- 
      - Passing data down via Props (:itemName, :stockCount)
      - Listening to child notifications via Emits (@item-purchased) 
    -->
    <ChildComponent 
      :itemName="product.name" 
      :stockCount="product.stock"
      @item-purchased="reduceStock"
    />
  </div>
</template>

<style scoped>
.parent-box {
  border: 2px solid #35495e;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f7fafc;
}
</style>