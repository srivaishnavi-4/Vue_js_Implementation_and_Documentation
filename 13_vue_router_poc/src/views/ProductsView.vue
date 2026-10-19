
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const products = [
  { id: 101, name: 'Keyboard', category: 'electronics', price: 1500 },
  { id: 102, name: 'Headphones', category: 'electronics', price: 2500 },
  { id: 103, name: 'Notebook', category: 'stationery', price: 100 }
]

function openProduct(id: number) {
  router.push(`/products/${id}`)
}
</script>

<template>
  <section>
    <h1>Products</h1>

    <p>
      Selected category:
      {{ route.query.category || 'All categories' }}
    </p>

    <div class="filters">
      <RouterLink to="/products">All</RouterLink>
      <RouterLink to="/products?category=electronics">
        Electronics
      </RouterLink>
      <RouterLink to="/products?category=stationery">
        Stationery
      </RouterLink>
    </div>

    <article v-for="product in products" :key="product.id">
      <h3>{{ product.name }}</h3>
      <p>Price: ₹{{ product.price }}</p>

      <button @click="openProduct(product.id)">
        View Details
      </button>
    </article>
  </section>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

article {
  background: white;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
}

button {
  padding: 8px 14px;
  cursor: pointer;
}
</style>
