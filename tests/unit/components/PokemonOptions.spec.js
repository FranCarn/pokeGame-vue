import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemons } from "../mocks/pokemons.mock";

describe("Pokemon Options component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    });
  });

  test("should match with snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should show four options correctly", () => {
    const li = wrapper.findAll("li");
    expect(li).toHaveLength(4);

    expect(li[0].text()).toBe("bulbasaur");
    expect(li[1].text()).toBe("mr-mime");
    expect(li[2].text()).toBe("sunflora");
    expect(li[3].text()).toBe("shaymin-land");
  });

  test('should emit "selection" with params when click option', () => {
    const [li1, li2, li3, li4] = wrapper.findAll("li");

    li1.trigger("click");
    li2.trigger("click");
    li3.trigger("click");
    li4.trigger("click");

    expect(wrapper.emitted("selection")).toHaveLength(4);
    expect(wrapper.emitted("selection")[0]).toEqual([1]);
    expect(wrapper.emitted("selection")[1]).toEqual([122]);
    expect(wrapper.emitted("selection")[2]).toEqual([192]);
    expect(wrapper.emitted("selection")[3]).toEqual([492]);
  });
});
