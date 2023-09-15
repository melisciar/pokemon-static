import { Card, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  id: number;
}

export const FavoritePokemonCard: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  const onFavoritePress = () => {
    router.push({
      pathname: "/pokemon/[id]",
      query: { id },
    });
  };
  return (
    <div
      className="col-span-6 sm:col-span-3 md:col-span-2 xl:col-span-1"
      key={id}
    >
      <Card
        isHoverable
        isPressable
        className="p-2.5 h-full"
        onPress={onFavoritePress}
      >
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="Pokemon"
          width={"100%"}
          height={140}
        />
      </Card>
    </div>
  );
};
