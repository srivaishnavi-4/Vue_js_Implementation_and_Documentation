
<template>
  <div class="app">
    <header>
      <h2>VueShop</h2>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f7fb;
  color: #222;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 8%;
  background: white;
  border-bottom: 1px solid #ddd;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

a {
  color: #2563eb;
  text-decoration: none;
}

a.router-link-active {
  font-weight: bold;
}

main {
  padding: 32px 8%;
}
</style>
