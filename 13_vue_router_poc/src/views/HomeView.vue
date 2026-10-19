
<template>
  <section>
    <h1>Welcome to VueShop</h1>
    <p>Discover products and manage your shopping experience.</p>

    <RouterLink to="/products">
      <button>Browse Products</button>
    </RouterLink>
  </section>
</template>

<style scoped>
button {
  padding: 12px 20px;
  background: #2563eb;
  color: white;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
}
</style>
