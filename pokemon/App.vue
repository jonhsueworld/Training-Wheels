<template>
    <select @change="fetchTemp(selectIds)" v-model="selectIds" class="dropmenu">
        <option disabled value="">Kanto Starters</option>
        <option :value="bulbasaurIds">0001 Bulbasaur</option>
        <option :value="charmanderIds">0004 Charmander</option>
        <option :value="squirtleIds">0007 Squirtle</option>
    </select>

    <pokemon-cards 
        :pokemons="pokemons"
    />
</template>

<script>
    import PokemonCards from './PokemonCards.vue'

    export default {
        components: {
            PokemonCards
        },

        data() {
            return {
                pokemons: [],
                bulbasaurIds: [1, 2, 3],
                charmanderIds: [4, 5, 6],
                squirtleIds: [7, 8, 9],
                evolutions: [],
                selectIds: [1, 2, 3],
                api: 'https://pokeapi.co/api/v2/pokemon'
            }
        },

        async created() {
            this.pokemons = await this.fetchData(this.selectIds)
        },

        methods: {
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
                let data
                let pkmn

                data = await this.fetchAPI(this.api, ids)
                pkmn = data.map(datum => ({
                    id: datum.id, 
                    name: datum.name,
                    sprite: datum.sprites.other['showdown'].front_default,
                    artwork: datum.sprites.other['official-artwork'].front_default,
                    types: datum.types.map(type => type.type.name),
                    genus: "",
                    height: datum.height/10,
                    kgs: datum.weight/10
                }))

                data = await this.fetchAPI(`${this.api}-species`, ids)                
                for(let i = 0; i<pkmn.length; i++) {
                    pkmn[i].genus = data[i].genera[7].genus;
                }
                return pkmn
            },
            async fetchTemp (value) {
                this.pokemons = await this.fetchData(value)
            }
        }

    }
</script>

<style scoped>
.dropmenu {
    position: absolute;
        top: 15%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #CEBC77;
}

</style>