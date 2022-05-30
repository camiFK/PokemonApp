import React from 'react'
import Styles from './SearchBar.module.scss'

const NotFound = () => {
  return (
    <div>
        <h2 className={Styles.errtitle}>Hmmm... that pokemon does not exist :(</h2>
    </div>
  )
}

export default NotFound