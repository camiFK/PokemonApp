import React from 'react'
import SelectBy from './SelectBy/SelectBy'
import Types from './Types/Types'
import OrderAbc from './OrderAbc/OrderAbc'
import Strength from './Strength/Strength'
import Styles from './Filters.module.scss'

const Filters = ({setCurrentPage}) => {

  function clearFilters(e) {
    e.preventDefault()
    window.location.reload()
  }
  
  return (
    <div className={Styles.ctn}>
      <h3 className={Styles.title}>FILTERS</h3>
      <SelectBy setCurrentPage={setCurrentPage}/>
      <Types setCurrentPage={setCurrentPage}/>
      <OrderAbc setCurrentPage={setCurrentPage}/>
      <Strength setCurrentPage={setCurrentPage}/>
      <button className={Styles.btn} onClick={e => {clearFilters(e)}}>Clear filters</button>
    </div>
  )
}

export default Filters