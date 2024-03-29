import { shallowMount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { pokemons } from "../mocks/pokemons.mock";
describe("PokemonPage tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("should match with snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should call mixPokemonArray when component mount", () => {
    const mixPokemonArraySpy = jest.spyOn(
      PokemonPage.methods,
      "mixPokemonArray"
    );
    shallowMount(PokemonPage);
    expect(mixPokemonArraySpy).toBeCalledTimes(1);
  });

  test("should match with snapshot when pokemons exists", async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          message: null,
          pokemon: pokemons[0],
          pokemonsArr: pokemons,
          showAnswer: false,
          showPokemon: false,
        };
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should show PokemonPicture & PokemonOptions components", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          message: null,
          pokemon: pokemons[0],
          pokemonsArr: pokemons,
          showAnswer: false,
          showPokemon: false,
        };
      },
    });

    const picture = wrapper.find("pokemon-picture-stub");
    const options = wrapper.find("pokemon-options-stub");

    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();
    expect(picture.attributes("pokemonid")).toBe("1");
    expect(options.attributes("pokemons")).toBeTruthy();
  });

  test("should call checkAnswer & update state", async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          message: null,
          pokemon: pokemons[0],
          pokemonsArr: pokemons,
          showAnswer: false,
          showPokemon: false,
        };
      },
    });

    await wrapper.vm.checkAnswer(1);
    const message = wrapper.find("h3");
    expect(message.exists()).toBeTruthy();
    expect(message.text()).toBe(`You're right!, ${pokemons[0].name}`);
    expect(wrapper.vm.showPokemon).toBeTruthy();
    expect(wrapper.vm.showAnswer).toBeTruthy();

    await wrapper.vm.checkAnswer(2);

    expect(message.text()).toBe(`Oops you failed, was ${pokemons[0].name} :(`);
  });
});
