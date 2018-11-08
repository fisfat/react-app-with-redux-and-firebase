export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: "LOGIN SUCCESS"})
        }).catch((err) => {
            dispatch({ type: "LOGIN ERROR", err})
        })
    }
}

export const signOut = () => {
    return (dispatch, getstate, { getFirebase }) => {
        const firebase = getFirebase();
        
        firebase.auth().signOut().then(() => {
            dispatch({ type: "SIGNOUT SUCCESS"})
        })
    }
}