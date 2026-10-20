<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useProjectStore } from '../stores/projects'
import ProjectCard from '../components/ProjectCard.vue'

const store = useProjectStore()
const router = useRouter()

function openProject(id: number): void {
  router.push({ name: 'project-details', params: { id } })
}
</script>

<template>
  <section>
    <h1>Project Dashboard</h1>
    <p>Manage projects and track progress.</p>

    <div class="summary">
      <article>
        <span>Total Projects</span>
        <strong>{{ store.summary.total }}</strong>
      </article>

      <article>
        <span>Active Projects</span>
        <strong>{{ store.summary.active }}</strong>
      </article>

      <article>
        <span>Completed</span>
        <strong>{{ store.summary.completed }}</strong>
      </article>
    </div>

    <div class="projects">
      <ProjectCard
        v-for="project in store.projects"
        :key="project.id"
        :project="project"
        @open="openProject"
        @progress-change="store.updateProgress"
      />
    </div>
  </section>
</template>

<style scoped>
.summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.summary article {
  display: grid;
  gap: 8px;
  padding: 18px;
  background: #eaf2ff;
  border-radius: 10px;
}

.summary strong {
  font-size: 26px;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
</style>