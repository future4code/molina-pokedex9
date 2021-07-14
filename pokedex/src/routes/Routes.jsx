import React from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import {ListPage} from "../pages/listpage/ListPage"
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { DetailPage } from "../pages/detailpage/DetailPage";
import {HomePage} from "../pages/homepage/HomePage"



export const Routes = () => {

const history = useHistory()

  const GoToPokedex = (props) => {
  history.push("/pokedex")
}

  return (
    
    <BrowserRouter>
      <switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/detail"}>
          <DetailPage />
        </Route>
        <Route exact path={"/lista"}>
          <ListPage />
        </Route>
        <Route exact path={"/pokedex"}>
          <PokedexPage />
        </Route>
      </switch>
    </BrowserRouter>
  );
};
