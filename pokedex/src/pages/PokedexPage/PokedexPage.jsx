import React, { useContext } from "react"
import { Header } from "../../components/header/Header"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import CardPokemon from '../../components/CardPokemon/CardPokemon'
import { PokeList } from "./styled"
import Footer from "../../components/Footer/Footer"




export const PokedexPage = () => {
    const { pokedex } = useContext(GlobalStateContext)    
    
    return (
        <div>
            <Header />                               
            <PokeList>
            {pokedex && pokedex.map((poke) => {
                return <CardPokemon isPokedex key={poke.name} poke={poke} />
            })}
            </ PokeList>
            <Footer/>

        </div>
    )
}