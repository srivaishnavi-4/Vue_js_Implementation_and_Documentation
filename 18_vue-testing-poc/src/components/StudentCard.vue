<script setup lang="ts">
import type { Student } from '../stores/student'

defineProps<{
  student: Student
}>()

const emit = defineEmits<{
  remove: [id: number]
}>()
</script>

<template>
  <article class="student-card">
    <div>
      <h3>{{ student.name }}</h3>
      <p>{{ student.email }}</p>
    </div>

    <button @click="emit('remove', student.id)">
      Remove
    </button>
  </article>
</template>

<style scoped>
.student-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
  margin: 12px 0;
  border: 1px solid #dbe3ee;
  border-radius: 8px;
}

h3, p {
  margin: 4px 0;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}
</style>