import React, { useState } from "react"
import "./LoginPage.css"
import axios from "axios";

const LoginPage = ({loginSetter}) => {
  const [userDetails , setUserDetails] = useState({Email : "" , Password : ""});

  const BASE_URL = "http://localhost:5000/api/v1/";

  const submitHandler = async(e) => {
    e.preventDefault();
    console.log("userDetails are : " , userDetails);
    const response = await axios.post(`${BASE_URL}login` , userDetails);
    console.log("the response from backend : " , response);
    if(!response.data.result){
      setUserDetails(prevDetails => ({
          ...prevDetails,
          Email: "",
          Password : "",
      }));
      alert(response.data.message);
    }
    else{
      loginSetter(response.data.result);
      alert(response.data.message);
    }
  }

  return (
    <div className="LoginPageContainer">
      <div>
        <h3>Welcome</h3>
      </div>
      <div>
        <label htmlFor="userEmail">Email</label>  
        <input value={userDetails.Email} onChange={(e)=>{
          setUserDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }));
        }} type="email" name="Email"></input>
      </div>
      <div>
        <label htmlFor="userPassword">Password</label>
        <input value={userDetails.Password} onChange={(e)=>{
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
