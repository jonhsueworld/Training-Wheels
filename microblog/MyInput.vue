<template>
    <div class="label">
        <label :for="label">{{ label }}</label>


    </div>

    <input 
            :id="label" 
            :modelValue="modelValue"
            @input="input"
        />
</template>

<script>

export default {
  props: {
    modelValue: {
        type: String,
        default: null
    },

    label: {
        type: String,
        default: null
    }


  },

  emits: ['update'],

  setup(props, {emit}) {


   const input = (event) => {
            emit('update', event.target.value)
        }


    return {
        input
    }
  }
}
</script>
