import { useMemo } from "react";
import { getPokemonInfo } from "../../api";
import PokemonCard from "../Pokemon/Pokedex/PokemonCard";
import { Result } from "./Pokedex.types";
import { List } from "antd";

const Pokedex = (props: { pokemons: Result[]; isLoading: any }) => {
  const { pokemons } = props;
  const pokelistDetails = useMemo(() => {
    return getPokemonInfo(pokemons);
  }, [pokemons]);

  const pokeList = (
    <List
      grid={{ gutter: 16, column: 6 }}
      dataSource={pokemons}
      renderItem={(pokemon, idx) => (
        <List.Item>
          {/* {pokelistDetails} */}
          <PokemonCard Pokemon={pokemon} />
        </List.Item>
      )}
    />
  );
  const noPoke = <p>Ainda nao ha nada por aqui </p>;
  const resultado = pokemons ? pokeList : noPoke;
  return <>{resultado}</>;
};

export default Pokedex;
