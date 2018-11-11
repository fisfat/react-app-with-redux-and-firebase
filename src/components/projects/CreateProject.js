import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/ProjectActions'
import { Redirect } from 'react-router-dom'
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners'


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
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
        this.props.CreateProject(this.state);
        this.props.history.push('/')
    }
  render() {
      const { auth } = this.props
      if(!auth.uid) return <Redirect  to="/signin" />
    return (
        
      <div className="container">
        <div className="center">
        <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={50}
          color={'#e53935'}
          loading={this.state.loading}
        />
        </div>
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create Project</h5>

            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input  type="text" id="title" onChange={this.handleChange} />
            </div>

            <div className="input-field">
                <label htmlFor="content">Content</label>
                <textarea className="materialize-textarea" id="content" onChange={this.handleChange} ></textarea>
            </div>
            

            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0" onClick={this.handleClick}> Submit </button>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        CreateProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
