export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    totalQuantity: (state) =>
      state.items.reduce((total, item) => total + item.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),

    cartItems: (state) => state.items
  },

  actions: {
    addToCart(product) {
      const existingItem = this.items.find(
        (item) => item.id === product.id
      )

      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          ...product,
          quantity: 1
        })
      }
    },

    increaseQuantity(productId) {
      const item = this.items.find(
        (product) => product.id === productId
      )

      if (item) {
        item.quantity++
      }
    },

    decreaseQuantity(productId) {
      const item = this.items.find(
        (product) => product.id === productId
      )

      if (!item) return

      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.removeFromCart(productId)
      }
    },

    removeFromCart(productId) {
      this.items = this.items.filter(
        (item) => item.id !== productId
      )
    },

    clearCart() {
      this.items = []
    }
  }
})