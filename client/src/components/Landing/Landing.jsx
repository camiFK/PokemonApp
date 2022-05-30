import React from 'react'
import {Link} from 'react-router-dom';
import Styles from './Landing.module.scss'

const Landing = () => {

  return (
    <div className={Styles.landing}>
      <div className={Styles.title}>         
            <h1>Pokemon App</h1>
            <Link to='/home'>
              <button className={Styles.landingbtn}>Home</button>   
            </Link>
        </div>      
    </div>
  )
}

export default Landing