
<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { login } from '../auth'

const route = useRoute()
const router = useRouter()

const username = ref('employee')
const password = ref('emp123')
const errorMessage = ref('')

function handleLogin() {
  errorMessage.value = ''

  const success = login(username.value, password.value)

  if (!success) {
    errorMessage.value = 'Invalid username or password.'
    return
  }

  const redirect = route.query.redirect

  if (typeof redirect === 'string' && redirect.startsWith('/')) {
    router.push(redirect)
  } else {
    router.push('/dashboard')
  }
}
</script>

<template>
  <section class="login-card">
    <p class="eyebrow">EMPLOYEE PORTAL</p>
    <h1>Welcome back</h1>
    <p class="muted">Sign in to access your workspace.</p>

    <form @submit.prevent="handleLogin">
      <label for="username">Username</label>
      <input
        id="username"
        v-model.trim="username"
        autocomplete="username"
        required
      />

      <label for="password">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        autocomplete="current-password"
        required
      />

      <p v-if="errorMessage" class="error">
        {{ errorMessage }}
      </p>

      <button type="submit" class="primary-button">
        Sign In
      </button>
    </form>

    <div class="demo-accounts">
      <strong>Demo accounts</strong>
      <p>Employee: employee / emp123</p>
      <p>Admin: admin / admin123</p>
    </div>
  </section>
</template>

<style scoped>
.login-card {
  max-width: 440px;
  margin: 20px auto;
  padding: 32px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 4px 18px #0f172a0a;
}

.eyebrow {
  color: #2563eb;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
}

form {
  display: grid;
  gap: 12px;
  margin-top: 24px;
}

label {
  font-weight: bold;
  font-size: 14px;
}

input {
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 12px;
}

.error {
  color: #dc2626;
  font-size: 14px;
}

.demo-accounts {
  margin-top: 24px;
  padding: 16px;
  background: #eff6ff;
  border-radius: 8px;
  font-size: 13px;
}

.demo-accounts p {
  margin-bottom: 0;
}
</style>
