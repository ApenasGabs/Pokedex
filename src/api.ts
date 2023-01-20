import { Result } from "./components/Pokedex/Pokedex.types";
import { Pokemon } from "./components/Pokemon/Pokedex/PokemonCard.types";

export const searchPokemon = async (pokemon: string) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};
export const getPokemonInfo = async (pokemonList: Result[]) => {
  const pokemonDetails: Pokemon[] = [];
  pokemonList.map(async (pokemon) => {
    try {
      let url = pokemon.url;
      const response = await fetch(url);
      return pokemonDetails.push(await response.json());
    } catch (error) {
      console.log("error: ", error);
    }
  });
  console.log("pokemonDetails: ", pokemonDetails);
  return pokemonDetails;
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
