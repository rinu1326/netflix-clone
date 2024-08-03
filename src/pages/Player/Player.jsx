import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

    const {id} = useParams();

    const naviagate = useNavigate()


    const [apiData,setApiData]= useState({
        name:"",
        key:"",
        published_at:"",
        typeof:""
    })


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2I4YTY2MTNmYjgzNzRiYmU1MmZhNDEyMWE1YTAwNyIsIm5iZiI6MTcxOTcyNzQwNS41OTA0MDcsInN1YiI6IjY2ODBmM2NhYWNjZWUzYzM1YzlkYjAxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mMTJnAwP60vRe_1P6Q1HTsC1gwq9b-f_2ECsUGlZeYQ'
        }
      };
      useEffect(()=>{

        
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));


      },[])
  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" onClick={()=>{naviagate('/')}}/>
        <iframe width={'90%'} height={'90%'} src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder={'0'} allowFullScreen>

        </iframe>
        <div className="player-info">
            <p>{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.typeof}</p>
        </div>

    </div>
  )
}

export default Player