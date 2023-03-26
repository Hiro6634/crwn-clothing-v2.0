import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhbRSBxZL46Ew9mzYich8ltWpP-gDQK98",
  authDomain: "crwn-db-800b3.firebaseapp.com",
  projectId: "crwn-db-800b3",
  storageBucket: "crwn-db-800b3.appspot.com",
  messagingSenderId: "165539040838",
  appId: "1:165539040838:web:558afec34687a3ef8a4447"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);