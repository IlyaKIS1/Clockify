import axios from 'axios';
import { useEffect, useState } from 'react';
import ButtonLogIn from './components/ButtonLogIn';
import Footer from './components/Footer';
import ParticlesLayer from './components/ParticlesLayer';
import Dashboard from './Dashboard';
import dvrst from './images/dvrst.jpg'; // Tell webpack this JS file uses this image
import Login from './Login';
import SearchBar from './postLogin/SearchBar';
import SearchResults from './postLogin/SearchResults';
import Timer from './postLogin/Timer';

const code = new URLSearchParams(window.location.search).get("code")

function App() {
  console.log(code)
  if (code){
    return <Dashboard code={code} />
  } else {
    return <Login />
  }

}

export default App;
