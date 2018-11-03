import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'


class Dashboard extends Component{
    render(){
        //console.log(this.props)
        const { projects } = this.props
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 m8">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m4">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)