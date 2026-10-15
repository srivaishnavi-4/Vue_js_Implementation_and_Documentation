
<script setup>
const response = await fetch(
  'https://dummyjson.com/products?limit=6'
)

if (!response.ok) {
  throw new Error('Failed to fetch products')
}

const data = await response.json()
const products = data.products
</script>

<template>
  <section>
    <h2>Available Products</h2>
    <p class="count">Showing {{ products.length }} products</p>

    <div v-if="products.length" class="product-grid">
      <article
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <img :src="product.thumbnail" :alt="product.title" />

        <p class="category">{{ product.category }}</p>
        <h3>{{ product.title }}</h3>
        <p class="price">${{ product.price }}</p>
        <p>Rating: {{ product.rating }} / 5</p>
      </article>
    </div>

    <p v-else>No products found.</p>
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 8px;
}

.count {
  color: #64748b;
  margin-bottom: 24px;
}
</style>
