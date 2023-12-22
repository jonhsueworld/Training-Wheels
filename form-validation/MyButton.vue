<template>
    <button 
        :style="{ background, color }"
        :disabled="disabled"
    >
        Log in
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
button {
    display: block;
    width: 100%;
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
button:disabled {
    opacity: 0.5;
    filter: brightness(100%);
    cursor: not-allowed;
}

</style>