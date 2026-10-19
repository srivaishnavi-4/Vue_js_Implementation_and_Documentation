<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cart = useCartStore()

const formattedPrice = computed(() =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(props.product.price)
)

function addProduct() {
  cart.addToCart(props.product)
}
</script>

<template>
  <article class="product-card">
    <div class="product-icon">
      {{ product.emoji }}
    </div>

    <h3>{{ product.name }}</h3>

    <p class="description">
      {{ product.description }}
    </p>

    <div class="product-bottom">
      <strong>{{ formattedPrice }}</strong>

      <button @click="addProduct">
        Add to cart
      </button>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  padding: 22px;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.product-icon {
  display: grid;
  place-items: center;
  min-height: 130px;
  margin-bottom: 18px;
  border-radius: 12px;
  background: #f0fdf4;
  font-size: 54px;
}

.product-card h3 {
  margin: 0 0 8px;
  color: #172b24;
  font-size: 18px;
}

.description {
  min-height: 44px;
  margin: 0 0 18px;
  color: #6b7280;
  line-height: 1.5;
  font-size: 14px;
}

.product-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
}

.product-bottom strong {
  color: #166534;
  font-size: 17px;
}

button {
  padding: 10px 13px;
  border: none;
  border-radius: 8px;
  background: #15803d;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

button:hover {
  background: #166534;
}
</style>