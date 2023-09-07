import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SignOutButton from "../../components/SignOutButton";

const AcountScreen = () => {
	return (
		<SafeAreaView>
			<Text>AcountScreen</Text>
			<SignOutButton />
		</SafeAreaView>
	);
};

export default AcountScreen;
