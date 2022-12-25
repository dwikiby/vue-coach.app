<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
