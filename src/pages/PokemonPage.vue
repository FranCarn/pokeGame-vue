<template>
  <div>
    <h1>Who's that pokemon?</h1>

    <!-- TODO: Picture -->
    <PokemonPicture />
    <!-- TODO: Options -->
    <PokemonOptions />
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions";
import PokemonPicture from "@/components/PokemonPicture";

export default {
  name: "PokemonPage",
  components: {
    PokemonOptions,
    PokemonPicture,
  },
};
</script>
