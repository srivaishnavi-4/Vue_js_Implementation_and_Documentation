<script setup lang="ts">
import { ref } from 'vue'
import { useStudentStore } from './stores/student'
import StudentCard from './components/StudentCard.vue'

const store = useStudentStore()

const name = ref('')
const email = ref('')

function submitStudent() {
  const added = store.addStudent(name.value, email.value)

  if (added) {
    name.value = ''
    email.value = ''
  }
}

function removeStudent(id: number) {
  store.removeStudent(id)
}
</script>

<template>
  <main>
    <h1>Student Management</h1>

    <form @submit.prevent="submitStudent">
      <label for="student-name">Name</label>
      <input
        id="student-name"
        v-model="name"
        placeholder="Enter student name"
      />

      <label for="student-email">Email</label>
      <input
  id="student-email"
  v-model="email"
  type="text"
  placeholder="Enter student email"
/>

      <button type="submit">Add Student</button>
    </form>

    <p v-if="store.error" role="alert">
      {{ store.error }}
    </p>

    <h2>Total students: {{ store.totalStudents }}</h2>

    <p v-if="store.students.length === 0">
      No students added yet.
    </p>

    <StudentCard
      v-for="student in store.students"
      :key="student.id"
      :student="student"
      @remove="removeStudent"
    />
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 24px;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

main {
  max-width: 700px;
  margin: auto;
}

form {
  display: grid;
  gap: 10px;
  padding: 20px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
}

input, form button {
  padding: 10px;
}

form button {
  cursor: pointer;
}
</style>