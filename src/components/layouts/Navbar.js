import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return(
        <div>
             <nav>
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">MARIO'S PLAN</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        </div>
    )
}

export default Navbar