<script setup lang="ts">
const values: number[] = [35, 60, 45, 80, 55, 95]

const labels: string[] = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'
]
</script>

<template>
  <section class="chart">
    <h3>Monthly Project Activity</h3>

    <div class="bars">
      <div
        v-for="(value, index) in values"
        :key="labels[index]"
        class="bar-column"
      >
        <span>{{ value }}%</span>
        <div class="bar" :style="{ height: `${value}%` }"></div>
        <small>{{ labels[index] }}</small>
      </div>
    </div>
  </section>
</template>

<style scoped>
.chart {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #dbe3ee;
  border-radius: 12px;
  background: white;
}

.bars {
  display: flex;
  align-items: end;
  justify-content: space-around;
  gap: 16px;
  height: 230px;
  padding-top: 20px;
}

.bar-column {
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 8px;
}

.bar {
  width: min(100%, 44px);
  min-height: 4px;
  background: #3978e5;
  border-radius: 6px 6px 0 0;
}

small {
  color: #475569;
}
</style>