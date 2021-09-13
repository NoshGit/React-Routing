import React from 'react';
import {NavLink, Link} from 'react-router-dom';

function Nav() {
    const navstyle = {
        'textDecoration':'none'
    }
    return (
    <>
        <nav>
        <Link style={navstyle} to="/">
          <h2 className="logo">Logo</h2>
        </Link>
          <ul>
            <NavLink style={navstyle} className="links" activeClassName="active-link" to="/about">
                <li>About</li>
            </NavLink>
            <NavLink style={navstyle} className="links" activeClassName="active-link" to="/profile">
                <li>Profile</li>
            </NavLink>
            <NavLink style={navstyle} className="links" activeClassName="active-link" to="/dashboard">
                <li>Dashboard</li>
            </NavLink>
          </ul>
        </nav>
    </>
    )
}

export default Nav
