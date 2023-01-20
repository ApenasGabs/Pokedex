import { useEffect, useState } from "react";
import { Layout } from "antd";
import { getPokelist } from "./api";
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
      const result = await getPokelist();
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
  const noPoke = <p>Ainda nao ha nada por aqui </p>;

  return (
    <div className="App">
      <header className="App-header">
        {pokemons ? (
          <Pokedex pokemons={pokemons.results} isLoading={isLoading} />
        ) : (
          noPoke
        )}
      </header>
      <Layout.Footer style={{ textAlign: "center" }}>
        Made with ❤️ by Apenasgabs
      </Layout.Footer>
    </div>
  );
}

export default App;
