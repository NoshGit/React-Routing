import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    const navstyle = {
        color:'white',
        'textDecoration':'none'
    }
    return (
    <>
        <nav>
        <Link style={navstyle} to="/">
          <h2>Logo</h2>
        </Link>
          <ul>
            <Link style={navstyle} to="/about">
                <li>About</li>
            </Link>
            <Link style={navstyle} to="/profile">
                <li>Profile</li>
            </Link>
          </ul>
        </nav>
    </>
    )
}

export default Nav
