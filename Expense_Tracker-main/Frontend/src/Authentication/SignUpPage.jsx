import React from "react"
import './SignUpPage.css'

const SignUpPage = (props) => {
  return (
    <div>
      <div className="SignUpPageContainer">
      <div>
        <h3>Create your Account</h3>
      </div>
      <div>
        <label htmlFor="userName">UserName</label>
        <input type="text" name="userName"></input>
      </div>
      <div>
        <label htmlFor="userEmail">Email</label>
        <input type="email" name="userEmail"></input>
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input type="password" name="Password"></input>
      </div>
      <div>
        <button>SIGN UP</button>
      </div>
    </div>
    </div>
  )
};

export default SignUpPage;
