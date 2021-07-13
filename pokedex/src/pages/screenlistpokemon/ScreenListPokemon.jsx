import React from "react"
import { useHistory } from "react-router-dom"

export const ScreenListPokemon = () => {

    const history = useHistory()

    const goToBack = () => {
        history.push("/")
    }
    return (
        
        <div>
            LISTA DE POKEMON
            <button onClick={goToBack}>VOLTAR</button>
        </div>
    )
}