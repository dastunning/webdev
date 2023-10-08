import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import withExtraFeaturesHOC from './components/withExtraFeaturesHOC';

function LoginPage({ onLoginSuccess }) {
    const [user, setUser] = useState(null);

    const handleLogin = credentials => {
        if (credentials.username === 'das' && credentials.password === '123') {
            setUser(credentials);
            onLoginSuccess(); // Notify App of successful login.
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