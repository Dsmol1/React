import React, { useState, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '@/providers/UserContext';
import styles from "../Auth.module.scss";

const Register = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let newErrors = { name: '', email: '', password: '', confirmPassword: '' };

        if (!name) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else {
            // Check for existing email
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            if (existingUsers.some(user => user.email === email)) {
                newErrors.email = 'Email already exists';
                valid = false;
            }
        }

        if (!password) {
            newErrors.password = 'Password is required';
            valid = false;
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            const userData = {
                name,
                email,
                password,
            };

            // Save new user to localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(userData);
            localStorage.setItem('users', JSON.stringify(users));

            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));

            navigate('/');
        }
    };

    return (
        <div className={styles.auth}>
            <div className={styles.authWrapper}>
                <h1 className="tac">Register</h1>
                <br />
                <form className={styles.authForm} onSubmit={handleSubmit}>
                    <div className={styles.authFormItem}>
                        <input
                            type="text"
                            aria-label="name"
                            placeholder="Name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <div className={styles.authError}>{errors.name}</div>}
                    </div>
                    <div className={styles.authFormItem}>
                        <input
                            type="email"
                            aria-label="email"
                            placeholder="Email"
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
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <div className={styles.authError}>{errors.password}</div>}
                    </div>
                    <div className={styles.authFormItem}>
                        <input
                            type="password"
                            aria-label="confirmPassword"
                            placeholder="Confirm Password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && <div className={styles.authError}>{errors.confirmPassword}</div>}
                    </div>
                    <button type="submit">Register</button>
                </form>
                <br />
                <div className="tac">
                    <a href="javascript:void(0)" onClick={() => navigate('/auth')}>Back to log in</a>
                </div>
            </div>
        </div>
    );
};

export default Register;