import { React, useState } from 'react';
import Hamburger from './Hamburger';
import './HamburgerNav.css';
import { NavLink } from 'react-router-dom';

// Display the navigation menu.
function HamburgerNav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    return (
        <nav role="navigation"
            aria-label="main navigation">
            <Hamburger toggleHamburger={toggleHamburger} isOpen={hamburgerOpen} data-testid="hamburger"></Hamburger>
            <div className={`${hamburgerOpen && 'mobile-nav'} navigation`}  data-testid="nav">
                <NavLink to="/" onClick={hamburgerOpen && toggleHamburger} data-testid="nav-home">
                    Accueil
                </NavLink>
                <NavLink to="/about" onClick={hamburgerOpen && toggleHamburger} data-testid="nav-about">
                    A propos
                </NavLink>
            </div>

        </nav>
    );
}

export default HamburgerNav;