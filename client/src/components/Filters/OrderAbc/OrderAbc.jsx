import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { filterOrderAlp, getPokemons } from '../../../redux/actions'
import Styles from './OrderAbc.module.scss'

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
    <div className={Styles.ctn}>
        <h4 className={Styles.title}>Alphabetical</h4>
        <select defaultValue='Order By...' className={Styles.order} onChange={(e) => handleFilterOrder(e)}>
          <option disabled>Order By...</option>
          <option value='atoz'>A - Z</option>
          <option value='ztoa'>Z - A</option>
        </select>

    </div>
  )
}

export default OrderAbc