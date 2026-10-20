export type ProjectStatus =
  | 'Active'
  | 'Completed'
  | 'On Hold'

export interface Project {
  id: number
  name: string
  description: string
  status: ProjectStatus
  progress: number
}

export interface ProjectSummary {
  total: number
  completed: number
  active: number
}