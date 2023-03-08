import firebase from './firebase'
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCi1pYlPoNHovhn0LBTkfYAuL1MdMS4FVU",
    authDomain: "eatandwatchtogether.firebaseapp.com",
    projectId: "eatandwatchtogether",
    storageBucket: "eatandwatchtogether.appspot.com",
    messagingSenderId: "734975419194",
    appId: "1:734975419194:web:c4144281d076f8b4d42603"
};
firebase.initializeApp(firebaseConfig)
export default firebase