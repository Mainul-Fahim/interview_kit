import firebase from "firebase";
import "firebase/auth";
 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjt5WLdDx33xqCTOFmYfspHnX9687QUIE",
  authDomain: "interview-kit-2d5c1.firebaseapp.com",
  projectId: "interview-kit-2d5c1",
  storageBucket: "interview-kit-2d5c1.appspot.com",
  messagingSenderId: "689888970824",
  appId: "1:689888970824:web:1bc45ac2894ddc6703f07d",
  measurementId: "G-2QZP968WPC"
};

  const app=firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth, provider};