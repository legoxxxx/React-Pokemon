import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemones } from '../Services/FetchApiPokemon'
import Pokemon from './Pokemon'

const PokemonDetalle = () => {
    const [pokemon, setPokemon] = useState();
    const { idPokemon } = useParams();

    const llamadaPoke = async (idPokemon) => {
        const datosApiPokemon = await fetchPokemones(idPokemon);
        //console.log(datosApiPokemones);
        return datosApiPokemon;
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
            {
                pokemon ?
                    <Pokemon idPokemon={pokemon.id} nombre={pokemon.name} altura={pokemon.height} imagen={pokemon.sprites.other.dream_world.front_default} experienciaBase={pokemon.base_experience} movimientos={pokemon.moves.length} peso={pokemon.weight} formas={pokemon.forms.length} />
                    : <h1>algo anda mal</h1>
            }
        </>
    );
};

export default PokemonDetalle;

