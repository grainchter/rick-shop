import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {

    apiKey: "AIzaSyD5cN1cY35dyB4oeIzQCW_ZqkjwRkjtPPw",

    authDomain: "rick-shop-f42cb.firebaseapp.com",

    databaseURL: "https://rick-shop-f42cb-default-rtdb.firebaseio.com",

    projectId: "rick-shop-f42cb",

    storageBucket: "rick-shop-f42cb.appspot.com",

    messagingSenderId: "693325465087",

    appId: "1:693325465087:web:484cf8221251337f7a53ca"

};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();



