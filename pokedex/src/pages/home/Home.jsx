import React from "react"
import { useHistory } from "react-router-dom"

export const Home = () => {
    const history = useHistory()


    const goToPokedex = () => {
        history.push("/pokedex")
    }

    const goToPokemons = () => {
        history.push("/list")
    }

    return (
        <div>
            Home
            <button onClick={goToPokedex}>POKEDEX</button>
            <button onClick={goToPokemons}>POKEMONS</button>

        </div>
    )
} 