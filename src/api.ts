// import { Result } from "./components/Pokedex/Pokedex.types";

export const searchPokemon = async (pokemon: string) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};
const getPokemonInfo = async (props: { pokemon: any }) => {
  const { pokemon } = props;
  try {
    let url = pokemon;
    const response = await fetch(url.url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};

// export const getPokelist = async (limit = 150, offset = 0) => {
//   try {
//     let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
//     const response = await fetch(url);
//     return await response.json();
//   } catch (error) {
//     console.log("error: ", error);
//   }
// };

export const getPokelist = (qtd = 150) => {
  const pokemonList = new Array(qtd).fill({
    name: "Null",
    types: [],
    img: "https://cdn.dribbble.com/users/4040675/screenshots/10545158/media/85a3329e4202059593616d3b42f16e8d.png",
  });
  const pokeData = pokemonList.map(async (item, idx) => {
    const data = await getPokemonInfo(item);
    console.log("data: ", data);
    return data;
  });
  return pokeData;
};
