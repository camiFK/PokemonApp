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

  const [input, setInput] = useState({
      name: '',
      life: '',
      strength: '',
      defense: '',
      speed: '',
      weight: '',
      height: '',
      img: '',
      types: []
  })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    setError(validate({
      ...input,
      [e.target.name] : e.target.value
    }))
  }

  function handleTypes(e) {
      setInput({
          ...input,
          types: [...input.types, e.target.value]
      })
  }

  useEffect(() => {
    dispatch(getAllTypes())
  }, [dispatch]);

  return (
    <div className={Styles.ctn}>
      <Link to='/home'><button className={Styles.homebtn}>Home</button></Link>
      <h1 className={Styles.title}>Create your own pokemon!</h1>

      <form className={Styles.form}>

        <div className={Styles.column1}>

            <div className={Styles.inctn}>
              <label className={Styles.subtitle}>Name</label>
              <input className={Styles.input} type='text' name='name' onChange={(e) => handleChange(e)}/>
            </div>

        <div className={Styles.inctn}>
            <label className={Styles.subtitle}>Image</label>
            <input className={Styles.input} type='url' name='image' onChange={(e) => handleChange(e)}/>
        </div>

        <div className={Styles.inctn}>
          <label className={Styles.subtitle}>Life</label>
          <input className={Styles.input} type='number' name='life' onChange={(e) => handleChange(e)}/>
        </div>

        <div className={Styles.inctn}>
          <label className={Styles.subtitle}>Strength</label>
          <input className={Styles.input} type='number' name='strength' onChange={(e) => handleChange(e)}/>
        </div>
        
        <div className={Styles.inctn}>
          <label className={Styles.subtitle}>Defense</label>
          <input className={Styles.input} type='number' name='defense' onChange={(e) => handleChange(e)}/>
        </div>


        <div className={Styles.inctn}>
          <label className={Styles.subtitle}>Speed</label>
          <input className={Styles.input} type='number' name='speed' onChange={(e) => handleChange(e)}/>
        </div>

        <div className={Styles.inctn}>
          <label className={Styles.subtitle}>Height</label>
          <input className={Styles.input} type='number' name='height' onChange={(e) => handleChange(e)}/>
        </div>

        <div className={Styles.inctn}>
          <label className={Styles.subtitle}>Weight</label>
          <input className={Styles.input} type='number' name='weight' onChange={(e) => handleChange(e)}/>
        </div>


        </div>

        <div className={Styles.types}>
            <p className={Styles.subtitle}>Types</p>
            <select defaultValue='Types' onChange={(e) => handleTypes(e)}>
                <option disabled>Types</option>
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