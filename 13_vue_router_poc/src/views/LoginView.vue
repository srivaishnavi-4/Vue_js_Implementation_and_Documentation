
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const username = ref('')

function login() {
  if (!username.value.trim()) {
    alert('Enter a username')
    return
  }

  // Demo only: this is not secure authentication.
  sessionStorage.setItem('isLoggedIn', 'true')

  const redirect = route.query.redirect
  const destination =
    typeof redirect === 'string' ? redirect : '/dashboard'

  router.push(destination)
}
</script>

<template>
  <section>
    <h1>Login</h1>

    <form @submit.prevent="login">
      <label for="username">Username</label>
      <input
        id="username"
        v-model="username"
        placeholder="Enter username"
      />

      <button type="submit">Login</button>
    </form>
  </section>
</template>

<style scoped>
form {
  display: grid;
  gap: 12px;
  max-width: 320px;
}

input,
button {
  padding: 10px;
}
</style>
