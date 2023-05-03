import PokemonCard from "../Pokemon/PokemonCard";
import { Pokemon } from "../Pokemon/PokemonCard.types";

export const PokeDex = (props: { Pokemon: Pokemon }) => {
  const { Pokemon } = props;

  return (
    <div>
      <PokemonCard Pokemon={Pokemon} />
    </div>
  );
};
