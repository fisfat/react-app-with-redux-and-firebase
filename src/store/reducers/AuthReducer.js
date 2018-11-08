
const initState = {
authError : null,
}

const AuthReducer = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN ERROR':
        console.log('login failed')
        return{
            ...state,
            authError: 'Login Failed'
        }

        case 'LOGIN SUCCESS':
        console.log('login success')
        return{
            ...state,
            authError: null, 
        }

        case 'SIGNOUT SUCCESS':
        console.log('signout success')
        return state

        default: 
        return state

    }
}

export default AuthReducer