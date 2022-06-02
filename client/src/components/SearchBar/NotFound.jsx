import React from 'react'
import Styles from './SearchBar.module.scss'

const NotFound = ({error}) => {
  return (
    <div className={Styles.errctn}>
        <h1 className={Styles.errtitle}>{error}</h1>
        <img className={Styles.error} src='https://i.pinimg.com/originals/b1/4b/75/b14b758bdabe46a7b6bef034ba33dc15.gif' alt='error' />
    </div>
  )
}

export default NotFound