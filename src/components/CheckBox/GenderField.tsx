import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import Checkbox from "expo-checkbox";
import { colors } from "../../constants/style";
import CheckBoxField from "./CheckBoxField";

export interface GenderFieldProps {
	defaultGender?: string;
	isUser?: boolean;
}

const GenderField = ({ defaultGender }: GenderFieldProps) => {
	const [gender, setGender] = useState(defaultGender);

	return (
		<View>
			<Text style={[{ marginBottom: 8 }]}>Giới tính</Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginBottom: 16,
				}}>
				<CheckBoxField
					color={colors.primary100}
					onValueChange={(value) => setGender(value ? "Nam" : "")}
					value={gender === "Nam"}
					text={"Nam"}
				/>
				<CheckBoxField
					color={colors.primary100}
					onValueChange={(value) => setGender(value ? "Nữ" : "")}
					value={gender === "Nữ"}
					text={"Nữ"}
				/>
			</View>
		</View>
	);
};

export default GenderField;

const styles = StyleSheet.create({});
