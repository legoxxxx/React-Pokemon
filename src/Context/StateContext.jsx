import { createContext, useState } from "react";

export const StateContex = createContext();

const StateContextProvider = ({ children }) => {
    const [pokemones, setPokemones] = useState([]);
    const datos = { pokemones, setPokemones };
    return (
        <StateContex.Provider value={datos}>
            {children}
        </StateContex.Provider>
    )
}

export default StateContextProvider

