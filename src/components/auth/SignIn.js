import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/AuthActions'
// import { auth } from 'firebase';
import { Redirect } from 'react-router-dom'
import { css } from 'react-emotion';
import { BeatLoader } from 'react-spinners'


const override = css`
    display: block;
    margin-top: 30px;
    border-color: red;
`;


class SignIn extends Component {
    state ={
        email: '',
        password: '',
        loading: true

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    componentDidMount(){
        this.setState({
            loading: false
        })
    }

    handleClick = () =>{
        this.setState({
            loading: true
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
  render() {
      const { authError, auth } = this.props;
      const error = authError ? <p className="center">{authError} </p> : null;
        if(auth.uid) return <Redirect to="/" />

    return (
        
      <div className="container">
      <div className="center">
      
            <BeatLoader
                className={override}
                sizeUnit={"px"}
                size={20}
                color={'#e53935'}
                loading={this.state.loading}
                />
        </div>
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>

            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input  type="email" id="email" onChange={this.handleChange} />
            </div>

            <div className="input-field">
                <label htmlFor="email">Password</label>
                <input  type="password" id="password" onChange={this.handleChange} />
            </div>

            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0" onClick={this.handleClick}> Login </button>
                <div className="red-text">
                    { error }
                </div>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
