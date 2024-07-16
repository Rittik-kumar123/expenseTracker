import React, { useState } from "react"
import './SignUpPage.css'

const SignUpPage = (props) => {

  const [userDetails , setUserDetails] = useState({Name : "" , Email : "" , Password : ""});

  function submitHandler(e){
    e.preventDefault();
    console.log("userDetails are : " , userDetails);
    
  }
  return (
    <div>
      <div className="SignUpPageContainer">
      <div>
        <h3>Create your Account</h3>
      </div>
      <div>
        <label htmlFor="Name">UserName</label>
        <input name="Name" onChange={(e)=>{
          setUserDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }));
        }} type="text"></input>
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input onChange={(e)=>{
          setUserDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }));
        }} type="email" name="Email"></input>
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input onChange={(e)=>{
          setUserDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }));
        }} type="password" name="Password"></input>
      </div>
      <div>
        <button onClick={submitHandler}>SIGN UP</button>
      </div>
    </div>
    </div>
  )
};

export default SignUpPage;
