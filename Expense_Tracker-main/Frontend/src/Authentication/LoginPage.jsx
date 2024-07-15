import React from "react"
import "./LoginPage.css"

const LoginPage = (props) => {
  return (
    <div className="LoginPageContainer">
      <div>
        <h3>Welcome</h3>
      </div>
      <div>
        <label htmlFor="userEmail">Email</label>
        <input type="email" name="userEmail"></input>
      </div>
      <div>
        <label htmlFor="userPassword">Password</label>
        <input type="password" name="userPassword"></input>
      </div>
      <div>
        <p>Forgot Password ?</p>
      </div>
      <div>
        <button>SIGN IN</button>
      </div>
    </div>
  )
};

export default LoginPage;
