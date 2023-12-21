<template>
    <button 
        :style="{ background, color }"
        :disabled="disabled"
    >
        Login
    </button>
</template>

<script>
export default {
    props: {
        background: {type: String},
        color: {type: String},
        disabled: {type: Boolean}
    }
}
</script>

<style scoped>
button:disabled {
    opacity: 0.5;
}
button {
    display: block;
    width: 300px;
    background: none;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 10px 40px;
    font-size: 16px;
    cursor: pointer;
    margin: auto;
}
button:hover {
    filter: brightness(200%)
}
</style>