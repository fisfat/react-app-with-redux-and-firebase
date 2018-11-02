import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


const SignedInLinks = () => {
    return(
        <div>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="sass.html">Add project</NavLink></li>
                    <li><NavLink to="badges.html">Log Out</NavLink></li>
                    <li><NavLink to="collapsible.html" className="btn btn-floating grey lighten-1">NN</NavLink></li>
                </ul>
                
        </div>
    )
}

export default SignedInLinks