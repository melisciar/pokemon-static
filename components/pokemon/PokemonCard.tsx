import { useRouter } from "next/router";
import { SmallPokemon } from "@/interfaces";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface Props {
  pokemon: SmallPokemon;
}
export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const { id, img, name } = pokemon;

  const onClick = () => {
    router.push(`/name/${name}`);
  };
  return (
    <Card key={id} isHoverable isPressable onPress={onClick}>
      <CardBody className="overflow-visible p-0">
        <Image
          src={img}
          alt={name}
          width="100%"
          className="w-full h-[140px]"
          shadow="sm"
          radius="lg"
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>
          {name[0].toUpperCase()}
          {name.substring(1)}
        </b>
        <p className="text-default-500">#{id}</p>
      </CardFooter>
    </Card>
  );
};
