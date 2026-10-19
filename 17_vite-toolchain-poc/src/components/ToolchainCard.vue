<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <article class="tool-card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </article>
</template>

<style scoped>
.tool-card {
  padding: 20px;
  border: 1px solid #dbe3ee;
  border-radius: 12px;
  background: white;
}

.tool-card h2 {
  margin-top: 0;
  color: #2563eb;
}

.tool-card p {
  color: #475569;
  line-height: 1.6;
}
</style>