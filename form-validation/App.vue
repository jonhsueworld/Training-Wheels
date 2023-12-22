<template>
    <div class="form">
        <form class = "form-container" @submit.prevent="submit">
            <h1 class="welcome"> <img src = "https://cdn.betterttv.net/emote/60a2f82567644f1d67e88214/3x.png"> 
                Log in please
            </h1>

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

            <label class="remember"> Remember me
                <input type="checkbox">
            </label>

            <my-button
                background="darkslateblue"
                color="white"
                :disabled="!valid"
            />

           <p class="trouble">
                <b><a href="index.html">Don't have an account? Sign up</a><br></b>
           </p>

           <p class="trouble">
                <b><a href="index.html">Trouble logging in?</a><br></b>
           </p>
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
    max-width: 600px;
    width:50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid white;
    border-radius: 5px;   
    padding: 20px; 
    background-color: white;
    font-family: 'Open Sans', sans-serif;
}

.form-container {
    width: 500px;
}

.welcome {
    text-align: center;
    font-size: 1.75em;
    padding-bottom: 20px;
}

img {
    width: 50px;
}

.remember {
    display: inline-block;
    text-align: left;
    padding-bottom: 30px;
}

.trouble {
    display: block;
    text-align: center;
    padding-top: 10px;
}

a:link {
    text-decoration: none;
    color: darkslateblue;
}

a:hover {
    filter: brightness(200%);
}

</style>