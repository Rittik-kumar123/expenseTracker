import React, { useState } from "react"
import "./LoginPage.css"

const LoginPage = (props) => {
  const [userDetails , setUserDetails] = useState({Email : "" , Password : ""});

  function submitHandler(e){
    e.preventDefault();
    console.log("userDetails are : " , userDetails);
    
  }

  return (
    <div className="LoginPageContainer">
      <div>
        <h3>Welcome</h3>
      </div>
      <div>
        <label htmlFor="userEmail">Email</label>
        <input onChange={(e)=>{
          setUserDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }));
        }} type="email" name="Email"></input>
      </div>
      <div>
        <label htmlFor="userPassword">Password</label>
        <input onChange={(e)=>{
          setUserDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }));
        }} type="password" name="Password"></input>
      </div>
      <div>
        <p>Forgot Password ?</p>
      </div>
      <div>
        <button onClick={submitHandler}>SIGN IN</button>
      </div>
    </div>
  )
};

export default LoginPage;
