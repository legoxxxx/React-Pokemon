import { useEffect, useState } from "react"
import PokemonDetalle from "./PokemonDetalle";

const Pokemon = (props) => {

    const { idPokemon, nombre, imagen } = props

    useEffect(() => {
        console.log(props);
    }, []);


    return (<>

        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <div className="bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-50% to-emerald-100 to-90% rounded-lg">
                <a href={'pokemon/' + idPokemon}><img src={imagen} className="m-auto rounded-lg object-cover h-100 w-100" /></a>
                <figcaption className="absolute px-4 text-lg text-white bottom-6">
                    <p className="text-sky-400/100">{nombre}</p>
                </figcaption>
            </div>
        </figure>
    </>
    )
}

export default Pokemon
