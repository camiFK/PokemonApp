import React from 'react'
import Styles from './Cards.module.scss'
import { Link } from 'react-router-dom'

const Cards = ({name, image, types, id}) => {
  return (
    <div className={Styles.container}>
        <div className={Styles.cards}>

         <div className={Styles.link}>
          <Link to={`/detail/${id}`}>
           <p className={Styles.name}>{name}</p>
          </Link>
         </div>

         <img src={image} className={Styles.img} alt="Img not found"/> 

         <div className={Styles.types}>
            <ul>
                {types?.map(t => (<li>{t}</li>))}
            </ul>
         </div>

        </div>

    </div>
  )
}

export default Cards