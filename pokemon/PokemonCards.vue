<template>
    <div class="cards">
        <card
            v-if="pokemon"
        >
            <template v-slot:evolutions>
                <img class="evolve" :src="pokemon.artwork"
                    v-for="(pokemon) in pokemons"
                    :key="pokemon.id"
                    @click="click(pokemon)"
                >
            </template>

            <template v-slot:icon>
                <img class="sprite" :src="pokemon.sprite">
            </template>

            <template v-slot:content>
                <img :src="pokemon.artwork">
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

            <template v-slot:species>
                {{ pokemon.genus }}
            </template>

            <template v-slot:size>
                {{ pokemon.height }}
            </template>

            <template v-slot:weight>
                {{ pokemon.kgs }}
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
            pokemons: {
                type: Array,
                default: []
            }
        },

        data () {
            return { 
                pokemon: null
            }
        },

        watch: {
            pokemons: {
                handler (newValue) {
                    if (newValue && newValue.length > 0) {
                        this.pokemon = this.pokemons[0]
                    }
                    else {
                        this.pokemon = null
                    }
                },
                deep: true
            }
        },

        methods: {
            click(pokemon) {
                this.pokemon = pokemon
            }
        }
    }
</script>

<style scoped>
    img {
        width: 50%;
    }

    .evolve {
        width: 5%;
        background-color: #454545;
        border: 1px solid #383838;
        border-radius: 25px;
        cursor: pointer;
    }

    .sprite {
        width: 60px;
        height: 60px;
    }
</style>