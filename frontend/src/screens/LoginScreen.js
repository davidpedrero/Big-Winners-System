import React from 'react';
import './LoginScreen.css';

function Login() {
    return (
        <>
            <div className="container">
                <div className="logo">Big Winners Central</div>
                <div className="login-item">
                    <form action method="post" className="form form-login">
                        <div className="form-field">
                            <label className="user" htmlFor="login-username"><span className="hidden">Username</span></label>
                            <input id="login-username" type="text" className="form-input" placeholder="Username" required />
                        </div>
                        <div className="form-field">
                            <label className="lock" htmlFor="login-password"><span className="hidden">Password</span></label>
                            <input id="login-password" type="password" className="form-input" placeholder="Password" required />
                        </div>
                        <div className="form-field">
                            <input type="submit" value="Login" defaultValue="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login; 