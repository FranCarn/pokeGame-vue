<template>
  <h1 v-if="!pokemon">Loading...</h1>

  <div v-else>
    <h1>Who's that pokemon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonsArr" @selection="checkAnswer" />

    <template v-if="showAnswer">
      <h3 class="fade-in">{{ message }}</h3>
      <button @click="resetGame">New Game</button>
    </template>
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
      message: null,
      pokemon: null,
      pokemonsArr: [],
      showAnswer: false,
      showPokemon: false,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonsArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonsArr[rndInt];
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (selectedId === this.pokemon.id) {
        this.message = `You're right!, ${this.pokemon.name}`;
      } else this.message = `Oops you failed, was ${this.pokemon.name} :(`;
    },
    resetGame() {
      this.pokemon = null;
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
