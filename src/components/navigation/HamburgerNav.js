'use client'
import { React, useState } from 'react';
import Hamburger from './Hamburger';
import  './HamburgerNav.css';
import Link from 'next/link'

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
            <div className={`${hamburgerOpen && 'mobile-nav'} navigation`} data-testid="nav">
                <Link href="/" onClick={hamburgerOpen && toggleHamburger} data-testid="nav-home">
                    Accueil
                </Link>
                <Link href="/about" onClick={hamburgerOpen && toggleHamburger} data-testid="nav-about">
                    A propos
                </Link>
            </div>

        </nav>
    );
}

export default HamburgerNav;