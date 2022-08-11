import React, { useState } from 'react'

const UserSignupForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [userImageUrl, setUserImageUrl] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    return(
        <div className='user-sign-up-form'>
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
                        <error key={err}>{err}</error>
                    ))}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserSignupForm