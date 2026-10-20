import { defineStore } from 'pinia'
import type { Project, ProjectSummary } from '../types/project'

interface ProjectState {
  projects: Project[]
}

export const useProjectStore = defineStore('projects', {
  state: (): ProjectState => ({
    projects: [
      {
        id: 1,
        name: 'E-commerce Platform',
        description: 'Build a product catalogue and checkout flow.',
        status: 'Active',
        progress: 65
      },
      {
        id: 2,
        name: 'Student Portal',
        description: 'Manage student records and reports.',
        status: 'Completed',
        progress: 100
      },
      {
        id: 3,
        name: 'Analytics Dashboard',
        description: 'Create interactive project analytics.',
        status: 'On Hold',
        progress: 30
      }
    ]
  }),

  getters: {
    summary: (state): ProjectSummary => ({
      total: state.projects.length,
      completed: state.projects.filter(
        project => project.status === 'Completed'
      ).length,
      active: state.projects.filter(
        project => project.status === 'Active'
      ).length
    })
  },

  actions: {
    updateProgress(id: number, progress: number): void {
      const project = this.projects.find(item => item.id === id)

      if (!project) return

      project.progress = Math.max(0, Math.min(100, progress))

      if (project.progress === 100) {
        project.status = 'Completed'
      }
    }
  }
})