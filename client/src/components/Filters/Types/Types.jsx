import React from 'react'
import Styles from './Types.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getAllTypes, filterTypes} from '../../../redux/actions'

const Types = () => {

    const dispatch = useDispatch();
    const alltypes = useSelector((state) => state.types)

    useEffect(() => { 
        dispatch(getAllTypes())
      }, [dispatch])

    function handleFilterTypes(e) { 
     e.preventDefault();
     dispatch(filterTypes(e.target.value))
    }

  return (
    <div>

       <select defaultValue='Filter By...' className={Styles.filter} onChange={(e) => handleFilterTypes(e)}>
          <option disabled>Filter By...</option>
          {
            alltypes &&
            alltypes.map(type => {return <option key={type} value={type}>{type}</option>})
          }
            
        </select>

    </div>
  )
}

export default Types