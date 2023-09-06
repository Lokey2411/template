import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "../constants/backend";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import { STYLES } from "../constants/style";

const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: STYLES.container,
			}}>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
			/>
			<Stack.Screen
				name="Signup"
				component={SignupScreen}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;
