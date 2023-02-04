import React ,{useEffect} from 'react';
// import { JSON } from 'react-router-dom'
import { useState } from 'react';
import {toast} from 'react-hot-toast';


const Register = () => {
  const [userData, setUserData]=useState({})
  
  useEffect(()=>{
   console.log("userData updated!!")
   if(userData){}
  const toastUserData = JSON.stringify
  localStorage.setItem("userData",userData);
    toast("submitted");
});
function submitHandle(e){
  e.preventDefault();

  setUserData({name:'divya',
  email:'abc@mail.com',
  password:'abc'})
}
console.log(userData, "UserData heree")
  return (
    <div style={{width:"70%",marginLeft:"auto"}}>
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