import { React } from 'react';
import './Hamburger.css';

// Display the navigation menu.
function Hamburger({toggleHamburger, isOpen}) {

    return (
        <div className='hamburger' onClick={toggleHamburger} data-testid="hamburger">
           <div className={`burger ${isOpen && 'burger1'}`} data-testid="burger1"></div>
           <div className={`burger ${isOpen && 'burger2'}`} data-testid="burger2"></div>
           <div className={`burger ${isOpen && 'burger3'}`} data-testid="burger3"></div>
        </div>
    );
}

export default Hamburger;