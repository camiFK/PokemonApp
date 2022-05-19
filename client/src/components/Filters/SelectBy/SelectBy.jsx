import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllTypes } from '../../../redux/actions'
import { filterCreated } from '../../../redux/actions'
import Styles from './SelectBy.module.scss'

const SelectBy = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllTypes())
    }, [dispatch]);

  function handleSelectBy(e) {
    e.preventDefault()
    dispatch(filterCreated(e.target.value))
  }

  return (
    <div>

        <select className={Styles.select} defaultValue='Select By...' onChange={e => handleSelectBy(e)}>
          <option disabled>Select By...</option>
          <option value='all'>All</option>
          <option value='api'>Api</option>
          <option value='created'>Created</option>
          </select>

    </div>
  )
}

export default SelectBy