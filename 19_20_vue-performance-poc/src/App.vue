<template>
  <div class="app">
    <header>
      <h2>ProjectFlow</h2>

      <nav>
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/analytics">Analytics</RouterLink>
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
  color: #172033;
  background: #f5f7fb;
}

.app {
  max-width: 1100px;
  margin: auto;
  padding: 24px;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

nav {
  display: flex;
  gap: 18px;
}

nav a {
  color: #3978e5;
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

button {
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background: white;
  cursor: pointer;
}

button:hover {
  background: #eff6ff;
}
</style>