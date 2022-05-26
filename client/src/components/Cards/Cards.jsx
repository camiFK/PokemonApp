import React from 'react'
import Styles from './Cards.module.scss'
import { Link } from 'react-router-dom'

const Cards = ({name, image, types, id}) => {
  return (
    <div className={Styles.container}>
        <div className={Styles.cards}>

         <div className={Styles.link}>
          <Link to={`/detail/${id}`}>
           <p className={Styles.name}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
          </Link>
         </div>

         <img src={image} className={Styles.img} alt="Img not found" height="150px" width="100px"/> 

         <div className={Styles.types}>
            <ul>
                {types?.map(t => (<li>{t.name }</li>))}
            </ul>
         </div>

        </div>

    </div>
  )
}

export default Cards