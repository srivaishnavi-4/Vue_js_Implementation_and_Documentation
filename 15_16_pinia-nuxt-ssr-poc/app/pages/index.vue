<script setup>
const {
  data: products,
  pending,
  error
} = await useFetch('/api/products')

useSeoMeta({
  title: 'Vaishu Store | Online Shopping',
  description:
    'Explore headphones, smart watches, keyboards and more.'
})
</script>

<template>
  <main class="store-page">
    <section class="hero">
      <div>
        <p class="eyebrow">EVERYDAY ESSENTIALS</p>

        <h1>Find your next favourite.</h1>

        <p class="hero-description">
          Discover useful tech products for work and everyday life.
        </p>
      </div>

      <div class="hero-art" aria-hidden="true">
        🛍️
      </div>
    </section>

    <section class="store-layout">
      <div class="catalog">
        <div class="section-heading">
          <div>
            <p class="eyebrow">OUR COLLECTION</p>
            <h2>Featured products</h2>
          </div>

          <span v-if="products">
            {{ products.length }} products
          </span>
        </div>

        <p v-if="pending" class="status-message">
          Loading products...
        </p>

        <p v-else-if="error" class="error-message">
          Products could not be loaded. Please refresh the page.
        </p>

        <div v-else-if="products?.length" class="product-grid">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>

        <p v-else class="status-message">
          No products are available.
        </p>
      </div>

      <div class="cart-column">
        <CartSummary />
      </div>
    </section>

    <footer class="store-footer">
      Built with Nuxt SSR, Vue 3 and Pinia.
    </footer>
  </main>
</template>

<style scoped>
.store-page {
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 230px;
  padding: 38px 44px;
  border-radius: 22px;
  background: linear-gradient(120deg, #ecfdf5, #f0fdf4 60%, #dcfce7);
}

.eyebrow {
  margin: 0 0 10px;
  color: #15803d;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.hero h1 {
  max-width: 550px;
  margin: 0;
  color: #163326;
  font-size: clamp(30px, 4vw, 46px);
  line-height: 1.15;
}

.hero-description {
  max-width: 500px;
  margin: 14px 0 0;
  color: #4b6356;
  line-height: 1.7;
}

.hero-art {
  font-size: clamp(60px, 9vw, 105px);
}

.store-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  align-items: start;
  gap: 28px;
  margin-top: 36px;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.section-heading h2 {
  margin: 0;
  color: #172b24;
  font-size: 25px;
}

.section-heading > span {
  color: #6b7280;
  font-size: 13px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.status-message,
.error-message {
  padding: 20px;
  border-radius: 10px;
  background: #f9fafb;
  color: #4b5563;
}

.error-message {
  color: #b91c1c;
}

.cart-column {
  position: sticky;
  top: 20px;
}

.store-footer {
  margin-top: 40px;
  padding: 20px 0;
  border-top: 1px solid #e5e7eb;
  color: #6b7280;
  text-align: center;
  font-size: 13px;
}

@media (max-width: 1000px) {
  .store-layout {
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 18px;
  }

  .store-page {
    padding: 22px;
  }

  .hero {
    padding: 30px;
  }
}

@media (max-width: 760px) {
  .store-layout {
    grid-template-columns: 1fr;
  }

  .cart-column {
    position: static;
  }
}

@media (max-width: 480px) {
  .store-page {
    padding: 14px;
  }

  .hero {
    min-height: auto;
    padding: 24px 20px;
  }

  .hero-art {
    display: none;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .section-heading h2 {
    font-size: 21px;
  }
}
</style>