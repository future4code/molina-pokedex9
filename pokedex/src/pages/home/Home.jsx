import React from "react"
import { useHistory } from "react-router-dom"

export const Home = () => {
    const history = useHistory()


    const goToPokedex = () => {
        history.push("/pokedex")
    }

    return (
        <div>
            Home
            <button onClick={goToPokedex}>IR PARA POKEDEX</button>
        </div>
    )
} 