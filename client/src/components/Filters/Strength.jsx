import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { filterStrength, getPokemons } from '../../redux/actions'
import Styles from './Filters.module.scss'

const Strength = ({setCurrentPage}) => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPokemons())
    }, [dispatch]);

    function handleFilterStrength(e) {
        e.preventDefault()
        dispatch(filterStrength(e.target.value))
        setCurrentPage(1)
      }

  return (
    <>
       <select defaultValue='Order By...' className={Styles.filter} onChange={(e) => handleFilterStrength(e)}>
          <option className={Styles.option} disabled>Order By...</option>
          <option className={Styles.option} value='asc'>Min - Max</option>
          <option className={Styles.option} value='desc'>Max - Min</option>
        </select>

    </>
  )
}

export default Strength