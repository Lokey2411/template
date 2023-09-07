import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "../constants/backend";
import HomeScreen from "../screens/Home/HomeScreen";
import HomeTabs from "../BottomTabs/HomeTabs";

const MainStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeTabs}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default MainStack;
