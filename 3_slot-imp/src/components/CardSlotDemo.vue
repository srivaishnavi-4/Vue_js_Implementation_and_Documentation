<script setup>
import { defineProps } from 'vue'

// Accepting the input text from the parent via props
defineProps({
  liveText: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="card">
    <!-- 1. NAMED SLOT: Header Region -->
    <header class="card-header">
      <slot name="header">
        <h3>Default Header Title</h3>
      </slot>
    </header>

    <!-- 2. DEFAULT SLOT: Main Body Region -->
    <div class="card-body">
      <slot>
        <p>This is default fallback body content.</p>
      </slot>
    </div>

    <!-- Live Display of Prop -->
    <div class="prop-display">
      <small>Prop Data Received: <strong>{{ liveText || 'Nothing typed yet' }}</strong></small>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid #42b883;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  max-width: 450px;
}
.card-header {
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
.prop-display {
  border-top: 1px solid #eee;
  padding-top: 0.5rem;
  margin-top: 1rem;
  color: #555;
}
</style>