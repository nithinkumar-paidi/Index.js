import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if email and password match
        if (username === 'Nithinpaidi' && password === 'password') {
            setLoggedIn(true);
        }
    };

    return (
        <div>
            {loggedIn ? (
                <div>
                    <h2>Login Successful!</h2>
                </div>
            ) : (
                <section style={{ color: 'pink' , textAlign:'center', width:'10vh' }}>
                <form onSubmit={handleSubmit} >
                    <label>
                        Email:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit">Login</button>
                </form>
                </section>
            )}
        </div>
    );
};

export default LoginPage;
