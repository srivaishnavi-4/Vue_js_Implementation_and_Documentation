<script setup>
const cart = useCartStore()

const formattedTotal = computed(() =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(cart.totalPrice)
)

function checkout() {
  alert(`Demo checkout: Your total is ${formattedTotal.value}`)
}
</script>

<template>
  <aside class="cart-panel">
    <div class="cart-heading">
      <h2>Your Cart</h2>

      <span class="count">
        {{ cart.totalQuantity }}
      </span>
    </div>

    <p v-if="cart.items.length === 0" class="empty">
      Your cart is empty. Add a product to get started.
    </p>

    <div v-else class="cart-items">
      <div
        v-for="item in cart.cartItems"
        :key="item.id"
        class="cart-item"
      >
        <div class="item-icon">
          {{ item.emoji }}
        </div>

        <div class="item-details">
          <strong>{{ item.name }}</strong>

          <span>
            ₹{{ item.price.toLocaleString('en-IN') }} each
          </span>

          <div class="quantity-controls">
            <button
              class="quantity-button"
              aria-label="Decrease quantity"
              @click="cart.decreaseQuantity(item.id)"
            >
              −
            </button>

            <span>{{ item.quantity }}</span>

            <button
              class="quantity-button"
              aria-label="Increase quantity"
              @click="cart.increaseQuantity(item.id)"
            >
              +
            </button>
          </div>
        </div>

        <button
          class="remove-button"
          :aria-label="`Remove ${item.name}`"
          @click="cart.removeFromCart(item.id)"
        >
          Remove
        </button>
      </div>
    </div>

    <div class="cart-footer">
      <div class="total-row">
        <span>Total</span>
        <strong>{{ formattedTotal }}</strong>
      </div>

      <button
        class="checkout-button"
        :disabled="cart.items.length === 0"
        @click="checkout"
      >
        Proceed to checkout
      </button>

      <button
        v-if="cart.items.length > 0"
        class="clear-button"
        @click="cart.clearCart()"
      >
        Clear cart
      </button>
    </div>
  </aside>
</template>

<style scoped>
.cart-panel {
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
}

.cart-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.cart-heading h2 {
  margin: 0;
  color: #172b24;
  font-size: 22px;
}

.count {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #dcfce7;
  color: #166534;
  font-weight: 700;
}

.empty {
  padding: 20px 0;
  color: #6b7280;
  line-height: 1.6;
}

.cart-items {
  display: flex;
  flex-direction: column;
}

.cart-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid #e5e7eb;
}

.item-icon {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #f0fdf4;
  font-size: 24px;
}

.item-details {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
}

.item-details strong {
  color: #172b24;
  font-size: 14px;
}

.item-details > span {
  color: #6b7280;
  font-size: 12px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
}

.quantity-button {
  width: 27px;
  height: 27px;
  padding: 0;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  color: #172b24;
  font-size: 18px;
  cursor: pointer;
}

.remove-button {
  padding: 4px 0;
  border: none;
  background: transparent;
  color: #dc2626;
  font-size: 12px;
  cursor: pointer;
}

.cart-footer {
  margin-top: 22px;
}

.total-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  color: #172b24;
  font-size: 17px;
}

.total-row strong {
  color: #166534;
  font-size: 22px;
}

.checkout-button,
.clear-button {
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.checkout-button {
  background: #15803d;
  color: white;
}

.checkout-button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.clear-button {
  margin-top: 8px;
  background: #f3f4f6;
  color: #374151;
}

@media (max-width: 480px) {
  .cart-panel {
    padding: 16px;
  }

  .cart-item {
    flex-wrap: wrap;
  }
}
</style>