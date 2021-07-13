import React from "react"
import { useHistory } from "react-router-dom"

import {Header} from '../../components/header/Header'

export const Home = () => {
    const history = useHistory()


    const goToPokedex = () => {
        history.push("/pokedex")
    }

    return (
        <div>  
             <Header/>
             Home
            <button onClick={goToPokedex}>IR PARA POKEDEX</button>
        </div>
    )
} 