import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '@/providers/UserContext';
import styles from "./Auth.module.scss";



const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleRegisterClick = () => {
        navigate('/register');
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let newErrors = { email: '', password: '' };

        if (!email) {
            newErrors.email = 'Email is required';
            valid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.email === email && storedUser.password === password) {
                setUser(storedUser); // Set user in context
                navigate('/'); // Redirect to home
            } else {
                newErrors.email = 'Invalid email or password';
                setErrors(newErrors);
            }
        }
    };

    return (
        <div className={styles.auth}>
            <div className={styles.authWrapper}>
                <h1 className="tac">Login</h1>
                <br />
                <form className={styles.authForm} onSubmit={handleSubmit}>
                    <div className={styles.authFormItem}>
                        <input
                            type="email"
                            aria-label="email"
                            placeholder="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className={styles.authError}>{errors.email}</div>}
                    </div>
                    <div className={styles.authFormItem}>
                        <input
                            type="password"
                            aria-label="password"
                            placeholder="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <div className={styles.authError}>{errors.password}</div>}
                    </div>
                    <button type="submit">Login</button>
                </form>
                <br />
                <div className="tac">
                    <a href="javascript:void(0)" onClick={handleRegisterClick}>No acc? Register!</a>
                </div>
            </div>
        </div>
    );
};

export default Login;