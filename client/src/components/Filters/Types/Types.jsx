import React from 'react'
import Styles from './Types.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getAllTypes, filterTypes} from '../../../redux/actions'

const Types = () => {

    const dispatch = useDispatch();
    const types = useSelector((state) => state.types)

    useEffect(() => { 
        dispatch(getAllTypes())
      }, [dispatch])

    function handleFilterTypes(e) { 
     e.preventDefault();
     dispatch(filterTypes(e.target.value))
    }

  return (
    <div>
       <h4 className={Styles.title}>Types</h4>
       <select defaultValue='Filter By...' className={Styles.filter} onChange={(e) => handleFilterTypes(e)}>
          <option disabled>Filter By...</option>
          <option value='all'>All</option>
          {    
            types &&
            types.map((el) => (<option key={el.id} value={el.name}>{el.name}</option>))
          }
            
        </select>

    </div>
  )
}

export default Types