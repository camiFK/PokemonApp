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









      </form>

    </div>
  )
}

export default AddPoke