<template>
  <div class="app-shell">
    <header class="topbar">
      <NuxtLink to="/" class="brand">
        <span class="brand-icon">V</span>
        <span>Vaishu Store</span>
      </NuxtLink>

      <div class="header-label">
        Nuxt SSR + Pinia
      </div>
    </header>

    <NuxtPage />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #ffffff;
}

body {
  margin: 0;
  color: #172b24;
}

button {
  font: inherit;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 32px;
  border-bottom: 1px solid #e5e7eb;
  background: white;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #163326;
  font-size: 20px;
  font-weight: 800;
  text-decoration: none;
}

.brand-icon {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #15803d;
  color: white;
}

.header-label {
  color: #6b7280;
  font-size: 13px;
}

@media (max-width: 480px) {
  .topbar {
    padding: 14px;
  }

  .brand {
    font-size: 17px;
  }

  .header-label {
    font-size: 11px;
  }
}
</style>