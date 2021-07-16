import React, { useContext } from "react"
import CardPokemon from "../../components/CardPokemon/CardPokemon"
import Footer from "../../components/Footer/Footer"
import { Header } from "../../components/header/Header"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import { ListContainer } from './styled'


export const ListPage = () => {
    const { pokemons } = useContext(GlobalStateContext)    

    return (

        <>
            <Header />
            <ListContainer>
                {pokemons && pokemons.map((poke) => {
                    return <CardPokemon key={poke.name} poke={poke} />
                })}
            </ListContainer>
            <Footer/>
        </>

    )
}

