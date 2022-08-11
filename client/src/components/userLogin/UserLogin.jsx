import React, { useState } from 'react'
import UserLoginForm from '../userLoginForm/UserLoginForm';
import UserSignupForm from '../useerSignupForm/UserSignupForm';

const UserLogin = () => {
    const [showLogin, setShowLogin] = useState(true);

    return(
        <div className='user-login-container'>
            <div className='login-container-header'>
                <h1>LyfeTrac</h1>
            </div>
            
            <div className='login-area-container'>
                {showLogin ? (
                <>
                    <UserLoginForm onLogin={onLogin} />
                    <br />
                    <div className="sign-up-area-container">
                        <h3>
                            Don't have an account? &nbsp;
                        </h3>
                        <button className="user-sign-up-button" onClick={() => setShowLogin(false)}>
                            Sign Up
                        </button>
                    </div>
                </>
                ) : (
                <div className='container-sign-up-click'>
                    <UserSignupForm onLogin={onLogin} />
                    <br />
                    <div className="already-account-area">
                        <h3>
                            Already have an account? &nbsp;
                        </h3>
                        <button className="user-login-button" onClick={() => setShowLogin(true)}>
                            Log In
                        </button>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}

export default UserLogin