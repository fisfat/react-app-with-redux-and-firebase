import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCYt2A1LKvE8QZIKqNmaKOM8DQ93ajh2H8",
    authDomain: "marioplan-caa60.firebaseapp.com",
    databaseURL: "https://marioplan-caa60.firebaseio.com",
    projectId: "marioplan-caa60",
    storageBucket: "",
    messagingSenderId: "1050265120759"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true });

  export default firebase