import firebase from "firebase";

var config = {
    apiKey: "AIzaSyAfczHnw4u-A7OjNhGQgzcdJSMM4q2E8Uk",
    authDomain: "nextbaseui.firebaseapp.com",
    databaseURL: "https://nextbaseui.firebaseio.com",
    projectId: "nextbaseui",
    storageBucket: "nextbaseui.appspot.com",
    messagingSenderId: "574616310147"
  };

firebase.initializeApp(config);


export default firebase;