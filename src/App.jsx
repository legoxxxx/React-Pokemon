import './App.css'
import Menu from './Componentes/Menu'
import Pokemon from './Componentes/Pokemon'
import Pokemones from './Componentes/Pokemones'
import PokemonDetalle from './Componentes/PokemonDetalle'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StateContextProvider from './Context/StateContext'


function App() {
  return (<>
    <BrowserRouter>
      {<StateContextProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<Pokemones />} />
          <Route path="pokemon/:idPokemon" element={<PokemonDetalle />} />
        </Routes>
      </StateContextProvider>}
    </BrowserRouter>
  </>)
}

export default App
