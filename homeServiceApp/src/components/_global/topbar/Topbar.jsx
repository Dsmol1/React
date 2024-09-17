import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from "./Topbar.module.scss";


export default function Topbar() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/auth');
    };

    return (
        <header>
            <div className={styles.topbar}>
                <NavLink to="/" end className={styles.topbarLogo}>
                    <img src="/assets/img/logo.svg" alt="site logo" />
                </NavLink>
                <nav className={styles.topbarNav}>
                    <ul>
                        <li>
                            <NavLink to="/" end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us">About Us</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.topbarCta}>
                <button onClick={handleLoginClick}>Login / Sign Up</button>
            </div>
        </header>
    );
}
