const initState = {
    projects: [
        {id: 1, title: "First Project", content: "blah blah blah"},
        {id: 2, title: "second Project", content: "blah blah blah"},
        {id: 3, title: "Third Project", content: "blah blah blah"},
    ]
}

const ProjectReducer = (state = initState, action) =>{
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('project created', action.project);
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('project error', action.err)
            return state
        default:
            return state;
    }

}

export default ProjectReducer