import React, { useEffect, useState, useContext } from "react"
import { fetchPokemones } from "../Services/FetchApiPokemon"
import { StateContex } from "../Context/StateContext"
//import { i } from "vite/dist/node/types.d-FdqQ54oU";


const Pokemon = () => {

    const { pokemones, setPokemones } = useContext(StateContex);

    const datos = async (id) => {
        const datosApiPokemones = await fetchPokemones(id);
        console.log(datosApiPokemones);
        return datosApiPokemones;
      };
      
      useEffect(() => {
        const fetchPokemons = async () => {
          let pokemones = [];
          for (let i = 1; i <= 20; i++) {
            const pokemonData = await datos(i);
            pokemones = [...pokemones, pokemonData]; // Acumula los datos de cada Pokémon
          }
          setPokemones(pokemones); // Almacena el array completo de datos
        };
      
        fetchPokemons();
      }, []);
      

    return (
        <div>
            <h1>POKEMONES</h1>

            {/* <section>
                {pokemones.map((item, i) => (
                    <ul key={i}>
                        <li>ID: {item.id} {item.name}
                        <img src={item.sprites.other.dream_world.front_default} />
                        </li>
                    </ul>
                ))}
            </section> */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
{pokemones.map((item ,i)=>(
<div key={i} className="bg-gradient-to-r from-gray-200 to-gray-700 border-amber-950">
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <p>{item.id} {item.name}</p>
                    <a href="#"><img className="rounded-lg object-cover h-100 w-100" src={item.sprites.other.dream_world.front_default} /></a>
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                        <p>Do you want to get notified when a new component is added to Flowbite?</p>
                    </figcaption>
                </figure>
</div>
))
}

            </div>
        </div>
    )
}

export default Pokemon
