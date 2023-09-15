import { FavoritePokemonCard } from ".";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: React.FC<Props> = ({ pokemons }) => {
  return (
    <div className="grid gap-3 grid-cols-12">
      {pokemons.map((id) => (
        <FavoritePokemonCard key={id} id={id} />
      ))}
    </div>
  );
};
