import React from 'react'
import Styles from './Pagination.module.scss'

const Pagination = ({pokemonsPerPage, pokemonsReducer, paginate}) => {

    const pageNumber = []
    for (let i = 1; i <= Math.ceil(pokemonsReducer/pokemonsPerPage); i++) {
        pageNumber.push(i)
    }

  return (
    <div className={Styles.paginate}>  
        {
            pageNumber?.map(num => (
                <div key={num} className={Styles.numbers} onClick={() => paginate(num)}>{num}</div>
            ))
        }
          
    </div>
  )
}

export default Pagination