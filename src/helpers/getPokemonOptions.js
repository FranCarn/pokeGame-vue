import pokemonApi from "./pokemonApi";

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));
  return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);

  return await getPokemonNames(mixedPokemons.splice(0, 4));
};

const getPokemonNames = async ([a, b, c, d] = []) => {
  //   return await Promise.all(
  //     pokemons.map(async (item) => {
  //       const { data } = await pokemonApi(`/${item}`);
  //       return {
  //         name: data.name,
  //         id: data.id,
  //       };
  //     })
  //   );

  const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  const [poke1, poke2, poke3, poke4] = await Promise.All(promiseArr);

  return [
    { name: poke1.data.name, id: poke1.data.id },
    { name: poke2.data.name, id: poke2.data.id },
    { name: poke3.data.name, id: poke3.data.id },
    { name: poke4.data.name, id: poke4.data.id },
  ];
};

export default getPokemonOptions;
