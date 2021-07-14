import React from "react"
import { Header } from "../../components/header/Header"
import styled from "styled-components"

const NamePokedex = styled.span`
margin-left: 45vw;
color: red;
`

export const PokedexPage = () => {

    // const history = useHistory()
    // const goToBack = () => {
    //     history.push("/")
    // }
    return (
        <div>
            <Header/>
            <NamePokedex>POKEDEX</NamePokedex>
        </div>
    )
}