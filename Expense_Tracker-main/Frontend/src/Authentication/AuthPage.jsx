import React, { useState } from "react"
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import './AuthPage.css';

const AuthPage = (props) => {

    const [pageState , setPageState] = useState(true);

  return (
    <div className="AuthPageContainer">
        {
            pageState ? (
                <div className="AuthPageLoginWrapper">
                    <LoginPage></LoginPage>
                    <div>
                        <h3>Don't have an account? Please Sign up!</h3>
                        <button onClick={(e)=>{
                            setPageState(prev => !prev);
                        }}>Sign Up</button>
                    </div>
                </div>
            ) : (
                <div className="AuthPageSignUpWrapper">
                    <div>
                        <h3>If you already has an account, just sign in.</h3>
                        <button onClick={(e)=>{
                            setPageState(prev => !prev);
                        }}>Sign In</button>
                    </div>
                    <div>
                        <SignUpPage></SignUpPage>
                    </div>
                </div>
            )
        }

    </div>
  )
};

export default AuthPage;
