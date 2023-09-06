import { View, Text } from "react-native";
import React, { Key, useContext, useState } from "react";
import InputField, { InputFieldProps } from "../../components/InputField";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../constants/context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { signUpHandler } from "../../constants/backend";

const SignupScreen = () => {
	const navigation = useNavigation<any>();
	const { name, setName, email, setEmail } = useContext(Context);
	const [password, setPassword] = useState("");
	const signUpInfo: InputFieldProps[] = [
		{
			label: "Name",
			placeholder: "Name",
			value: name,
			onChangeText: setName,
		},
		{
			label: "Email",
			placeholder: "email",
			keyboardType: "email-address",
			value: email,
			onChangeText: setEmail,
		},
		{
			label: "Password",
			secureTextEntry: true,
			placeholder: "password",
			value: password,
			onChangeText: setPassword,
		},
	];

	return (
		<View>
			<Text>Signup Screen</Text>
			{signUpInfo.map((item) => (
				<InputField
					{...item}
					key={item.label as Key}
				/>
			))}
			<PrimaryButton
				title="Sign up"
				onPress={() =>
					signUpHandler(email.toLowerCase(), password.toLowerCase())
				}
			/>
		</View>
	);
};

export default SignupScreen;
