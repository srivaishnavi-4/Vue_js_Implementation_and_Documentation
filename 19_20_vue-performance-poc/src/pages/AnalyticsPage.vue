<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { useProjectStore } from '../stores/projects'

const store = useProjectStore()
const showChart = ref(false)

const AnalyticsChart = defineAsyncComponent(
  () => import('../components/AnalyticsChart.vue')
)
</script>

<template>
  <section>
    <h1>Project Analytics</h1>
    <p>Review project completion and workload.</p>

    <div class="stats">
      <p>Total projects: {{ store.summary.total }}</p>
      <p>Active projects: {{ store.summary.active }}</p>
      <p>Completed projects: {{ store.summary.completed }}</p>
    </div>

    <button @click="showChart = !showChart">
      {{ showChart ? 'Hide Chart' : 'Load Analytics Chart' }}
    </button>

    <AnalyticsChart v-if="showChart" />
  </section>
</template>

<style scoped>
.stats {
  padding: 16px;
  background: #eaf2ff;
  border-radius: 10px;
  margin: 20px 0;
}

button {
  padding: 10px 14px;
  cursor: pointer;
}
</style>