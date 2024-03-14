const urlApiPokemon = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemones = async () => {
    const respuesta = await fetch(urlApiPokemon, { method: 'GET' });
    const datos = await respuesta.json();
    return datos;
}