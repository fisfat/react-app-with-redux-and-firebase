import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


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

const mapStateToProps = (state) => {
    console.log(state)
    return{

    }
}

export default connect(mapStateToProps)(Navbar)