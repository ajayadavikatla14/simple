import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCHbX3jW3Xf9PKfpfq8OsLj-jaf8XDGoGw",
    authDomain: "form-project-12753.firebaseapp.com",
    databaseURL: "https://form-project-12753-default-rtdb.firebaseio.com",
    projectId: "form-project-12753",
    storageBucket: "form-project-12753.appspot.com",
    messagingSenderId: "906797274843",
    appId: "1:906797274843:web:114c24148c192a2ae55efe",
    measurementId: "G-1TEMTFYPJM"
  };
  
  // Initialize Firebase
    var firebaseDB = firebase.initializeApp(firebaseConfig);
    export default firebaseDB.database().ref();