<template>
    <div class="label">
        <label :for="label">{{ label }}</label>
    </div>

    <input class = "input"
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

<style scoped>
.label {
    margin: 5px;
    font-weight: bold;
}

.input {
    width: 20%;
    background-color: #36465D;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    text-align: left;
    color: white;
}

</style>