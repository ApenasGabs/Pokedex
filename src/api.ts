import { Result } from "./components/Pokedex/Pokedex.types";

export const searchPokemon = async (pokemon: string) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};
export const getPokemonInfo = async (props: { pokemon: Result }) => {
  const { pokemon } = props;
  try {
    let url = pokemon.url;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getPokelist = async (limit = 150, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};
