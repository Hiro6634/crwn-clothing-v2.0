import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth ,
    additionalInformation = {}
    ) => {
    const userDocRef = doc( db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot); 
    console.log(userSnapshot.exists( )); 

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc( userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch(error){
            console.log('Error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword( auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    console.log('email: ' + email + ' password:' + password);
    const result =  await signInWithEmailAndPassword( auth, email, password);
    console.log('SignInResult:' + result.uid);
    return result;
    // return await signInWithEmailAndPassword( auth, email, password);
}

export const signOutUser = async () => await signOut(auth);