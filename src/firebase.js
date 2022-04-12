import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDHBVCx4nYZ6jDcLDgIH-WXzFkVAXFgEic',
    authDomain: 'clone-93f4a.firebaseapp.com',
    projectId: 'clone-93f4a',
    storageBucket: 'clone-93f4a.appspot.com',
    messagingSenderId: '410020104513',
    appId: '1:410020104513:web:e805e00af1b555168e79c0',
    measurementId: 'G-Z8VZ8K7GMR',
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
