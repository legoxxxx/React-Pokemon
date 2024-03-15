import { useEffect, useState } from "react"
import PokemonDetalle from "./PokemonDetalle";
import { Link } from "react-router-dom";

const Pokemon = (props) => {

    const { idPokemon, nombre, altura, imagen, experienciaBase, movimientos, peso, formas } = props

    useEffect(() => {
        console.log(props);
    }, []);

    return (<div className="rounded-lg self-end bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-50% to-emerald-100 to-90%">
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-2 py-1text-center me-2">{nombre}</button>
        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">

            <Link to={'pokemon/' + idPokemon}>
                <img src={imagen} className="m-auto rounded-lg object-cover h-100 w-100" />
            </Link>

        </figure>
        {altura ? <p>Altura {altura} cms</p> : ''}
        {experienciaBase ? <p>Experiencia Base: {experienciaBase}</p> : ''}
        {movimientos ? <p>Movimientos: {movimientos}</p> : ''}
        {peso ? <p>Peso: {peso} Grs</p> : ''}
        {formas ? <p>formas : {formas}</p> : ''}
        <button className="mx-2 my-2 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-1 py-1 text-center me-2 "> # {idPokemon}</button>
    </div>)
}

export default Pokemon
