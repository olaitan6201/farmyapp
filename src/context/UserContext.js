import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../clients/axios-client";

export const UserContext = createContext({
	userInfo: null,
	loggedIn: false,
	setUserInfo: (data) => {},
	setLoggedIn: (loggedIn = false) => {},
	fetchUserData: async (type = "farm") => {},
	userLogOut: async () => {},
});

export const UserContextProvider = ({ children }) => {
	const loggedInStatus =
		localStorage.getItem("USER_LOGGED_IN") === "true" ?? false;
	const [loggedIn, setLoggedIn] = useState(loggedInStatus);
	const [userInfo, setUserInfo] = useState();

	// Old way - Bad method
	// const [userInfo, setUserInfo] = useState(() => {
	// 	const storedUserInfo = localStorage.getItem("userInfo");
	// 	return storedUserInfo ? JSON.parse(storedUserInfo) : Object.create();
	// });

	// useEffect(() => {
	// 	fetchUserData();
	// }, [loggedIn]);

	const fetchUserData = async (type = "user") => {
		if (!userInfo || Object.keys(userInfo).length === 0) return;
		if (type.trim().length === 0) type = localStorage.getItem("USER_TYPE");

		try {
			const res = await axiosClient.get(`/${type}/profile`);

			setUserInfo(res.data);
		} catch (error) {}
	};

	const userLogOut = async () => {
		const type = localStorage.getItem("USER_TYPE");
		if (!type) return;
		try {
			await axiosClient.post(`/${type}/logout`);

			localStorage.removeItem("USER_LOGGED_IN");
			setUserInfo(null);
			setLoggedIn(false);
		} catch (error) {}
	};

	return (
		<UserContext.Provider
			value={{
				loggedIn,
				userInfo,
				setLoggedIn,
				setUserInfo,
				fetchUserData,
				userLogOut,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => useContext(UserContext);
