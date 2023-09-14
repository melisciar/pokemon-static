import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Spacer,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 50px",
      }}
      className="text-foreground bg-gray-900"
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Ícono de la app"
        width={70}
        height={70}
      />
      <Link href="/" className="flex">
        <h2 className="text-white text-5xl text-bold">P</h2>
        <h3 className="text-white text-3xl">okemon</h3>
      </Link>
      <Spacer style={{ flex: 1 }} />
      <Link href="/favorites">
        <p className="text-white">Favoritos</p>
      </Link>
    </div>
  );
};
