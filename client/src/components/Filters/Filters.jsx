import React from 'react'
import SelectBy from './SelectBy/SelectBy'
import Types from './Types/Types'
import Styles from './Filters.module.scss'

const Filters = () => {
  return (
    <div className={Styles.ctn}>
      <h3 className={Styles.title}>Filters:</h3>

      <div>
        
      </div>
      <SelectBy/>
      <Types/>
    </div>
  )
}

export default Filters