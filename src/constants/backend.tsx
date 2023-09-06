import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

export const Stack = createNativeStackNavigator();

export const signInHandler = (email: string, password: string) => {
	signInWithEmailAndPassword(auth, email, password)
		.then(() => console.log("Successfully sign in"))
		.catch((error) => console.log(error));
};

export const signUpHandler = (email: string, password: string) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then(() => {
			console.log("Successfully sign up");
		})
		.catch((error) => console.log(error));
};

export const signOutHandler = () => {
	signOut(auth).catch((error) => console.log(error));
};
