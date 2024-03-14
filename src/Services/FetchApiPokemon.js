const urlApiPokemon = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemones = async (id) => {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { method: 'GET' });
    const datos = await respuesta.json();
    return datos;
}