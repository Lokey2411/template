import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
import { screenWidth } from "../constants/style";

export interface InputFieldProps extends TextInputProps {
	label: String;
}

const InputField = (props: InputFieldProps) => {
	return (
		<View style={{ marginVertical: 16 }}>
			<Text>{props.label}</Text>
			<TextInput
				{...props}
				style={{
					width: screenWidth * 0.9,
					backgroundColor: "#f2f2f2",
					height: 40,
					padding: 12,
					marginTop: 4,
					fontSize: 16,
				}}
			/>
		</View>
	);
};

export default InputField;
