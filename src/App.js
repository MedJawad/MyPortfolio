import React from 'react';
//import logo from './logo.svg';
import './App.css';

import MainNavbar from "./components/Navbar";
import MainBody from "./components/Body";
import MainFooter from "./components/Footer";


function App() {
  return (
    <div className="App">
      <MainNavbar />
      <MainBody />
      <MainFooter />
    </div>
  );
}

export default App;
