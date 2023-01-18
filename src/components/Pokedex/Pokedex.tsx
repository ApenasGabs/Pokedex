import { Result } from "./Pokedex.types";
import { Card, List } from "antd";

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
];

const Pokedex = (props: { pokemons: Result[] | undefined; isLoading: any }) => {
  const { pokemons, isLoading } = props;
  console.log("isLoading: ", isLoading);
  console.log("pokemons: ", pokemons);
  const pokeList = pokemons?.map((pokemon, idx) => {
    return (
      <>
        <div key={idx}>{pokemon.name}</div>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={pokemon.name}>
                <img src={pokemon.sprites.other["official-artwork"].front_default}
              </Card>
            </List.Item>
          )}
        />
      </>
    );
  });
  const noPoke = () => {
    return <p>Ainda nao ha nada por aqui </p>;
  };
  const resultado = pokemons ? pokeList : noPoke;
  return <>{resultado}</>;
};

export default Pokedex;
