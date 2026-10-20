import { defineStore } from 'pinia'
import { validateStudent } from '../utils/studentValidation'

export interface Student {
  id: number
  name: string
  email: string
}

export const useStudentStore = defineStore('students', {
  state: () => ({
    students: [] as Student[],
    error: ''
  }),

  getters: {
    totalStudents: state => state.students.length
  },

  actions: {
    addStudent(name: string, email: string): boolean {
      const errors = validateStudent({ name, email })

      if (errors.length > 0) {
        this.error = errors.join(', ')
        return false
      }

      this.students.push({
        id: Date.now(),
        name: name.trim(),
        email: email.trim()
      })

      this.error = ''
      return true
    },

    removeStudent(id: number) {
      this.students = this.students.filter(student => student.id !== id)
    }
  }
})