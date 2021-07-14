import React from "react"
import { Header } from "../../components/header/Header"
import styled from "styled-components"

const NameList = styled.span`
margin-left: 45vw;
color: red;
`


export const ListPage = () => {
    
    return (
        
        <div>
            <Header/>        
           <NameList>LISTA DE POKEMONS</NameList>
        </div>
    )
}