import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/Navbar/navbar";
import Page from "./components/PageMain/page";
import axios from "axios";

const App = () => {
    return (
    <div className="App">
      <NavBar/>
      <Page/>
    </div>
  );
};

export default App;
