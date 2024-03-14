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
            //console.log(pokemones);
        };
        poke();
    }, []);


    return (<>
        <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">POKEMONES</span></h1>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {pokemones.map((pokemon, i) => (
                <Pokemon key={i} idPokemon={pokemon.id} nombre={pokemon.name} imagen={pokemon.sprites.other.dream_world.front_default} />
            ))}
        </div>

        {/* 
            {pokemones.map((item, i) => (
                <div key={i} className="bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-50% to-emerald-100 to-90% rounded-lg">
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                        <p>{item.id} {item.name}</p>
                        <a href="#"><img className="m-auto rounded-lg object-cover h-100 w-100" src={item.sprites.other.dream_world.front_default} /></a>
                        <figcaption className="absolute px-4 text-lg text-white bottom-6">
                            <p>{item.name}</p>
                        </figcaption>
                    </figure>
                    <button onClick={click} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Boton</button>
                </div>
            ))}
        */}


    </>)
}

export default Pokemones
