import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return(
        <div>
             <nav>
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">MARIO'S PLAN</Link>
                    { links }
                    
                    
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)