import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjE9sedSBACb7FC6nz1Orivir1TJJuyRc",
    authDomain: "twitter-clone-3c0d7.firebaseapp.com",
    databaseURL: "https://twitter-clone-3c0d7.firebaseio.com",
    projectId: "twitter-clone-3c0d7",
    storageBucket: "twitter-clone-3c0d7.appspot.com",
    messagingSenderId: "1083046664793",
    appId: "1:1083046664793:web:7e3ea3281516f94753af48",
    measurementId: "G-N5G4QNJ89Y"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;