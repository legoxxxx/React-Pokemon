import React, { useEffect, useState, useContext } from "react"
import { fetchPokemones } from "../Services/FetchApiPokemon"
import { StateContex } from "../Context/StateContext"
import Pokemon from "./Pokemon";

const Pokemones = () => {
    const { pokemones, setPokemones } = useContext(StateContex);

    const llamadaPoke = async (id) => {
        const datosApiPokemones = await fetchPokemones(id);
        //console.log(datosApiPokemones);
        return datosApiPokemones;
    };

    useEffect(() => {
        const poke = async () => {
            let pokemones = [];
            for (let i = 1; i <= 20; i++) {
                const pokeDatos = await llamadaPoke(i);
                pokemones = [...pokemones, pokeDatos];
            }
            setPokemones(pokemones);
        };
        poke();
    }, []);


    return (<>
        <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">POKEMONES</span></h1>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {pokemones.map((pokemon, i) => (
                <Pokemon  idPokemon={pokemon.id} nombre={pokemon.name} imagen={pokemon.sprites.other.dream_world.front_default} />
            ))}
        </div>

    </>)
}

export default Pokemones
