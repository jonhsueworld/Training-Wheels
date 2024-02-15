<template>
  <div>{{ post.likes }}</div>
  
  <button @click="handleLike">
    <div class ="heart-btn">
      <input type="checkbox" />
      <button><span>Like</span></button>
    </div>
  </button>

  <tag
    v-for="tag in post.tags"
    :key="tag"
    :tag="tag"
  />
</template>

<script>
import Tag from './Tag.vue'
import { store } from './store.js'

export default {
  components: {
    Tag
  },
  props: {
    post: {
      // id, title, content, likes, hashtags
      type: Object
    }
  },

  setup(props) {
    const handleLike = () => {
      store.likePost(props.post)
    }

    return {
      handleLike
    }
  }
}
</script>

<style scoped>
  .heart-btn {
    width: 4em;
    height: 1.25em;
    position: relative;
    font-size: 1.2em;
    margin: 10px 0 30px 0;
  }

  button {
    background: transparent;
    outline: none;
    border: none;
    color: white;
    font-size: 1em;
  }

  .heart-btn button::before, .heart-btn button::after {
    content: '';
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: #529ECC;
    z-index: 0;
    transition: 0.2s;
  }

  .heart-btn button::before {
    left: 0;
    border-radius: 1em 0 0 1em;
  }

  .heart-btn button::after {
    right: 0;
    border-radius: 0 1em 1em 0;
  }

  .heart-btn span {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .heart-btn:hover {
    opacity: 0.8;
  }

  input[type="checkbox"] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    opacity: 0;
    cursor: pointer;
    z-index: 2;
  }


  input[type="checkbox"]:checked + button::before {
    transform: rotate(45deg) translate(0.5em, -0.525em);
  }

  input[type="checkbox"]:checked + button::after {
  transform: rotate(-45deg) translate(-0.5em, -0.525em);
  }

  input[type="checkbox"]:checked + button span {
    opacity: 0;
  }
</style>