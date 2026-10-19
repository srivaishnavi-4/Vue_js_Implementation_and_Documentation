
<script setup>
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { currentUser } from '../auth'

const name = ref(currentUser.value?.username || '')
const savedName = ref(name.value)
const message = ref('')

const hasUnsavedChanges = () => {
  return name.value !== savedName.value
}

function saveProfile() {
  savedName.value = name.value
  message.value = 'Profile changes saved successfully.'
}

onBeforeRouteLeave(() => {
  if (!hasUnsavedChanges()) {
    return true
  }

  const shouldLeave = window.confirm(
    'You have unsaved changes. Leave this page without saving?'
  )

  if (!shouldLeave) {
    return false
  }

  return true
})
</script>

<template>
  <section class="panel">
    <h1>Edit Profile</h1>
    <p class="muted">
      Change your display name to test the navigation guard.
    </p>

    <form @submit.prevent="saveProfile" class="profile-form">
      <label for="displayName">Display name</label>

      <input
        id="displayName"
        v-model="name"
        required
      />

      <p v-if="hasUnsavedChanges()" class="warning">
        You have unsaved changes.
      </p>

      <button class="primary-button" type="submit">
        Save Changes
      </button>

      <p v-if="message" class="success">
        {{ message }}
      </p>
    </form>
  </section>
</template>

<style scoped>
.profile-form {
  display: grid;
  gap: 14px;
  max-width: 450px;
  margin-top: 24px;
}

.profile-form label {
  font-weight: bold;
}

.profile-form input {
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 12px;
}

.warning {
  color: #b45309;
}

.success {
  color: #15803d;
}
</style>
