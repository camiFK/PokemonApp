import React from 'react'
import SelectBy from './SelectBy'
import Types from './Types'
import OrderAbc from './OrderAbc'
import Strength from './Strength'
import Styles from './Filters.module.scss'

const Filters = ({setCurrentPage}) => {

  function clearFilters(e) {
    e.preventDefault()
    window.location.reload()
  }
  
  return (
    <div className={Styles.ctn}>
      <SelectBy setCurrentPage={setCurrentPage}/>
      <Types setCurrentPage={setCurrentPage}/>
      <OrderAbc setCurrentPage={setCurrentPage}/>
      <Strength setCurrentPage={setCurrentPage}/>
      <div>
        <button className={Styles.btn} onClick={e => {clearFilters(e)}}>Reset</button>
      </div>
    </div>
  )
}

export default Filters