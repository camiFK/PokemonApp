import React from 'react'
import SelectBy from './SelectBy/SelectBy'
import Types from './Types/Types'
import OrderAbc from './OrderAbc/OrderAbc'
import Strength from './Strength/Strength'
import Styles from './Filters.module.scss'

const Filters = () => {
  return (
    <div className={Styles.ctn}>
      <h3 className={Styles.title}>FILTERS</h3>
      <SelectBy/>
      <Types/>
      <OrderAbc/>
      <Strength/>
    </div>
  )
}

export default Filters