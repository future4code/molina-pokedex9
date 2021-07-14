import React, {useState} from "react";
import {HomePage} from "./pages/homepage/HomePage"
import { Header } from "./components/header/Header";

export const App = () => {

  
  return (
    <div>
      <Header/>
      <p>Ola</p>
      <HomePage/>
      
    </div>  
  
  );
}

export default App;
