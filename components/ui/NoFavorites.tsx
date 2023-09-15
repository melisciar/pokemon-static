import { Image } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <div className="flex flex-column h-[90vh] items-center justify-center self-center">
      <h1 className="text-4xl">No hay favoritos</h1>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt="Pokemon"
        width={250}
        height={250}
      />
    </div>
  );
};
