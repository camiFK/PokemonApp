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
              <h3 className={Styles.title}>{poked[0].name.charAt(0).toUpperCase() + poked[0].name.slice(1)}</h3>

              <div className={Styles.img}>
                <img src={poked[0].image} alt="img not found" height="250px" width="200px"/>
              </div>

              <div className={Styles.types}>
                  <h3>Types</h3>
                  <p>{poked[0].types?.map(t => (<li>{t}</li>))}</p>
              </div>






          </div>
          :
          <div>

          </div>
      }


    </div>
  )
}

export default Details