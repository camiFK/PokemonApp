import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllTypes } from '../../redux/actions'
import { filterCreated } from '../../redux/actions'
import Styles from './Filters.module.scss'

const SelectBy = ({setCurrentPage}) => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllTypes())
    }, [dispatch]);

  function handleSelectBy(e) {
    e.preventDefault()
    dispatch(filterCreated(e.target.value))
    setCurrentPage(1)
  }

  return (
    <>
        <select className={Styles.filter} defaultValue='Select By...' onChange={e => handleSelectBy(e)}>
          <option className={Styles.option} disabled>Select By...</option>
          <option className={Styles.option} value='all'>All</option>
          <option className={Styles.option} value='api'>Api</option>
          <option className={Styles.option} value='created'>Created</option>
          </select>

    </>
  )
}

export default SelectBy