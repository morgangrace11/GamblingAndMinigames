import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/minigames'>Minigames</Link>
            <Link to='/signin'>Sign In</Link>
        </nav>
    )
}

export default NavBar;
