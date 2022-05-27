import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { filterStrength, getPokemons } from '../../../redux/actions'
import Styles from './Strength.module.scss'

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
    <div className={Styles.ctn}>
       <h4 className={Styles.title}>Strength</h4>
       <select defaultValue='Order By...' className={Styles.sort} onChange={(e) => handleFilterStrength(e)}>
          <option disabled>Order By...</option>
          <option value='asc'>Min - Max</option>
          <option value='desc'>Max - Min</option>
        </select>

    </div>
  )
}

export default Strength