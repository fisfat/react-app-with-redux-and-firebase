import React from 'react'

const ProjectDetails = (props) => {
  let id = props.match.params.id
  return (
    <div className=" container section project-details ">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title"> Project title {id}</span>
            <p> Lorem ipsum </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div> Posted by fisfat</div>
          <div> Date </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
