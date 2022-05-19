import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../redux/actions'
import Styles from './Home.module.scss'
import Pagination from '../Pagination/Pagination'
import Cards from '../Cards/Cards'


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
        pokemonsPerPage={pokemonsPerPage}
        pokemonsReducer={pokemonsReducer?.length}
        paginate={paginate}
        /> 

       <div>
         <button className={Styles.homebtn} onClick={handleReload}>Reload</button>
       </div> 

       <div className={Styles.allcards}>
         {
           currentPokemons?.map((pokemon) => {
             return (
               <Cards
               key={pokemon.id}
               id={pokemon.id}
               name={pokemon.name}
               image={pokemon.image}
               types={pokemon.types}
               />
             )
           })
         }

       </div>

    </div>
  )
}

export default Home