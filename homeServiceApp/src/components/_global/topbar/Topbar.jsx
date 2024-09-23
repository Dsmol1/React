import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { UserContext } from '@/providers/UserContext';
import styles from "./Topbar.module.scss";


export default function Topbar() {
    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext);

    const handleLogout = () => {
        logout();
        navigate('/'); // Redirect to home after logging out
    };

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
                        <li className="favorite-link">
                            <NavLink to="/favorites"><span>Favorites</span> <FaHeart /></NavLink>

                        </li>

                    </ul>
                </nav>
            </div>
            <div className={styles.topbarCta}>
                {user ? (
                    <div>
                        <span><strong>Vartotojas: </strong>{user.name}</span> {/* Display user name */}
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <button onClick={() => navigate('/auth')}>Login / Sign Up</button>
                )}
            </div>
        </header >
    );
}
