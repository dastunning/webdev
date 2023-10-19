import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import withExtraFeaturesHOC from './components/withExtraFeaturesHOC';

function LoginPage({ onLoginSuccess }) {
    const handleLogin = credentials => {
        if (credentials.username === 'das' && credentials.password === '123') {
            onLoginSuccess('user');  // Notify App of successful login as user
        } else if (credentials.username === 'operator' && credentials.password === '123') {
            onLoginSuccess('operator');  // Notify App of successful login as operator
        } else if (credentials.username === 'admin' && credentials.password === '123') {
            onLoginSuccess('admin');  // Notify App of successful login as operator
        } else {
            alert('Invalid Credentials');
        }
    }

    return (
        <div className="container login-container">
            <h2>Login</h2>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
}

export default withExtraFeaturesHOC(LoginPage);
