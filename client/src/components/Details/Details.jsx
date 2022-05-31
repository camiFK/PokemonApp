import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getPokeDetail, cleanDetail } from '../../redux/actions';
import Styles from './Details.module.scss'
import typesicons from './icons'
import Loader from '../Loader/Loader'

const Details = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const poked = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(cleanDetail(dispatch))
        dispatch(getPokeDetail(id))
        return () => {
         dispatch(cleanDetail(dispatch))
        }
       },[dispatch, id])

  return (
    <div>
      { poked.length > 0 ?

        <div className={Styles.ctn}>
          
          <div className={Styles.detcard}>
            <h1 className={Styles.nametitle}>{poked[0].name.charAt(0).toUpperCase() + poked[0].name.slice(1)} </h1>

              <p className={Styles.subtitle}>Id: {poked[0].id}</p>

            <div className={Styles.column1}>

              <div className={Styles.types}>
                  <h3>TYPES</h3>
                  {poked[0].types?.map(t => { 
                  return (
                    <div key={t}>
                      {/* <li>{t.name.charAt(0).toUpperCase() + t.name.slice(1)}</li> */}
                      <img src={typesicons[t.name]} alt='' className={Styles.icon}/>
                    </div>
                  )})}
              </div>
            </div>

                <h3 className={Styles.title}>STATISTICS</h3>
              <div className={Styles.column2}>

                <p className={Styles.subtitle}>Life: {poked[0].life}</p>

                <p className={Styles.subtitle}>Strength: {poked[0].strength}</p>

                <p className={Styles.subtitle}>Defense: {poked[0].defense}</p>

                <p className={Styles.subtitle}>Speed: {poked[0].speed}</p>

                <p className={Styles.subtitle}>Height: {poked[0].height}</p>

                <p className={Styles.subtitle}>Weight: {poked[0].weight}</p>
      
              </div>

                <div className={Styles.imagen}>
                 <img src={poked[0].image} alt="img not found" className={Styles.img}/>
                </div>

          </div>
             <Link to='/home'> 
             <button className={Styles.detbtn}>HOME</button>
             </Link>     
          </div>

          : <Loader/>
      }
    </div>
  )
}

export default Details