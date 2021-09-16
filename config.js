import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';


const firebaseConfig = {
    apiKey: 'AIzaSyCxaDWX1JrKsMNmRma4O3pPFyBs96j4KwI',
    authDomain: 'store-by-next.firebaseapp.com',
    databaseURL: 'https://store-by-next.firebaseio.com',
    projectId: 'store-by-next',
    storageBucket: 'store-by-next.appspot.com',
    messagingSenderId: '300324652035',
    appId: '1:300324652035:web:7bf0767506fc87806d3a36',
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    // firebase.firestore().enablePersistence()
}

export { firebase };