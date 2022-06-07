import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/storage'
// import { initializeApp } from 'firebase/app';
// import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
// import { getAuth, connectAuthEmulator } from "firebase/auth";
// import { getStorage, connectStorageEmulator } from "firebase/storage";


const firebaseConfig = {
    apiKey: 'AIzaSyCxaDWX1JrKsMNmRma4O3pPFyBs96j4KwI',
    authDomain: 'store-by-next.firebaseapp.com',
    databaseURL: 'https://store-by-next.firebaseio.com',
    projectId: 'store-by-next',
    storageBucket: 'store-by-next.appspot.com',
    messagingSenderId: '300324652035',
    appId: '1:300324652035:web:7bf0767506fc87806d3a36',
}

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//     firebase.firestore().enablePersistence()
    
// }

// const app = initializeApp(firebaseConfig)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized')
} else {
    firebase.app()
    console.log('b')
}




const db = firebase.firestore()

const storage = firebase.storage();

const auth = firebase.auth();
// auth.useEmulator("http://localhost:9099");


export { auth, db, storage };