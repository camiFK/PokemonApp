import React from 'react'
import Styles from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={Styles.div}>
        <div className={Styles.loader}></div>
    </div>
  )
}

export default Loader