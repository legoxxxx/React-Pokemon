import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetalle = () => {

    const { idPokemon } = useParams();

    useEffect(() => {
        // Aquí puedes hacer una petición a la API para obtener el detalle del Pokémon
        // usando el ID
    }, []);

    return (
        <>
            <h1>Detalle del Pokémon {idPokemon}</h1>
        </>
    );
};

export default PokemonDetalle;








const llamadaPoke = async (id) => {
    const datosApiPokemones = await fetchPokemones(id);
    //console.log(datosApiPokemones);
    return datosApiPokemones;
};