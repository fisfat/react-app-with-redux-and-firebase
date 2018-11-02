import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


const SignedOutLinks = () => {
    return(
        <div>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="sass.html">Sign Up</NavLink></li>
                    <li><NavLink to="badges.html">Log In</NavLink></li>
                </ul>
                
        </div>
    )
}

export default SignedOutLinks