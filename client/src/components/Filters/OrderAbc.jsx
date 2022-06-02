import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { filterOrderAlp, getPokemons } from '../../redux/actions'
import Styles from './Filters.module.scss'

const OrderAbc = ({setCurrentPage}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch]);

  function handleFilterOrder(e) {
    e.preventDefault();
    dispatch(filterOrderAlp(e.target.value))
    setCurrentPage(1)
  }

  return (
    <>
        <select defaultValue='Order By...' className={Styles.filter} onChange={(e) => handleFilterOrder(e)}>
          <option className={Styles.option} disabled>Order By...</option>
          <option className={Styles.option} value='atoz'>A - Z</option>
          <option className={Styles.option} value='ztoa'>Z - A</option>
        </select>

    </>
  )
}

export default OrderAbc