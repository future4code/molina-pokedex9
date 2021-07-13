import React from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom"
import {Home} from "./pages/home/Home"
import {ScreenDetailPokemon} from "./pages/screendetail/ScreenDetailPokemon"
import {ScreenListPokemon} from "./pages/screenlistpokemon/ScreenListPokemon"
import {Pokedex} from "./pages/screenpokedex/ScreenPokedex"


function App() {
  return (
    
    
    <BrowserRouter>
      <switch>
       <Route exact path={"/"}>
          <Home/>
       </Route>
       <Route exact path={"/detail"}>
          <ScreenDetailPokemon/>
       </Route>
       <Route exact path={"/list"}> 
        <ScreenListPokemon/>
       </Route>
       <Route exact path={"/pokedex"}>
        <Pokedex/>
       </Route>
      </switch>
    </BrowserRouter> 
  );
}

export default App;
