import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="nav-wrapper">
                <div className="logo">
                    <img src="/assets/img/logo.svg" alt="site logo" />
                </div>
                <nav>
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
            <div className="cta">
                <button>Login / Sign Up</button>
            </div>
        </header>
    );
}
