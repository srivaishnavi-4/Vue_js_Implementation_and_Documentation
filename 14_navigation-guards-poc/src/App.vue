
<script setup>
import { useRouter } from 'vue-router'
import {
  currentUser,
  isAuthenticated,
  logout
} from './auth'

const router = useRouter()

function handleLogout() {
  logout()
  router.push('/login')
}
</script>

<template>
  <div class="app">
    <header class="navbar">
      <RouterLink to="/dashboard" class="brand">
        WorkSpace
      </RouterLink>

      <nav v-if="isAuthenticated" class="nav-links">
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/profile">Edit Profile</RouterLink>

        <RouterLink
          v-if="currentUser?.role === 'admin'"
          to="/admin"
        >
          Admin
        </RouterLink>

        <span class="user-label">
          {{ currentUser?.username }}
          ({{ currentUser?.role }})
        </span>

        <button class="logout-button" @click="handleLogout">
          Logout
        </button>
      </nav>

      <RouterLink v-else to="/login">Login</RouterLink>
    </header>

    <main class="page">
      <RouterView />
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f1f5f9;
  color: #1e293b;
  font-family: Arial, sans-serif;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: #2563eb;
  text-decoration: none;
}

.navbar {
  min-height: 70px;
  padding: 16px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: white;
  border-bottom: 1px solid #e2e8f0;
}

.brand {
  color: #1e293b;
  font-size: 22px;
  font-weight: bold;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-links a.router-link-active {
  font-weight: bold;
  color: #1d4ed8;
}

.user-label {
  color: #64748b;
  font-size: 13px;
}

.logout-button {
  background: #dc2626;
  color: white;
  border: none;
  border-radius: 7px;
  padding: 9px 13px;
}

.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 36px 24px;
}

.panel {
  padding: 28px;
  border-radius: 14px;
  background: white;
  box-shadow: 0 4px 18px #0f172a0a;
}

.panel h1 {
  margin-top: 0;
}

.muted {
  color: #64748b;
}

.primary-button {
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 11px 16px;
}

@media (max-width: 700px) {
  .navbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .nav-links {
    justify-content: flex-start;
  }
}
</style>
