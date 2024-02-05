import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture.vue";

describe("pokemonPicture tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });
    jest.clearAllMocks();
  });
  afterEach(() => {
    wrapper = null;
  });
  test("should match with snapshot", () => {
    expect(wrapper).toMatchSnapshot("pokemonPicture");
  });
  test("should show hidden picture with pokemon 100", () => {
    const [hideImg, showImg] = wrapper.findAll("img");
    expect(hideImg.exists()).toBeTruthy();
    expect(hideImg.attributes("src")).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg"
    );
    expect(showImg).toBeUndefined();
    expect(hideImg.classes("hidden-pokemon")).toBeTruthy();
  });
  test("should show pokemon image if showpicture:true in props", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });
    const img = wrapper.find("img");

    expect(img.exists()).toBeTruthy();
    expect(img.classes("fade-in")).toBeTruthy();
  });
});
