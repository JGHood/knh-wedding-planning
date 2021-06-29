import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9uFQwZHlWBjyoxysBulEg6kTWTqtbr_U",
    authDomain: "knh-wedding-planning.firebaseapp.com",
    projectId: "knh-wedding-planning",
    storageBucket: "knh-wedding-planning.appspot.com",
    messagingSenderId: "780157508295",
    appId: "1:780157508295:web:1bd84f46a36531cf2c3ce2",
    measurementId: "G-N58HN0VJ66"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const app = firebase.app();
export const analytics = firebase.analytics();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signOut = () => {
    app.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}