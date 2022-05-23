import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAllTypes, postPokemon} from '../../redux/actions'
import Styles from './AddPoke.module.scss'

    const check = /\S+/;
    const regExpr = /^[a-z]+$/i;
    const regExpUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    const nums = /^\d+$/;

function validate(input) {
  let errors = {}
  if (!check.test(input.name) || !regExpr.test(input.name) || input.name.length < 3) {
    errors.name = "Provide a name. Only strings (more than two characters).";
    }
    if(!nums.test(input.life) || input.life <= 0) {errors.life = "Provide a number. Higher than one.";}
    if(!nums.test(input.strength) || input.strength <= 0) {errors.strength = "Provide a number. Higher than one.";}
    if(!nums.test(input.defense) || input.defense <= 0) {errors.defense = "Provide a number. Higher than one.";}
    if(!nums.test(input.speed) || input.speed <= 0) {errors.speed = "Provide a number. Higher than one.";}
    if(!nums.test(input.weight) || input.weight <= 0) {errors.weight = "Provide a number. Higher than one.";}
    if(!nums.test(input.height) || input.height <= 0) {errors.height = "Provide a number. Higher than one.";}
    if(!regExpUrl.test(input.image)) {errors.image = "Only URL directions.";}

    return errors;
}

const AddPoke = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setError] = useState({})
  const types = useSelector((state) => state.types)

  useEffect(() => {
    dispatch(getAllTypes())
  }, [dispatch]);

  const [input, setInput] = useState({
      name: '',
      life: '',
      strength: '',
      defense: '',
      speed: '',
      weight: '',
      height: '',
      image: '',
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
    if(input.types.length > 3) {
      alert('Three types maximum')
    } else {
      setInput({
          ...input,
          types: [...input.types, e.target.value]
      })
    }   
  }

  function handleDelete(e) {
    setInput({
      ...input,
      types: input.types.filter(type => type !== e)
  })
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(validate(input))
    if(input.name && input.life && input.defense && input.strength 
      && input.speed && input.weight && input.height && input.types) {
      
        dispatch(postPokemon(input))
        alert("Pokemon succesfully created!")
        setInput({
          name: '',
          life: '',
          strength: '',
          defense: '',
          speed: '',
          weight: '',
          height: '',
          image: '',
          types: []
        })
        navigate('/home')
    }
    else {alert('Please, fill al the fields')}
  }

  return (
    <div className={Styles.ctn}>
      <Link to='/home'><button className={Styles.homebtn}>Home</button></Link>
      <h1 className={Styles.title}>Create your own pokemon!</h1>

      <form className={Styles.form} onSubmit={e => {handleSubmit(e)}}>

 <div className={Styles.div1}>

    <div className={Styles.div2}>
    
          <label className={Styles.subtitle}>Name</label>
          <input className={Styles.input} type='text' name='name' value={input.name} onChange={(e) => handleChange(e)}/>
          {errors.name && <p className={Styles.errors}>{errors.name}</p>}
                   
          <label className={Styles.subtitle}>Image</label>
          <input className={Styles.input} type='url' name='image' value={input.image} onChange={(e) => handleChange(e)}/>
          {errors.image && <p className={Styles.errors}>{errors.image}</p>}
       
          <label className={Styles.subtitle}>Life</label>
          <input className={Styles.input} type='number' name='life' value={input.life} onChange={(e) => handleChange(e)}/>
          {errors.life && <p className={Styles.errors}>{errors.life}</p>}
          
          <label className={Styles.subtitle}>Strength</label>
          <input className={Styles.input} type='number' name='strength' value={input.strength} onChange={(e) => handleChange(e)}/>
          {errors.strength && <p className={Styles.errors}>{errors.strength}</p>}
       

    </div>

    <div className={Styles.div2}>
        
          <label className={Styles.subtitle}>Defense</label>
          <input className={Styles.input} type='number' name='defense' value={input.defense} onChange={(e) => handleChange(e)}/>
          {errors.defense && <p className={Styles.errors}>{errors.defense}</p>}
        
          <label className={Styles.subtitle}>Speed</label>
          <input className={Styles.input} type='number' name='speed' value={input.speed} onChange={(e) => handleChange(e)}/>
          {errors.speed && <p className={Styles.errors}>{errors.speed}</p>}
          
          <label className={Styles.subtitle}>Height</label>
          <input className={Styles.input} type='number' name='height' value={input.height} onChange={(e) => handleChange(e)}/>
          {errors.height && <p className={Styles.errors}>{errors.height}</p>}
   
          <label className={Styles.subtitle}>Weight</label>
          <input className={Styles.input} type='number' name='weight' value={input.weight} onChange={(e) => handleChange(e)}/>
          {errors.weight && <p className={Styles.errors}>{errors.weight}</p>}

    </div>

 </div>     
            <select defaultValue='Types' className={Styles.select} onChange={(e) => handleTypes(e)}>
                <option disabled>Types</option>
                { 
                  types &&
                  types.map((el) => (<option key={el.id} value={el.name}>{el.name}</option>))
                  }
            </select>
        
        {input.types.map(elem => 
          (<div className={Styles.typeslist}>
          <p className={Styles.typeselem}>{elem}
          <button onClick={() => {handleDelete(elem)}}>x</button>
          </p>
           </div>))}

           <button className={Styles.btncreate} type='submit'>CREATE</button>

      </form>
      
    </div>
  )
}

export default AddPoke