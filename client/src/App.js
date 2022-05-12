import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route exact path='/home' element={<Home/>}/>
    </Routes>
  );
}

export default App;
