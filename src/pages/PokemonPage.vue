<template>
  <div>
    <h1>Who's that pokemon?</h1>

    <PokemonPicture :pokemonId="4" :showPokemon="false" />
    <!-- TODO: Options -->
    <PokemonOptions :pokemons="pokemonsArr" />
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions";
import PokemonPicture from "@/components/PokemonPicture";
import getPokemonOptions from "@/helpers/getPokemonOptions";
export default {
  name: "PokemonPage",
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonsArr: [],
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonsArr = await getPokemonOptions();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
