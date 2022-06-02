import React from 'react'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import { getPokeName } from '../../redux/actions'
import Styles from './SearchBar.module.scss'
import NotFound from './NotFound'

const SearchBar = ({setCurrentPage}) => {

const dispatch = useDispatch();
const [name, setName] = useState()
const [error, setError] = useState(false)

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPokeName(name))
    .then((res) => {
      !res ? setError(true) : setError(false) })
    setName("")
    setCurrentPage(1)
  }

  return (
    <>

      {error && <NotFound/>}
   
        <div>
         <input
          className={Styles.input}
          type='text'
          placeholder='Search...'
          onChange={(e) => handleChange(e)}
          value={name}
         />
         <button 
         className={Styles.btn} 
         type='submit' 
         onClick={(e) => handleSubmit(e)}>
           Search
         </button>
        </div>

    </>
  )
}

export default SearchBar