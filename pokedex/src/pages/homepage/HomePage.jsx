import React from "react"
import {Header} from '../../components/header/Header'
import { Router } from "../../routes/Router"

import { FooterDaHome } from "../../components/footerDaHome/FooterDaHome"



export const HomePage = () => {
//     const history = useHistory()


//     const goToPokedex = () => {
//         history.push("/pokedex")
//     }

//     const goToPokemons = () => {
//         history.push("/list")
//     }

    return (
        <div>
            <Header/>

            <FooterDaHome/>
        </div>
    )
    }