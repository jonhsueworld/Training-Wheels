<template class="body">
  <div id="wrapper">
    <div>
      <input 
        type="search"
        size="30"
        placeholder="Search"
        :value="currentTag" 
        @input="handleInput"
      />
    </div>
    
    <div class="cards">
      <card
        v-for="post in filteredPosts"
        :key="post.id"
      >
        <template v-slot:title>
          {{ post.title }}
        </template>

        <template v-slot:content>
          {{ post.content }}
        </template>

        <template v-slot:description>
          <controls 
            :post="post" 
          />
        </template>
      </card>
    </div>
      <button @click="reset" class="reset">Reset</button>
      <button @click="add" class="add"> Add </button>
      <div class = "forms" v-if = "showAddForm"> 
        <my-input 
                label="Title"
                :modelValue="editPost.title"
                @update="editPost.title = $event"
        />

        <my-input 
                label="Content"
                :modelValue="editPost.content"
                @update="editPost.content = $event"
        />

        <my-input 
                label="Tags"
                :modelValue="tagString"
                @update="tagString = $event"
        />
        
        
        <br><button class ="save" @click ="save"> Save</button> <br>
        <button class = "cancel" @click="cancel"> Cancel</button>
      </div>
  </div>
</template>

<script>
import { computed, ref, reactive } from 'vue'
import { store } from './store.js'
import Card from './Card.vue'
import Controls from './Controls.vue'
import MyInput from './MyInput.vue' 

export default {
  components: {
    Card,
    Controls,
    MyInput
  },

  setup() {
    const showAddForm = ref(false)
    const tagString = ref(null)

    const handleInput = ($event) => {
      store.setTag($event.target.value)
    }

    const reset = () => { //working but temporary
        window.location.href=window.location.href
    }

    const add = () => {
        showAddForm.value = true
    }

    const save = () => {
        editPost.id = store.posts.length
        tagParser(tagString.value)
        store.addPost(editPost)
        cancel()
    }

    const editPost = reactive({
        id: null,
        title: "fake",
        content: null,
        likes: 0,
        tags: [],
        isLiked: false
    })    

    const cancel = () => {
        showAddForm.value = false
    }

    const tagParser = (tag) => {
        const sanitizedTag = tag.replace(/\s/g, "")
        let tagArray = sanitizedTag.split(",")
        editPost.tags = tagArray
    }

    return {
      showAddForm,
      tagString,

      handleInput,
      reset,
      add,
      save,
      cancel,
      editPost,
      tagParser,

      filteredPosts: computed(() => store.posts),
      currentTag: computed(() => store.state.currentTag),
    }
  }
}
</script>

<style scoped>

.cards {
  display: flex;
  justify-content: center;
}

.card {
  background-color: #36465D;
  color: silver;
  font-family: 'Verdana';
}

input {
  font-size: 30px;
  color: white;
  background-color: #434D58;
  height: 50px;
  text-align: center;
  padding: 5px 5px 5px 25px;
  margin: 30px;
  border-radius: 20px;
  border: 1px;
  font-family: Arial, sans-serif; 
}

input[type=search]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  padding: .2em .4em;
  height: 10px;
  width: 10px;
  background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg) no-repeat 50% 50%;
}

input:hover {
    border: 1px solid;
}

.reset, .add, .save, .cancel {
  background-color: #529ECC;
  color: white;
  font-family: Arial, sans-serif; 
  font-size: 18px;
  font-weight: bold;
  padding: 5px 5px 5px 5px;
  margin: 20px 0 0 0;
  border-radius: 20px;
  border: 1px;
  width: 120px;
  height: 40px;
}

.reset:hover, .add:hover {
    opacity: 0.9;
    cursor: pointer;
}

.add {
  position: absolute;
  left: 90%;
  top: 90%;
}

.reset {
  position: absolute;
  left: 5%;
  top: 90%;
}

.forms {
    width: 100%;
    color: silver;
    margin: 20x;
    padding: 20px;
    text-align: center;
}

#wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>