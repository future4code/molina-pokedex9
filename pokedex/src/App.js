import React, {useState} from "react";
import {HomePage} from "./pages/homepage/HomePage"
import { Header } from "./components/header/Header";
import { Routes } from "./routes/Routes";
import { GlobalState } from "./global/GlobalState";

export const App = () => {

  
  return (
    <div>
      <Routes/>
    </div>  
  
  );
}

export default App;
