<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectStore } from '../stores/projects'

const route = useRoute()
const router = useRouter()
const store = useProjectStore()

const project = computed(() => {
  const id = Number(route.params.id)

  return store.projects.find(item => item.id === id)
})
</script>

<template>
  <section>
    <button @click="router.push('/')">
      Back to Dashboard
    </button>

    <template v-if="project">
      <h1>{{ project.name }}</h1>
      <p>{{ project.description }}</p>
      <p>Status: {{ project.status }}</p>
      <p>Progress: {{ project.progress }}%</p>
    </template>

    <p v-else>Project not found.</p>
  </section>
</template>