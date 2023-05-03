import axios from "axios";
import NavBar from "../components/Navbar";
import { PokeDex } from "../components/Pokedex/Pokedex";
import { Pokemon } from "../components/Pokemon/PokemonCard.types";
import { useState } from "react";

const pokeMock: Pokemon = {
  name: "Poke test",
  url: "https://cdn.dribbble.com/users/1770381/screenshots/5500073/media/0a1c59d162ab651d4881e88bee21b63c.png",
};

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  for (let i = 0; i > 10; i++) {
    console.log("baseUrl: ", baseUrl);
  }
  const getPokelist = (und = 150) => {
    const urlLIst = new Array(und)
      .fill("")
      .map((_, idx) => `https://pokeapi.co/api/v2/pokemon/${idx}`);
    console.log("urlLIst: ", urlLIst);
    axios
      .all(urlLIst.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };
  getPokelist();
  return (
    <div>
      <NavBar />
      <PokeDex Pokemon={pokemons} />
      <div>Made with ❤️ by Apenasgabs</div>
    </div>
  );
};
