<script setup lang="ts">
import type { Project } from '../types/project'

defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  open: [id: number]
  progressChange: [id: number, progress: number]
}>()
</script>

<template>
  <article class="project-card">
    <div class="card-header">
      <h3>{{ project.name }}</h3>
      <span>{{ project.status }}</span>
    </div>

    <p>{{ project.description }}</p>

    <label :for="`progress-${project.id}`">
      Progress: {{ project.progress }}%
    </label>

    <input
      :id="`progress-${project.id}`"
      type="range"
      min="0"
      max="100"
      :value="project.progress"
      @input="emit(
        'progressChange',
        project.id,
        Number(($event.target as HTMLInputElement).value)
      )"
    />

    <button @click="emit('open', project.id)">
      View Details
    </button>
  </article>
</template>

<style scoped>
.project-card {
  padding: 18px;
  border: 1px solid #dbe3ee;
  border-radius: 12px;
  background: white;
}

.card-header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

h3 {
  margin-top: 0;
}

input {
  display: block;
  width: 100%;
  margin: 12px 0;
}

button {
  padding: 9px 12px;
  cursor: pointer;
}
</style>