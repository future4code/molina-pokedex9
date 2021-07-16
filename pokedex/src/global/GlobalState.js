import React, {useEffect, useState} from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from '../constants/urls';

const GlobalState = (props) => {
  const [pokemonNames, setPokemonNames] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    getPokemonNames()
  }, [])

  useEffect(() => {
    const newList = []
    pokemonNames.forEach((item) => {
      axios
      .get(`${BASE_URL}/pokemon/${item.name}`)
      .then((response) => {
        newList.push(response.data)
        if (newList.length === 20) {
          const orderList = newList.sort((a, b) => {
            return a.id - b.id })
            setPokemons(orderList)
          }
        })
        .catch((error) => alert (error.response.message))
      })
    }, [pokemonNames])

    const getPokemonNames = () => {
      axios
      .get(`${BASE_URL}/pokemon?limit=20`)
      .then((response) => {
        setPokemonNames(response.data.results)
      })
      .catch((error) => alert(error.response.message))
    }

    const data = {
      pokemons,
      setPokemons,
      setPokedex,
      pokedex
    }

    return (
      <GlobalStateContext.Provider value={data}>
        {props.children}
      </GlobalStateContext.Provider>
    )
}

export default GlobalState
    
