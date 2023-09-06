// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCK2SiQKnDMP7fony8wdQNz2a8jOXHH8FE",
	authDomain: "template-5a4db.firebaseapp.com",
	projectId: "template-5a4db",
	storageBucket: "template-5a4db.appspot.com",
	messagingSenderId: "149159753119",
	appId: "1:149159753119:web:7835dffca32e067fd6b9aa",
	measurementId: "G-B147C64VPY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
