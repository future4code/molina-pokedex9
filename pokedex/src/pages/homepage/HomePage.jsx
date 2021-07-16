import React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import Footer from "../../components/Footer/Footer"
import {Header} from '../../components/header/Header'
import { HeaderAberto } from "../../components/header/HeaderAberto"
import ashImg from '../../images/Ash_JN.png'
const Ash = styled.img`
height: 60vh;
position: fixed;
left: 500px;
top:100px
`

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
            <Header aberto={true} ></Header>
            <Ash src={ashImg}/>
        <Footer/>
        </div>
    )
    }