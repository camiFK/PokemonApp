import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAllTypes} from '../../redux/actions'
import Styles from './AddPoke.module.scss'

    let noEmpty = /\S+/;
    let validateName = /^[a-z]+$/i;
    let validateNum = /^\d+$/;

function validate(input) {
  let errors = {}
  if (!noEmpty.test(input.name) || !validateName.test(input.name) || input.name.length < 3) {
    errors.name = "Provide a name. Only strings (more than two characters).";
    }
}

const AddPoke = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setError] = useState({})
  const types = useSelector((state) => state.types)

  return (
    <div className={Styles.ctn}>
      <Link to='/home'><button className={Styles.homebtn}>Home</button></Link>
      <h1 className={Styles.title}>Create your own pokemon!</h1>

      <form className={Styles.form}>

        <div>
          <label className={Styles.subtitle}>Name:</label>
          <input className={Styles.input} type='text' name='name'/>
        </div>

        <div>
          <label className={Styles.subtitle}>Life</label>
          <input className={Styles.input} type='number' name='life'/>
        </div>

        <div>
          <label className={Styles.subtitle}>Strength</label>
          <input className={Styles.input} type='number' name='strength'/>
        </div>
        
        <div>
          <label className={Styles.subtitle}>Defense</label>
          <input className={Styles.input} type='number' name='defense'/>
        </div>

        <div>
          <label className={Styles.subtitle}>Speed</label>
          <input className={Styles.input} type='number' name='speed'/>
        </div>

        <div>
          <label className={Styles.subtitle}>Height</label>
          <input className={Styles.input} type='number' name='height'/>
        </div>

        <div>
          <label className={Styles.subtitle}>Weight</label>
          <input className={Styles.input} type='number' name='weight'/>
        </div>

        <div>
            <label>Image</label>
            <input className={Styles.image} type='url' name='image'/>
        </div>

        <div>
            <select>
                <option disabled key='' value=''>Types</option>
                { 
                  types &&
                  types.map((el) => (<option key={el.id} value={el.name}>{el.name}</option>))
                  }
            </select>
        </div>


      </form>

    </div>
  )
}

export default AddPoke