
import React from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom"
import Footer from "./components/Footer/Footer";
import {Home} from "./pages/home/Home"
import {ScreenDetailPokemon} from "./pages/screendetail/ScreenDetailPokemon"
import {ScreenListPokemon} from "./pages/screenlistpokemon/ScreenListPokemon"
import {Pokedex} from "./pages/screenpokedex/ScreenPokedex"
import React, {useState} from "react";
import {HomePage} from "./pages/homepage/HomePage"
import { Header } from "./components/header/Header";


export const App = () => {

  
  return (
    
    <BrowserRouter>
      <switch>
       <Route exact path={"/"}>
          <Home/>
       </Route>
       <Route exact path={"/detail"}>
          <ScreenDetailPokemon/>
       </Route>
       <Route exact path={"/lista"}> 
        <ScreenListPokemon/>
       </Route>
       <Route exact path={"/pokedex"}>
        <Pokedex/>
       </Route>       
      </switch>      
    </BrowserRouter>    
      <div>
        <Header/>
        <p>Ola</p>
        <HomePage/>
      
      </div>  
  );
}

export default App;
