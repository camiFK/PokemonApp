import React from 'react'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import { getPokeName } from '../../redux/actions'
import Styles from './SearchBar.module.scss'

const SearchBar = () => {

const dispatch = useDispatch();
const [loading, setLoading] = useState(false)
const [name, setName] = useState("") // av
const [error, setError] = useState(false)

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPokeName(name))
    .then((res) => {
      !res ? setError(true) : setError(false);
      setLoading(false)
    })
    .catch((error) => console.log(error));
    setName('')
  }

  return (
    <div className={Styles.ctn}>

     <div className='searchError'>
        { error && <div className='searchError'>Pokemon not found :(</div> }
        { 
          loading && loading ?
            (<div className='searching'>Searching...</div>) : null
        }
      </div>
   
        <div className={Styles.searchbar}>
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

    </div>
  )
}

export default SearchBar