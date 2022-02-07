import { database } from "./firebase";
import { useDispatch } from 'react-redux';
import { userName } from "../store/user";




const getUserName = (idToken) => {

    database.ref('/users/' + idToken + '/name/').once('value', (snapshot) => {
        const db = snapshot.val();
        console.log(db.name);
 
    });


}

export default getUserName;