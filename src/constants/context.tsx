import { doc, setDoc } from "firebase/firestore";
import { createContext, useState } from "react";
import { firestore } from "../config/firebase";

export interface ContextType {
	name: string;
	email: string;
	setName: (name: string) => void;
	setEmail: (email: string) => void;
	user: any;
	setUser: (user: any) => void;
}

export const Context = createContext<ContextType>({
	name: "",
	email: "",
	setName: (name: string) => {},
	setEmail: (email: string) => {},
	user: {},
	setUser: (user: any) => {},
});

export const ContextProvider = ({ children }: any) => {
	const [state, setState] = useState({
		name: "",
		email: "",
		user: {},
	});
	const userInfoChangeHandler = (key: string, value: any) => {
		setState((prevState) => {
			return {
				...prevState,
				[key]: value,
			};
		});
		setDoc(doc(firestore, `data/${state.email}`), state)
			.then(() => console.log("store"))
			.catch((error) => console.log(error));
	};
	return (
		<Context.Provider
			value={{
				name: state.name,
				email: state.email,
				setName: (name: string) => userInfoChangeHandler("name", name),
				setEmail: (email: string) => userInfoChangeHandler("email", email),
				user: state.user,
				setUser: (user: any) => userInfoChangeHandler("user", user),
			}}>
			{children}
		</Context.Provider>
	);
};
