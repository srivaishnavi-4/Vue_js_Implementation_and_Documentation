<script setup lang="ts">
import { computed } from 'vue'
import ToolchainCard from '@/components/ToolchainCard.vue'
import viteLogo from '@/assets/vite-logo.svg'

const appName = import.meta.env.VITE_APP_NAME
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
const mode = import.meta.env.MODE
const isProduction = import.meta.env.PROD

const environmentName = computed(() =>
  isProduction ? 'Production' : 'Development'
)

declare const __APP_VERSION__: string
</script>

<template>
  <main class="container">
    <header class="hero">
      <p class="eyebrow">VITE TOOLCHAIN POC</p>
      <h1>{{ appName }}</h1>
      <p>
        Learn environment configuration, aliases, assets and builds.
      </p>
    </header>

    <section class="status-panel">
      <h2>Current build environment</h2>

      <p>
        <strong>Mode:</strong>
        {{ mode }}
      </p>

      <p>
        <strong>Environment:</strong>
        {{ environmentName }}
      </p>

      <p>
        <strong>App version:</strong>
        {{ __APP_VERSION__ }}
      </p>

      <p>
        <strong>API base URL:</strong>
        {{ apiBaseUrl }}
      </p>
    </section>

    <section class="cards">
      <ToolchainCard
        title="Environment Variables"
        description="Application settings change according to the selected Vite mode."
      />

      <ToolchainCard
        title="Path Aliases"
        description="The ToolchainCard component is imported using the @/components alias."
      />

      <ToolchainCard
        title="Production Build"
        description="Vite processes source code and creates optimized production assets."
      />
    </section>

    <section class="asset-panel">
      <h2>Asset Optimization</h2>

      <div class="asset-grid">
        <figure>
          <img :src="viteLogo" alt="Imported Vite asset" />
          <figcaption>Imported asset from src/assets</figcaption>
        </figure>

        <figure>
          <img src="/demo.svg" alt="Public static asset" />
          <figcaption>Static asset from public</figcaption>
        </figure>
      </div>
    </section>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
  color: #0f172a;
}

.container {
  width: min(100% - 32px, 1000px);
  margin: 40px auto;
}

.hero {
  padding: 30px;
  border-radius: 16px;
  background: #1e293b;
  color: white;
}

.hero h1 {
  margin: 10px 0;
}

.eyebrow {
  color: #93c5fd;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
}

.status-panel,
.asset-panel {
  margin-top: 24px;
  padding: 24px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow-wrap: anywhere;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.asset-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

figure {
  margin: 0;
}

figure img {
  width: 100%;
  max-width: 200px;
  height: 100px;
  object-fit: contain;
}

figcaption {
  margin-top: 10px;
  color: #475569;
  font-size: 14px;
}
</style>