import axios from "axios";

const axiosClient = axios.create({
	baseURL: `${process.env.REACT_APP_API_BASE_URL}/api/v1`,
	withCredentials: true,
	headers: {
		"Content-Type": "multipart/form-data",
	},
});

axiosClient.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const response = error.response;
		if (response) {
			switch (response.status) {
				case 401:
					localStorage.removeItem("USER_LOGGED_IN");
					break;

				case 422:
					throw error;

				default:
					alert("Error occured!");
					break;
			}
		} else {
			alert("Error occured!");
		}
	}
);

export default axiosClient;
