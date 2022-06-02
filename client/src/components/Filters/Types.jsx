import React from 'react'
import Styles from './Filters.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getAllTypes, filterTypes} from '../../redux/actions'

const Types = ({setCurrentPage}) => {

    const dispatch = useDispatch();
    const allTypes = useSelector((state) => state.types)

    useEffect(() => { 
        dispatch(getAllTypes())
      }, [dispatch])

    function handleFilterTypes(e) { 
     e.preventDefault();
     dispatch(filterTypes(e.target.value))
     setCurrentPage(1)
    }

  return (
    <>
       <select defaultValue='Filter By...' className={Styles.filter} onChange={(e) => handleFilterTypes(e)}>
          <option className={Styles.option} disabled>Filter By...</option>
          <option className={Styles.option} value='all'>All</option>
          {    
            allTypes?.map((el) => {
              return <option className={Styles.option} key={el.id} value={el.name}>{el.name}</option>;
            })
          }
            
        </select>

    </>
  )
}

export default Types