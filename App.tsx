import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/auth/LoginScreen";
import { STYLES } from "./src/constants/style";
import { Stack, getUserFromStorage } from "./src/constants/backend";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen from "./src/screens/auth/SignupScreen";
import HomeScreen from "./src/screens/Home/HomeScreen";
import { Context, ContextProvider } from "./src/constants/context";
import AuthStack from "./src/Stack/AuthStack";
import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/config/firebase";
import MainStack from "./src/Stack/MainStack";

const RootNavigator = () => {
	const { user, setUser } = useContext(Context);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const unsubcribe = onAuthStateChanged(
			auth,
			async (authenticateUser: any) => {
				if (!!(await getUserFromStorage())) {
					authenticateUser = await getUserFromStorage();
				}
				setUser(authenticateUser ? authenticateUser : null);
				setLoading(false);
			}
		);
		return () => unsubcribe();
	}, [user]);
	if (!loading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size={"large"} />
			</View>
		);
	}
	return (
		<NavigationContainer>
			{user ? <MainStack /> : <AuthStack />}
		</NavigationContainer>
	);
};

export default function App() {
	return (
		<ContextProvider>
			<RootNavigator />
		</ContextProvider>
	);
}
