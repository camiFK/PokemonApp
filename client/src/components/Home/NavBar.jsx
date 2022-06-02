import React from 'react'
import { Link } from 'react-router-dom'
import Filters from '../Filters/Filters'
import SearchBar from '../SearchBar/SearchBar'
import {NavContainer} from './StyledNav'

const NavBar = ({setCurrentPage}) => {

  function handleReload(e) {
    e.preventDefault();
    window.location.reload()
  }
  
  return (
    <NavContainer>

       <div className='elements'>
         <img className='img' src='https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png' alt='not found' />

       <Link to='/pokemons'>
          <button className='navbtn'>Create</button>
       </Link>

        <Filters setCurrentPage={setCurrentPage}/>
        <SearchBar setCurrentPage={setCurrentPage}/>

        <div>
         <button className='navbtn' onClick={handleReload}>Reload</button>
        </div>

       </div>
     
    </NavContainer>
  )
}

export default NavBar