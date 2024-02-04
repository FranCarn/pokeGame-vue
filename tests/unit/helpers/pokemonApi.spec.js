import pokemonApi from "@/helpers/pokemonApi";

describe("tests on pokemonApi", () => {
  test("should have axios in the initial configuration of the base URL", () => {
    const basePath = "https://pokeapi.co/api/v2/pokemon";
    expect(pokemonApi.defaults.baseURL).toBe(basePath);
  });
});
