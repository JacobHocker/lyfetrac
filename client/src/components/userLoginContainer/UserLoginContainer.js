import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {NavLink as Link } from 'react-router-dom';
import largeLogo from '../../assets/images/ec-new-large.png';
import './UserLoginContainer.scss';

function UserLoginContainer({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        });
    }
    return(
        <div className="user-login-container">
            <Container>
                <Row>
                    <Col>
                        <div className='login-logo-container' >
                            <img src={largeLogo} alt='logo' className='large-logo' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="user-login-container-header">
                            <h1>Login To Your Account</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <form onSubmit={handleSubmit} className='user-login-form'>
                        <div className="username-login">
                            <label htmlFor="username"></label>
                            <input 
                            className="login-input"
                            placeholder="Username"
                            type='text'
                            id='username'
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="password-login">
                            <label htmlFor="password"></label>
                            <input 
                            className="login-input"
                            placeholder="Password"
                            type='password'
                            id='password'
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit" className="user-login-button">
                                {isLoading ? "Loading..." : "Login"}
                            </button>
                        </div>
                        <div>
                            {errors.map((err) => (
                                <p key={err}>{err}</p>
                            ))}
                        </div>
                    </form>
                </Row>
                <Row>
                    <Col>
                        <div className="sign-up-login-direct-container">
                            <h2>Don't Have An Account?</h2>
                            <Link to='/signup'>
                                <button className="user-direct-buton">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UserLoginContainer;