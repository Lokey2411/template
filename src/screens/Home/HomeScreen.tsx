import { View, Text } from "react-native";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { signOutHandler } from "../../constants/backend";

const HomeScreen = () => {
	return (
		<View>
			<Text>HomeScreen</Text>
			<PrimaryButton
				title="Sign out"
				onPress={signOutHandler}
			/>
		</View>
	);
};

export default HomeScreen;
