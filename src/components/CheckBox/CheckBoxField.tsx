import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Checkbox, { CheckboxProps } from "expo-checkbox";
import { colors } from "../../constants/style";

export interface CheckBoxFieldProps extends CheckboxProps {
	text: any;
}

const CheckBoxField = (props: CheckBoxFieldProps) => {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<View style={{ flexDirection: "row" }}>
			<Checkbox
				{...props}
				style={{ marginHorizontal: 4, borderColor: colors.primary100 }}
				value={isChecked}
				onValueChange={(newValue) => setIsChecked(newValue)}
				color={colors.primary100}
			/>
			<Text>{props.text}</Text>
		</View>
	);
};

export default CheckBoxField;

const styles = StyleSheet.create({});
