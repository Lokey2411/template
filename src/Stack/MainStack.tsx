import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "../constants/backend";
import HomeScreen from "../screens/Home/HomeScreen";

const MainStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
			/>
		</Stack.Navigator>
	);
};

export default MainStack;
