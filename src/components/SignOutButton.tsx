import { View, Text } from "react-native";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import { signOutHandler } from "../constants/backend";

const SignOutButton = () => {
	return (
		<PrimaryButton
			title="Sign out"
			onPress={signOutHandler}
		/>
	);
};

export default SignOutButton;
