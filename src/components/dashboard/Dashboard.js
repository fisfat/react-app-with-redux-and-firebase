import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'


class Dashboard extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 m8">
                        <ProjectList />
                    </div>
                    <div className="col s12 m4">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard