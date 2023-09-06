import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import InputField from "../../components/InputField";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../constants/context";
import { signInHandler } from "../../constants/backend";

const LoginScreen = () => {
	const navigation = useNavigation<any>();
	const { email, setEmail } = useContext(Context);
	const [password, setPassword] = useState("");
	const signIn = () => {
		signInHandler(email.toLowerCase(), password.toLowerCase());
	};
	return (
		<View>
			<Text style={{ textAlign: "center" }}>LoginScreen</Text>
			<InputField
				label="Email"
				placeholder="Email"
				autoCorrect
				autoComplete="email"
				autoFocus
				value={email}
				onChangeText={setEmail}
			/>
			<InputField
				label="Password"
				placeholder="Password"
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>
			<PrimaryButton
				title="Sign In"
				onPress={signIn}
			/>
			<Text>You doesn't have an acount?</Text>
			<TouchableOpacity onPress={() => navigation.navigate("Signup")}>
				<Text>Sign up</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LoginScreen;
