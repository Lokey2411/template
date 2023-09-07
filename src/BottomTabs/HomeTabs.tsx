import { View, Text } from "react-native";
import React from "react";
import { Tab } from "../constants/backend";
import HomeScreen from "../screens/Home/HomeScreen";
import FavoriteScreen from "../screens/BottomTabs/FavoriteScreen";
import AcountScreen from "../screens/BottomTabs/AcountScreen";

const HomeTabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Tab.Screen
				name="HomeTabs"
				component={HomeScreen}
			/>
			<Tab.Screen
				name="Favorite"
				component={FavoriteScreen}
			/>
			<Tab.Screen
				name="Account"
				component={AcountScreen}
			/>
		</Tab.Navigator>
	);
};

export default HomeTabs;
