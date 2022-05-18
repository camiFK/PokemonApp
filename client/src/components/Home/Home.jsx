import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import '.Home.module.scss'
import { getPokemons } from '../../redux/actions'
import Styles from './Home.module.scss'
import Pagination from '../Pagination/Pagination'

const Home = () => {

    const dispatch = useDispatch();
    const pokemonsReducer = useSelector((state) => state.allPokemons)
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsPerPage] = useState(12)

    const lastPokemon = currentPage * pokemonsPerPage
    const firstPokemon = lastPokemon - pokemonsPerPage
    const currentPokemons = pokemonsReducer.slice(firstPokemon, lastPokemon)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
      dispatch(getPokemons())
    }, [dispatch]);

    function handleReload(e) {
      e.preventDefault();
      dispatch(getPokemons())
    }
    
  return (
    <div className={Styles.home}>

       <Pagination 
        recipesPerPage={pokemonsPerPage}
        recipesReducer={pokemonsReducer?.length}
        paginate={paginate}
        /> 

       <div>
         <button className={Styles.homebtn} onClick={handleReload}>Reload</button>
       </div> 

    </div>
  )
}

export default Home