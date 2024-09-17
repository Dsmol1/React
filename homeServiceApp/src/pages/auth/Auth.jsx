import React, { useState } from 'react';
import styles from "./Auth.module.scss";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className={styles.auth}>
            <div className={styles.authWrapper}>
                <h1 className="tac">Login</h1>
                <br />
                <form className={styles.authForm}>
                    <div className={styles.authFormItem}>
                        <input
                            type="email"
                            aria-label="email"
                            placeholder="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.authFormItem}>
                        <input
                            type="password"
                            aria-label="password"
                            placeholder="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>

        </div>
    );
};

export default Login;
