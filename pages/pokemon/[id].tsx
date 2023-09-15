import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Layout } from "@/components/layouts";
import { Pokemon } from "@/interfaces";
import { pokeApi } from "@/api";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { localFavorites } from "@/utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
  };

  return (
    <Layout title={pokemon.name}>
      <div className="mt-1.5 grid gap-1 grid-cols-12">
        <div className="col-span-12 sm:col-span-4">
          <Card isHoverable className="p-7">
            <CardBody>
              <Image
                src={pokemon.sprites.other?.dream_world.front_default || ""}
                alt={pokemon.name}
                width="100%"
                className="w-full h-[200px]"
              />
            </CardBody>
          </Card>
        </div>
        <div className="col-span-12 sm:col-span-8">
          <Card className="min-h-full">
            <CardHeader className="flex justify-between">
              <h1 className="font-bold text-4xl capitalize">{pokemon.name}</h1>
              <Button
                color="secondary"
                variant="ghost"
                onPress={onToggleFavorite}
              >
                Guardar en favoritos
              </Button>
            </CardHeader>
            <CardBody>
              <h2 className="text-bold text-2xl">Sprites:</h2>
              <div className="flex flex-row">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
