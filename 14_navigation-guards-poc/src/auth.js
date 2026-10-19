
import { ref, computed } from 'vue'

function readSavedUser() {
  try {
    return JSON.parse(localStorage.getItem('demo-user')) || null
  } catch {
    return null
  }
}

export const currentUser = ref(readSavedUser())

export const isAuthenticated = computed(() => {
  return currentUser.value !== null
})

export function login(username, password) {
  let user = null

  if (username === 'employee' && password === 'emp123') {
    user = {
      username: 'employee',
      role: 'employee'
    }
  } else if (username === 'admin' && password === 'admin123') {
    user = {
      username: 'admin',
      role: 'admin'
    }
  }

  if (!user) {
    return false
  }

  currentUser.value = user
  localStorage.setItem('demo-user', JSON.stringify(user))

  return true
}

export function logout() {
  currentUser.value = null
  localStorage.removeItem('demo-user')
}
