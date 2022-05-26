import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAllTypes, postPokemon} from '../../redux/actions'
import Styles from './AddPoke.module.scss'
import  { StyledRange } from './ranges'

    const check = /\S+/;
    const regExpr = /^[a-z]+$/i;

function validate(input) {
  let errors = {}
  if (!check.test(input.name) || !regExpr.test(input.name) || input.name.length < 3) {
    errors.name = "Provide a name. Only strings (more than two characters).";
    }
    if(!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(input.image)) {errors.image = "Only URL directions.";}

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
    if(input.types.length >= 3) {
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
                   
          <label className={Styles.subtitle}>Defense</label>
             <label className={Styles.nums}>
              <StyledRange className={Styles.range} 
              type='range' name='defense' min={1} max={250} value={input.defense} onChange={(e) => handleChange(e)}/>
              {input.defense}
          </label>

          <label className={Styles.subtitle}>Life</label>
             <label className={Styles.nums}>
               <StyledRange className={Styles.range} 
                type='range' name='life' min={1} max={250} value={input.life} onChange={(e) => handleChange(e)}/>
                {input.life}
         </label>
              
          <label className={Styles.subtitle}>Strength</label>
            <label className={Styles.nums}>
              <StyledRange className={Styles.range} 
                type='range' name='strength' min={1} max={250} value={input.strength} onChange={(e) => handleChange(e)}/> 
                {input.strength}      
          </label>

    </div>

    <div className={Styles.div2}>
        
          <label className={Styles.subtitle}>Image</label>
          <input className={Styles.input} type='url' name='image' value={input.image} onChange={(e) => handleChange(e)}/>
          {errors.image && <p className={Styles.errors}>{errors.image}</p>}
       
       
          <label className={Styles.subtitle}>Speed</label>
            <label className={Styles.nums}>
              <StyledRange className={Styles.range}
              type='range' name='speed' min='1' max='250' value={input.speed} onChange={(e) => handleChange(e)}/>  
              {input.speed}  
          </label>
          
          <label className={Styles.subtitle}>Height</label>
           <label className={Styles.nums}>
            <StyledRange className={Styles.range} 
              type='range' name='height' min={1} max={250} value={input.height} onChange={(e) => handleChange(e)}/>
              {input.height}
          </label>
         
          <label className={Styles.subtitle}>Weight</label>
           <label className={Styles.nums}>
             <StyledRange className={Styles.range} 
             type='range' name='weight' min={1} max={250} value={input.weight} onChange={(e) => handleChange(e)}/>
             {input.weight}
          </label>
        

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
          <button className={Styles.deletebtn} onClick={() => {handleDelete(elem)}}>x</button>
          </p>
           </div>))}

           <button className={Styles.btncreate} type='submit'>CATCH</button>

      </form>
      
    </div>
  )
}

export default AddPoke