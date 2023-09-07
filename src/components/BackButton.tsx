import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "./BackIcon";

const BackButton = () => {
	const navigation = useNavigation<any>();
	return (
		<TouchableOpacity onPress={navigation.goBack}>
			<BackIcon />
		</TouchableOpacity>
	);
};

export default BackButton;
