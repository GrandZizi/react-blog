import firebase from "fireabase/app";
import "firebase/firestore";


const firebaseConfig = {
	apiKey: 'AIzaSyAJQi7Yb_jbE1rRQDXMuIVUBauuEWHSorE',
	authDomain: 'react-blog-info.firebaseapp.com',
	projectId: 'react-blog-info',
	storageBucket: 'react-blog-info.appspot.com',
	messagingSenderId: '271153387727',
	appId: '1:271153387727:web:bd2be71b779e0d30ffbfba',
};

firebase.intializeApp(firebaseConfig);

export default firebase;
