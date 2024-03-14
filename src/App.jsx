import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './Componentes/Menu'
import Inicio from './Componentes/Inicio'
import Pokemon from './Componentes/Pokemon'
import StateContextProvider from './Context/StateContext'

function App() {

  return (<>
    <BrowserRouter>
      {<StateContextProvider>
        <Menu />
        <Pokemon />
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </StateContextProvider>}
    </BrowserRouter>
  </>)
}

export default App
