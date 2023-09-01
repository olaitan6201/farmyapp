import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

import { useUserContext } from "../context/UserContext";

import Cookies from "universal-cookie";
import axiosClient from "../clients/axios-client";

function SignInForm({ apiPath = "" }) {
	const navigate = useNavigate();

	const [isLoading, setLoading] = useState(false)

	const cookies = new Cookies();

	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	const emailRef = useRef();
	const passwordRef = useRef();

	const { fetchUserData } = useUserContext();

	toastr.options = {
		closeButton: true,
		progressBar: true,
		positionClass: "toast-top-right",
		timeOut: 5000,
		showMethod: "fadeIn",
		hideMethod: "fadeOut",
	};

	const displayError = (err) => {
		toastr.warning(err, "Sorry");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true)

		try {
			cookies.set("jwt", { path: "/" });
			axiosClient.defaults.headers = {
				Accept: "application/json",
				"Content-Type": "application/json",
			};

			const email = emailRef.current.value;
			const password = passwordRef.current.value;

			const authRes = await axiosClient.post(
				`/${apiPath}/auth`,
				JSON.stringify({ email, password })
			);

			if (!authRes) return;

			const res = await fetchUserData(apiPath);

			if (!res) return;
			console.log({ res });
			localStorage.setItem("USER_LOGGED_IN", "true");
			localStorage.setItem("USER_TYPE", apiPath);
			navigate("/myprofile");
		} catch (error) {
			displayError(error?.response?.message);
		} finally {
			setLoading(false)
		}
	};

	return (
		<div className="signufform">
			{/* <img src={loho} alt='FarmyApp logo' className='lohosm'/>
        <div>Welcome to FarmyApp</div>
        <SignITargetM/> */}
			<div className="sign_form">
				<form className="post_sign" onSubmit={handleSubmit}>
					<div className="waitlist_post">
						<label className="form_label">Email</label>
						<input
							type="email"
							ref={emailRef}
							className="form_input form_inp"
							placeholder={"Your email"}
						/>
					</div>
					<div className="waitlist_post">
						<label className="form_label">Password</label>
						<input
							type="password"
							ref={passwordRef}
							className="form_input form_inp"
							placeholder={"Enter your password here"}
						/>
					</div>

					<button className='sign_bt' disabled={isLoading}>
						{isLoading ? (
							<span className='loading-spinner' style={{maxHeight: '100', minHeight: '100'}}></span>
						) : (
							'Submit'
						)}
					</button>
				</form>
				<div className="already1">
					Don't have an account?{" "}
					<Link to="/signup" className="signalt">
						Sign up
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SignInForm;
