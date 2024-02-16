<template>
  <div 
    class="tag"
    @click="click"
  >
    #{{ tag }}
  </div>
</template>

<script>
import { store } from './store.js'

export default {
  props: {
    tag: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const click = () => {
      store.setTag(props.tag)
    }

    return {
      click
    }
  }
}
</script>

<style scoped>

.tag:hover {
  color: cornflowerblue;
  cursor: pointer;
}
</style>