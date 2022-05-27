import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Styles from './Landing.module.scss'

const Landing = () => {

    const navegar = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    
    const mloading = () => {
        setIsLoading(true)
      setTimeout(()=>{
        setIsLoading(false)
        navegar("/Home")
      },4400)
    }

  return (
    <div className={Styles.landing}>
      <div className={Styles.title}>         
            <h1>Pokemon App</h1>
            <p className={Styles.p}>By Camila FK</p> 
            <button className={Styles.landingbtn} onClick={mloading}>Home</button>   
        </div>      
        {
            isLoading ? <div className={Styles.loader}></div> : null
        }

    </div>
  )
}

export default Landing