import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Components/layouts/AppLayout";
import GuestLayout from "./Components/layouts/GuestLayout";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Landingpage from "./Pages/Landingpage";
import FarmUpload from "./Components/FarmUpload";
import StoreUpload from "./Components/StoreUpload";
import FarmPEdit from "./Components/FarmPEdit";
import NotFound from "./Pages/errors/NotFound";
import MyProfile from "./Pages/MyProfile";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Landingpage />,
	},
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/myprofile",
				element: <MyProfile />,
			},
			{
				path: "/uploadfarmproduct",
				element: <FarmUpload />,
			},
			{
				path: "/uploadstoreproduct",
				element: <StoreUpload />,
			},
			{
				path: "/editfarmproduct/:id",
				element: <FarmPEdit />,
			},
		],
	},
	{
		path: "/",
		element: <GuestLayout />,
		children: [
			{
				path: "/signin",
				element: <Signin />,
			},
			{
				path: "/signup",
				element: <Signup />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;
