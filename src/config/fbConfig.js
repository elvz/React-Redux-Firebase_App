import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCYn8r2SNwG6XSwycikacxK_5zUjF9Uvfw",
    authDomain: "fozzy-wariors.firebaseapp.com",
    databaseURL: "https://fozzy-wariors.firebaseio.com",
    projectId: "fozzy-wariors",
    storageBucket: "fozzy-wariors.appspot.com",
    messagingSenderId: "29343723880",
    appId: "1:29343723880:web:a43c931ae0447d27"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;