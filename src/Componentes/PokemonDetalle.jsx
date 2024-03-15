import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemones } from '../Services/FetchApiPokemon'
import Pokemon from './Pokemon'

const PokemonDetalle = () => {
    const [ pokemon, setPokemon ] = useState([]);
    const { idPokemon } = useParams();
    //console.log(idPokemon);

    const llamadaPoke = async (id) => {
        const datosApiPokemones = await fetchPokemones(id);
        //console.log(datosApiPokemones);
        return datosApiPokemones;
    };

    useEffect(() => {
        const poke = async () => {
            const pokeDatos = await llamadaPoke(idPokemon);
            console.log(pokeDatos);
            setPokemon(pokeDatos)
        };
        poke();
    }, []);

    return (
        <>
            <h1>Detalle del Pokémon {idPokemon}</h1>
            <Pokemon idPokemon={pokemon.id} nombre={pokemon.name}  imagen={pokemon.sprites.other.dream_world.front_default}/>
        </>
    );
};

export default PokemonDetalle;

