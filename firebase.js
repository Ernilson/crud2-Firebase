import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA_SS2knxPC6MPeaW7TR3yJL_IJXbsQO9w",
    authDomain: "crud2-fa94c.firebaseapp.com",
    databaseURL: "https://crud2-fa94c.firebaseio.com",
    projectId: "crud2-fa94c",
    storageBucket: "crud2-fa94c.appspot.com",
    messagingSenderId: "922013350249",
    appId: "1:922013350249:web:9835e66eb2a448d155e5f8",
    measurementId: "G-9C334LDRKE"
  };
  // Initialize Firebase
  if (firebase.initializeApp(firebaseConfig)) {
    firebase.analytics();   
  }
  
export default firebase;