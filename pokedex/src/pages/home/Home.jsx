import React from "react"
import { useHistory } from "react-router-dom"

import {Header} from '../../components/header/Header'

export const Home = () => {
    const history = useHistory()


    const goToPokedex = () => {
        history.push("/pokedex")
    }

    const goToPokemons = () => {
        history.push("/list")
    }

    return (
<<<<<<< HEAD
        <div>
            Home
            <button onClick={goToPokedex}>POKEDEX</button>
            <button onClick={goToPokemons}>POKEMONS</button>

=======
        <div>  
             <Header/>
             Home
            <button onClick={goToPokedex}>IR PARA POKEDEX</button>
>>>>>>> master
        </div>
    )
} 