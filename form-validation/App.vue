<template>
    <div class="form">
        <form @submit.prevent="submit">
            <my-input 
                name="Username"
                :rules="{ required: true, min: 5 }"
                :value="username.value"
                :error="username.error"
                @update="update"
            />

            <my-input 
                name="Password"
                :rules="{ required: true, min: 10 }"
                :value="password.value"
                :error="password.error"
                type="password"
                @update="update"
            />

            <my-button
                background="darkslateblue"
                color="white"
                :disabled="!valid"
            />
        </form>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'
export default {
    components: {
        MyButton, 
        MyInput
    }, 

    data() {
        return {
            username: {
                value: '',
                error: ''
            },
            password: {
                value: '',
                error: ''
            }
        }
    },

    computed: {
        valid() {
            return (
                !this.username.error &&
                !this.password.error &&
                this.username.value.length > 0 &&
                this.password.value.length > 0
            )
        }
    },

    methods: {
        submit() {
            console.log('Event')
        },
        update({ name, value, error }) {
            this[name].value = value
            this[name].error = error
        }
    }
}
</script>

<style scoped>
.form {
    display: flex;
    justify-content: center;
    min-width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid white;
    border-radius: 5px;   
    padding: 30px; 
    background-color: white;
}

</style>