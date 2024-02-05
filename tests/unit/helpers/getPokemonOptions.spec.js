import getPokemonOptions, {
  getPokemonNames,
  getPokemons,
} from "@/helpers/getPokemonOptions";

describe("getPokemonOptions helper test suite", () => {
  test("should return numers array", () => {
    const arr = getPokemons();
    expect(arr).toHaveLength(650);
    expect(arr[0]).toBe(1);
    expect(arr[500]).toBe(501);
    expect(arr[649]).toBe(650);
  });
  test("should return 4 elements in one array with name and id", async () => {
    const arr = await getPokemonNames([1, 122, 192, 492]);
    expect(arr).toHaveLength(4);
    expect(arr[0]).toHaveProperty("name");
    expect(arr[0]).toHaveProperty("id");
    expect(arr).toStrictEqual([
      { name: "bulbasaur", id: 1 },
      { name: "mr-mime", id: 122 },
      { name: "sunflora", id: 192 },
      { name: "shaymin-land", id: 492 },
    ]);
  });
  test("should getPokemonOptions return mixed array", async () => {
    const randomPokemons = await getPokemonOptions();
    expect(randomPokemons).toHaveLength(4);
    expect(randomPokemons[0]).toHaveProperty("name");
    expect(randomPokemons[0]).toHaveProperty("id");
    expect(randomPokemons).toEqual([
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
    ]);
  });
});
