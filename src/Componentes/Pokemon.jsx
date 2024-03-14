import React, { useEffect, useState, useContext } from "react"
import { fetchPokemones } from "../Services/FetchApiPokemon"
import { StateContex } from "../Context/StateContext"
//import { i } from "vite/dist/node/types.d-FdqQ54oU";


const Pokemon = () => {

    const { pokemones, setPokemones } = useContext(StateContex);

    const datos = async () => {
        const datosApiPokemones = await fetchPokemones();
        setPokemones(datosApiPokemones);
        console.log(datosApiPokemones);
    }


    useEffect(() => {
        datos();
    }, []);

    return (
        <div>
            <h1>POKEMONES</h1>

            <section>
                {pokemones.map((item, i) => (
                    <ul key={i}>
                        <li>{item.name}</li>
                    </ul>
                ))}
            </section>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    </a>
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                        <p>Do you want to get notified when a new component is added to Flowbite?</p>
                    </figcaption>
                </figure>

                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    </a>
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                        <p>Do you want to get notified when a new component is added to Flowbite?</p>
                    </figcaption>
                </figure>

                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    </a>
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                        <p>Do you want to get notified when a new component is added to Flowbite?</p>
                    </figcaption>
                </figure>

                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <a href="#">
                        <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    </a>
                    <figcaption className="absolute px-4 text-lg text-white bottom-6">
                        <p>Do you want to get notified when a new component is added to Flowbite?</p>
                    </figcaption>
                </figure>

            </div>
        </div >
    )
}

export default Pokemon
