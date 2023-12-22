<template>
    <div class="label">
        <label :for="name">{{ name }}</label>


    </div>

    <input 
            :id="name" 
            :value="value"
            :type ="type"
            @input="input"
        />
        
        <div class="error">{{ error }}</div>
</template>

<script>
export default {
    emits: ['update'],

    props: {
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            required: true
        },
        value: {
            type: String, 
            required: true
        },
        rules: {
            type: Object,
            default: {}
        },
        error: {
            type: String
        }
    },

    created() {
        this.$emit('update', {
            name: this.name.toLowerCase(),
            value: this.value,
            error: this.validate(true)
        })
        
    },

    methods: {
        input($event) {
            this.$emit('update', {
                name: this.name.toLowerCase(),
                value: $event.target.value,
                error: this.validate($event.target.value)
            })
        },

        validate(value) {
            if (this.rules.required && value.length === 0) {
                return 'Value is required.'
            }

            if (this.rules.min && value.length < this.rules.min) {
                return `Minimum length is ${this.rules.min}.`
            }
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
    margin-top: 5px;
    height: 15px;
    text-align: right;
    font-weight: normal;
}
.label {
    display: block;
    margin: 10px 0;
    text-align: left;
    font-weight: bold;
}
input {
    display: block;
    width: 100%;
    background: none;
    color: black;
    border: 1px solid silver;
    border-radius: 5px;
    padding: 10px 0;
    font-size: 16px;
    text-align: center;
    
}
</style>