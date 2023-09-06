import {
	View,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import React from "react";
import { colors, screenWidth } from "../constants/style";

export interface ButtonProps extends TouchableOpacityProps {
	title: string;
}

const PrimaryButton = (props: ButtonProps) => {
	return (
		<TouchableOpacity
			{...props}
			style={{
				backgroundColor: colors.primary100,
			}}>
			<Text style={{ textAlign: "center", paddingVertical: 4 }}>
				{props.title}
			</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;
