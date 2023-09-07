import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export const Stack = createNativeStackNavigator();
export const Tab = createBottomTabNavigator();

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

export const storeData = async (key: string, value: any) => {
	await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getData = async (key: string) => {
	return await AsyncStorage.getItem(key);
};

export const storeUser = async (user: any) => {
	await storeData("token", user);
};

export const getUserFromStorage = async () => {
	return await getData("token");
};
