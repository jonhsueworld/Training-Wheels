<template>
  <div class="card">
    <div class="title">
      <slot name="title" />
    </div>

    <div class="content">
      <slot name="content" />
    </div>

    <div class="description">
      <slot name="description" />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.card {
  border-radius: 8px;
  margin: 0 10px;
  max-width: 260px;
  cursor: pointer;
  transition: 0.2s;
}
.title, .content, .description {
  padding: 16px;
  text-align: center;
}

.title {
  font-size: 1.25em;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 1px 1px 15px white;
}
</style>
