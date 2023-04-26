import React from "react";
import NavBar from "../components/Navbar";
import PokemonCard from "../components/Pokemon/PokemonCard";

const pokePock = {
  name: "Poke test",
  url: "https://cdn.dribbble.com/users/1770381/screenshots/5500073/media/0a1c59d162ab651d4881e88bee21b63c.png",
};
export const Home = () => {
  return (
    <div>
      <NavBar />
      <PokemonCard Pokemon={pokePock} />
      <div>Made with ❤️ by Apenasgabs</div>
    </div>
  );
};
