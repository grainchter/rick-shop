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

class GetPages {

    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    // async addToBasket(clicks) {
    //     this.database.ref('/users/' + localStorage.getItem("idToken") + '/basket/' + clicks[0][1].name).set(clicks);
    // }

    async getPage() {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        const arrInfo = await Object.values(data.info);
        const pages = await arrInfo[1];

        return pages;
    }

    async getCharacters() {
        let pages = null;
        let aliveArr = [];
        let finalArr = [];


        try {
            pages = await this.getPage();
        } catch (e) {
            console.log('error');
            console.log(e);
        }

        for (let i = 1; i <= pages; i++) {
            const response = await fetch('https://rickandmortyapi.com/api/character' + '?page=' + i);
            const data = await response.json();
            const array = await data.results;
            for (let j = 0; j <= array.length - 1; j++) {
                if (array[j].status === 'Alive') {
                    aliveArr.push(array[j]);

                }
            }

        }

        finalArr = aliveArr.flat(1);
        console.log(finalArr.length);

        for (let i = 0; i <= finalArr.length; i++) {
            this.database.ref('/characters/' + finalArr[i].id).set(finalArr[i]);
            // console.log(finalArr[i].id);
        }

    }



}

const FirebaseClass = new GetPages();

export default FirebaseClass;

