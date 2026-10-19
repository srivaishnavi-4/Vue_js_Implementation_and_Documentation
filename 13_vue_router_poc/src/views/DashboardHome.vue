
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  sessionStorage.removeItem('isLoggedIn')
  router.push('/login')
}
</script>

<template>
  <section>
    <h2>Dashboard Overview</h2>
    <p>You are viewing the protected dashboard page.</p>

    <button @click="logout">Logout</button>
  </section>
</template>

<style scoped>
button {
  padding: 10px 16px;
  cursor: pointer;
}
</style>
