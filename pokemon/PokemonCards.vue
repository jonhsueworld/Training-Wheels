<template>
    <form name="nav">x </form>
    <div class="cards">
        <card
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            @click="click(pokemon)"
            :class="{ 
                opace: selectedId && pokemon.id !== selectedId
            }"
            class="card"
        >

            <template v-slot:content>
                <img :src="pokemon.sprite">
            </template>

            <template v-slot:title>
                {{ pokemon.name }}
            </template>

            <template v-slot:index>
                {{ pokemon.id }}
            </template>

            <template v-slot:description>
                <div v-for="type in pokemon.types"
                    :key="type"
            >
                    {{type}}
                </div>
            </template>

            <!--<template v-slot:species>
                {{ pokemon.genus }}
            </template>-->

            <template v-slot:size>
                {{ pokemon.height }}
            </template>

            <template v-slot:weight>
                {{ pokemon.kgs }}
            </template>

            <template v-slot:evolutions>
                <img class="evolve" :src="pokemon.sprite">
            </template>
        </card>
    </div>
</template>

<script>
    import Card from './Card.vue'
    export default {
        components: {
            Card
        },

        props: {
            selectedId: {
                type: Number,
            },
            pokemons: {
                type: Array,
                default: []
            }
        },
        methods: {
            click(pokemon) {
                this.$emit('chosen', pokemon)
            }
        }
    }
</script>

<style scoped>
    .opace {
        opacity: 0.5;
    }

    .card:hover {
        opacity: 1.0;
    }

    img {
        width: 50%;
    }

    .evolve {
        width: 5%;
        background-color: #454545;
        border: 1px solid #383838;
        border-radius: 25px;
    }
</style>