import React from "react"
import { useHistory } from "react-router-dom"
import { Header } from "../../components/header/Header"

export const Pokedex = () => {

    const history = useHistory()
    const goToBack = () => {
        history.push("/")
    }
    return (
        <div>
            <Header/>
            POKEDEX
            <button onClick={goToBack}>VOLTAR</button>
        </div>
    )
}