import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button.js';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    // on refresh this removes the button from showing up
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <i class="fa-solid fa-camera"></i>SMT Films
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/films' className='nav-links' onClick={closeMobileMenu}>
                                Films
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cast' className='nav-links' onClick={closeMobileMenu}>
                                Cast
                            </Link>
                        </li>
                        <li>
                            <a 
                            href='https://www.youtube.com/channel/UCKObXKDMTnmhFAyyut6TizQ' 
                            target='_blank'
                            rel="noopener noreferrer"
                            className='nav-links-mobile' 
                            onClick={closeMobileMenu}
                            >
                                Follow Us
                            </a>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Follow</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar