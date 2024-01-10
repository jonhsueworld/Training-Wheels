<template>
    <pokemon-cards 
        :pokemons="pokemons"
        @chosen="fetchEvolutions"
        :selectedId="selectedId"
    />

    <pokemon-cards 
        :pokemons="evolutions"
    />
</template>

<script>
    import PokemonCards from './PokemonCards.vue'
    const api = 'https://pokeapi.co/api/v2/pokemon'
    const IDS = [1]

    export default {
        components: {
            PokemonCards
        },

        data() {
            return {
                pokemons: [],
                evolutions: [],
                selectedId: null
            }
        },

        async created() {
            this.pokemons = await this.fetchData(IDS)
        },

        methods: {
            async fetchEvolutions(pokemon) {
                this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2])
                this.selectedId = pokemon.id
            },

            async fetchAPI(api, ids){
                const responses = await Promise.all(
                    ids.map ( ids => window.fetch(`${api}/${ids}/`))
                )
                const json = await Promise.all(
                    responses.map(data => data.json())
                )

                return json
            },
            async fetchData(ids) {
                let data;
                let pkmn

                data = await this.fetchAPI(api, ids)
                pkmn = data.map(datum => ({
                    id: datum.id, 
                    name: datum.name,
                    sprite: datum.sprites.other['official-artwork'].front_default,
                    types: datum.types.map(type => type.type.name),
                    genus: "",
                    height: datum.height/10,
                    kgs: datum.weight/10
                }))
                console.log(pkmn)

                data = await this.fetchAPI(`${api}-species`, ids)                
                for(let p = 0; p<pkmn.length; p++) {
                    pkmn[p].genus = data[p].genera[7].genus;
                }

                return pkmn
            }
        }

    }
</script>

<style scoped>
</style>