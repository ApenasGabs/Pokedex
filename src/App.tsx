import { useEffect, useState } from "react";
import { getPokemon } from "./api";
import "./App.css";
import Pokedex from "./components/Pokedex/Pokedex";
import { PokeList } from "./components/Pokedex/Pokedex.types";
function App() {
  const [isLoading, setIsloading] = useState(false);
  const [pokemons, setPokemons] = useState<PokeList>();
  console.log("loading: ", isLoading);
  const fetchPokemons = async () => {
    try {
      setIsloading(true);
      const result = await getPokemon();
      setPokemons(result);
      setIsloading(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Pokedex pokemons={pokemons?.results} isLoading={isLoading} />
      </header>
    </div>
  );
}

export default App;
