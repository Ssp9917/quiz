import React, { useContext, useEffect } from 'react'
import  { MainContext } from '../context/Context'
import { useNavigate } from 'react-router-dom';

const Play = () => {

  // const { user } = useContext(MainContext);

  // const nevigate = useNavigate()

  // useEffect(
  //   ()=>{
  //     if(user==null){

  //       nevigate('/login')
  //     }
  //   },[user]
  // )

  return (
    <div>Play</div>
  )
}

export default Play