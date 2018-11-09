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

export const signUp = (newUser) => {
    return(dispatch, getstate, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            console.log(resp)
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
           
        }).then(() => {
             dispatch({ type: "SIGNUP SUCCESSFUL" })
        }).catch((err) => {
            dispatch({ type: "SIGNUP FAILED", err })
        })
    }

}