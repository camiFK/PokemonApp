import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home'
import Details from './components/Details/Details'
import AddPoke from './components/AddPoke/AddPoke';
import Error from './components/Error/Error';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/detail/:id' element={<Details/>}/>
      <Route exact path='/pokemons' element={<AddPoke/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  );
}

export default App;
