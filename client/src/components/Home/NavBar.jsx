import React from 'react'
import { Link } from 'react-router-dom'
import Filters from '../Filters/Filters'
import SearchBar from '../SearchBar/SearchBar'
import {NavContainer} from './StyledNav'

const NavBar = ({setCurrentPage}) => {

  return (
    <NavContainer>

       <div className='elements'>

       <Link to='/pokemons'>
         <img className='img' src='https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png' alt='not found' />
       </Link>

        <Filters setCurrentPage={setCurrentPage}/>
        <SearchBar setCurrentPage={setCurrentPage}/>

       </div>
     
    </NavContainer>
  )
}

export default NavBar