import { Result } from "./Pokedex.types";
import { List } from "antd";

const Pokedex = (props: { pokemons: Result[] | undefined; isLoading: any }) => {
  const { pokemons } = props;
  const pokeList = (
    <List
      grid={{ gutter: 16, column: 6 }}
      dataSource={pokemons}
      renderItem={(pokemon) => <List.Item>{pokemon.name}</List.Item>}
    />
  );
  const noPoke = <p>Ainda nao ha nada por aqui </p>;
  const resultado = pokemons ? pokeList : noPoke;
  return <>{resultado}</>;
};

export default Pokedex;
