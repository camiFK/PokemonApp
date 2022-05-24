import React from 'react'
import SelectBy from './SelectBy/SelectBy'
import Types from './Types/Types'
import OrderAbc from './OrderAbc/OrderAbc'
import Strength from './Strength/Strength'
import Styles from './Filters.module.scss'
import { useDispatch } from 'react-redux'
import { cleanPokemons, getPokemons } from '../../redux/actions'

const Filters = () => {

  const dispatch = useDispatch();

  function clearFilters(e) {
    e.preventDefault()
    dispatch(cleanPokemons(dispatch))
    dispatch(getPokemons())
  }
  
  return (
    <div className={Styles.ctn}>
      <h3 className={Styles.title}>FILTERS</h3>
      <SelectBy/>
      <Types/>
      <OrderAbc/>
      <Strength/>
      <button className={Styles.btn} onClick={e => {clearFilters(e)}}>Clear filters</button>
    </div>
  )
}

export default Filters