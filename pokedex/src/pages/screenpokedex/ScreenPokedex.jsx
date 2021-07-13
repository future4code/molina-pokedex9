import React from "react"
import { useHistory } from "react-router-dom"

export const Pokedex = () => {

    const history = useHistory()
    const goToBack = () => {
        history.push("/")
    }
    return (
        <div>
            POKEDEX
            <button onClick={goToBack}>VOLTAR</button>
        </div>
    )
}