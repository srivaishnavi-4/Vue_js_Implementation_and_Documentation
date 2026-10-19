
<script setup>
import { currentUser } from '../auth'
</script>

<template>
  <section class="panel">
    <p class="muted">EMPLOYEE WORKSPACE</p>
    <h1>Welcome, {{ currentUser?.username }}!</h1>

    <p>
      You have successfully accessed the protected dashboard.
    </p>

    <div class="stats">
      <article>
        <h2>12</h2>
        <p>Assigned tasks</p>
      </article>

      <article>
        <h2>8</h2>
        <p>Completed tasks</p>
      </article>

      <article>
        <h2>4</h2>
        <p>Pending tasks</p>
      </article>
    </div>

    <p class="muted">
      Try opening /admin as an employee. The router will deny access.
    </p>
  </section>
</template>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  margin: 28px 0;
}

.stats article {
  padding: 20px;
  background: #eff6ff;
  border-radius: 10px;
}

.stats h2 {
  color: #2563eb;
  margin: 0;
}

.stats p {
  margin-bottom: 0;
}
</style>
