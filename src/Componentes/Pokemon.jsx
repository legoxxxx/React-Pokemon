import { useEffect, useState } from "react"
//import { useParams } from "react-router-dom"

const Pokemon = (props) => {

    useEffect(() => {
        console.log(props);
    }, []);


    return (<>
        {/* {pokemon ? <p></p> : <p>no</p>} */}

        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <div className="bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-50% to-emerald-100 to-90% rounded-lg">

                <a href="#"><img src={props.imagen} className="m-auto rounded-lg object-cover h-100 w-100" /></a>
                <figcaption className="absolute px-4 text-lg text-white bottom-6">
                    <p>p2</p>
                </figcaption>
            </div>
        </figure>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Boton</button> */}


    </>
    )
}

export default Pokemon
