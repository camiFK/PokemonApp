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
      },4000)
    }

  return (
    <div className={Styles.landing}>

        <div>
            <h1 className={Styles.title}>Pokemon App</h1>
            <button className={Styles.landingbtn} onClick={mloading}>Home</button>
        </div>

        {
            isLoading ? <div className={Styles.loader}></div> : null
        }

    </div>
  )
}

export default Landing