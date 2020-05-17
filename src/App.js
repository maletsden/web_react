import React from 'react';

import {
  BrowserRouter
} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Main from "./components/Pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>

        <Main/>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
