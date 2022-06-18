import React, { useState } from "react";
import { NavLink as Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import largeLogo from '../../assets/images/ec-new-large.png';
import './UserSignUpContainer.scss';

function UserSignUpContainer({ onSignUp }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [userImageUrl, setUserImageUrl] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    
    const clearForm = () => {
        setUsername("")
        setPassword("")
        setPasswordConfirmation("")
        setUserImageUrl("")
    }
    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
            user_image_url: userImageUrl,
        }),
        }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
            r.json().then((user) => onSignUp(user));
        } else {
            r.json().then((err) => setErrors(err.errors))
        }
        });
        clearForm()
    }

    return(
        <div className="user-sign-up-container">
            <Container>
                <Row>
                    <Col>
                        <div className='sign-up-logo-container' >
                            <img src={largeLogo} alt='logo' className='large-logo' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="user-sign-up-container-header">
                            <h1>Sign Up For An Account</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <form onSubmit={handleSubmit}>
                        <div className="sign-up-container">
                            <div>
                            <label htmlFor="username"></label>
                            <input
                                className="sign-up-input"
                                placeholder="Create Your Username"
                                type="text"
                                id="username"
                                autoComplete="off"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="password"></label>
                            <input
                                className="sign-up-input"
                                placeholder="Enter New Password"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                            </div>
                            <div>
                            <label htmlFor="password"></label>
                            <input
                                placeholder="Confirm Password"
                                className="sign-up-input"
                                type="password"
                                id="password_confirmation"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                autoComplete="current-password"
                            />
                            </div>
                            <div>
                            <label htmlFor="image-url"></label>
                            <input
                                placeholder="Profile Picture URL"
                                className="sign-up-input"
                                type="text"
                                id="image-url"
                                value={userImageUrl}
                                onChange={(e) => setUserImageUrl(e.target.value)}
                                autoComplete="off"
                            />
                            </div>
                            <div className='button-container'>
                            <button className="user-sign-up-button" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
                            </div>
                            <div>
                                {errors.map((err) => (
                                    <p key={err}>{err}</p>
                                ))}
                            </div>
                        </div>
                    </form>
                </Row>
                <Row>
                    <Col>
                        <div className="sign-up-login-direct-container">
                            <h2>Have An Account?</h2>
                            <Link to='/login'>
                                <button className="user-direct-buton">
                                    Login 
                                </button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UserSignUpContainer;