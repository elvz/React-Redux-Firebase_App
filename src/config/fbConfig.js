import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR_OWN_API_KEY",
    authDomain: "fozzy-wariors.firebaseapp.com",
    databaseURL: "https://fozzy-wariors.firebaseio.com",
    projectId: "fozzy-wariors",
    storageBucket: "fozzy-wariors.appspot.com",
    messagingSenderId: "YOUR_MS_ID",
    appId: "YOUR_APP_ID"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
