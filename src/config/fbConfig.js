import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBPQjlO2nFfYsK7zJoWGpagjLcEMLJe_FE",
    authDomain: "marioplan-f3f20.firebaseapp.com",
    databaseURL: "https://marioplan-f3f20.firebaseio.com",
    projectId: "marioplan-f3f20",
    storageBucket: "marioplan-f3f20.appspot.com",
    messagingSenderId: "345212224774"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampInSnapshots: true });

  export default firebase