import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login =()=>{
  const[userLogInData,setUserLogInData]=useState();
  const router-useNavigate();
    
    useEffect(()->{
      if(userLogInData){
        const registerData = JSON.parse(localStorage.getItem("userData"));
          if(registerData){
            if(registerData.email === userLogInData.email && registerData.password ===userLogInData.password){
                localStorage.setItem()
            }
          }


      }
    })








}
const Register = () => {
  // const [userData, setUserData]=useState({})
  function submitHandle(){
    alert("submitted")
  }
  
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={submitHandle}>
        <label>Name</label><br/>
        <input type='test'/><br/>
        <label>Email</label><br/>
        <input type='Email'/><br/>
        <label>Password</label><br/>
        <input type='password'/><br/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Register