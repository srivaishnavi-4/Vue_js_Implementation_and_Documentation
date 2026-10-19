
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const products = [
  { id: 101, name: 'Keyboard', price: 1500 },
  { id: 102, name: 'Headphones', price: 2500 },
  { id: 103, name: 'Notebook', price: 100 }
]

const product = computed(() => {
  const id = Number(route.params.id)
  return products.find(item => item.id === id)
})
</script>

<template>
  <section v-if="product">
    <h1>{{ product.name }}</h1>
    <p>Product ID: {{ route.params.id }}</p>
    <p>Price: ₹{{ product.price }}</p>

    <RouterLink to="/products">Back to Products</RouterLink>
  </section>

  <section v-else>
    <h1>Product not found</h1>
    <RouterLink to="/products">Return to Products</RouterLink>
  </section>
</template>
