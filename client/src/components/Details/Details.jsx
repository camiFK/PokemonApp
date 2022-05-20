import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getPokeDetail } from '../../redux/actions';
import Styles from './Details.module.scss'

const Details = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const poked = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getPokeDetail(id))
       },[dispatch, id])

  return (
    <div className={Styles.ctn}>

      {
          poked.length > 0 ? 
          <div className={Styles.detcard}>
              <h3 className={Styles.title}>{poked[0].name.charAt(0).toUpperCase() + poked[0].name.slice(1) + " " + poked[0].id} </h3>

              <div className={Styles.column1}>
              <div className={Styles.img}>
                <img src={poked[0].image} alt="img not found" height="250px" width="200px"/>
              </div>

              <div className={Styles.types}>
                  <h3>Types</h3>
                  <p>{poked[0].types?.map(t => (<li>{t}</li>))}</p>
              </div>
              </div>

                <h3 className={Styles.title}>Statistics</h3>
              <div className={Styles.column2}>

                <h4 className={Styles.subtitle}>Life</h4>
                <p className={Styles.el}>{poked[0].life}</p>

                <h4 className={Styles.subtitle}>Strength</h4>
                <p className={Styles.el}>{poked[0].strength}</p>

                <h4 className={Styles.subtitle}>Defense</h4>
                <p className={Styles.el}>{poked[0].defense}</p>

                <h4 className={Styles.subtitle}>Speed</h4>
                <p className={Styles.el}>{poked[0].speed}</p>

                <h4 className={Styles.subtitle}>Height</h4>
                <p className={Styles.el}>{poked[0].height}</p>

                <h4 className={Styles.subtitle}>Weight</h4>
                <p className={Styles.el}>{poked[0].weight}</p>
      
              </div>






          </div>
          :
          <div>


          </div>
      }
           
             <Link to='/home'> 
             <button className={Styles.detbtn}>Home</button>
             </Link>
            


    </div>
  )
}

export default Details