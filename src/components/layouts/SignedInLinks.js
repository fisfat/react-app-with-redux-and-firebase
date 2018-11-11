import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/AuthActions'


const SignedInLinks = (props) => {
    
    return(
        <div>
                <ul id="" className="right">
                    <li><NavLink to="/create">Add project</NavLink></li>
                    <li><a onClick={props.signOut}>Log Out</a></li>
                    <li><NavLink to="/" className="btn btn-floating grey lighten-1">{props.profile.initials}</NavLink></li>
                </ul>

                
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)