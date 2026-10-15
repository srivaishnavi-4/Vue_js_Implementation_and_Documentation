
<script setup>
import { ref } from 'vue'
import ProductList from './ProductList.vue'

const refreshKey = ref(0)

function refreshProducts() {
  refreshKey.value++
}
</script>

<template>
  <main class="dashboard">
    <header class="header">
      <div>
        <p class="eyebrow">STORE MANAGEMENT</p>
        <h1>Product Dashboard</h1>
        <p class="subtitle">
          Manage and explore the latest products.
        </p>
      </div>

      <button @click="refreshProducts">
        Refresh Products
      </button>
    </header>

    <Suspense :key="refreshKey">
      <template #default>
        <ProductList />
      </template>

      <template #fallback>
        <section class="loading">
          <div class="spinner"></div>
          <h2>Loading products...</h2>
          <p>Please wait while we fetch the latest products.</p>
        </section>
      </template>
    </Suspense>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f7fb;
  color: #202b3c;
}

button {
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  padding: 12px 18px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background: #1d4ed8;
}

.dashboard {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
}

.eyebrow {
  color: #2563eb;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
}

h1 {
  margin: 8px 0;
  font-size: 32px;
}

.subtitle {
  color: #64748b;
}

.loading {
  min-height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 14px;
  text-align: center;
  padding: 30px;
}

.loading p {
  color: #64748b;
}

.spinner {
  width: 42px;
  height: 42px;
  border: 4px solid #dbeafe;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.product-card {
  background: white;
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 4px 14px #0f172a0a;
}

.product-card img {
  display: block;
  width: 100%;
  height: 160px;
  object-fit: contain;
  margin-bottom: 16px;
}

.product-card h3 {
  font-size: 16px;
  min-height: 40px;
}

.product-card .price {
  font-size: 21px;
  font-weight: bold;
  color: #2563eb;
}

.product-card .category {
  color: #64748b;
  font-size: 13px;
  text-transform: capitalize;
}

.error {
  padding: 24px;
  background: white;
  border-radius: 14px;
  color: #b91c1c;
}

@media (max-width: 600px) {
  .header {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
