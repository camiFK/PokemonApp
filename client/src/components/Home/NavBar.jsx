import React from 'react'
import { Link } from 'react-router-dom'
import Filters from '../Filters/Filters'
import SearchBar from '../SearchBar/SearchBar'
import NavContainer from './StyledNav'
import Styles from './Home.module.scss'

const NavBar = ({setCurrentPage}) => {

  function handleReload(e) {
    e.preventDefault();
    window.location.reload()
  }
  
  return (
    <NavContainer>
     <img className={Styles.img} src='https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png' alt='not found' />
     <Link to='/pokemons'>
          <button className={Styles.navbtn}>Create</button>
     </Link>

      <Filters setCurrentPage={setCurrentPage}/>
      <SearchBar setCurrentPage={setCurrentPage}/>

      <button className={Styles.navbtn} onClick={handleReload}>Reload</button>

    </NavContainer>
  )
}

export default NavBar