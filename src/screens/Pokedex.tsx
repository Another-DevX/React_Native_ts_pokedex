import { SafeAreaView, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemonData } from "../utils/Api.services";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(pokemons);

  useEffect(() => {
    (async () => {
      loadPokemons().then((response) => setIsLoaded(true));
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getAllPokemon();
      console.log(response);
      const pokemonsArray: object[] = [];
      for await (const pokemon of response.results) {
        const pokemonData = await getPokemonData(pokemon.url);
        console.log(pokemonData);
        pokemonsArray.push({
          id: pokemonData.id,
          name: pokemonData.name,
          type: pokemonData.type,
          order: pokemonData.order,
          image: pokemonData.sprites.other["official-artwork"]["front-default"],
        });
      }
      setPokemons(pokemonsArray);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
      {isLoaded && pokemons.map((pokemon) => (<>
        <Text>{pokemon.name}</Text>
      </>))}
    </SafeAreaView>
  );
}
