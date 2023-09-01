import React, { useState } from "react";
import "toastr/build/toastr.min.css";
import SignUpFormWrapper from "./SignUpFormWrapper";

// import loho from '../static/FARMY EMB green..png'
// import SignUTargetM from './SignUTargetM'

const SignULForm = () => {
	const [formData, setFormData] = useState({
		farmName: "",
		farmAddress: "",
		city: "",
		email: "",
		password: "",
		username: "",
		phoneNumber: "",
	});

	const {
		farmName,
		farmAddress,
		city,
		email,
		password,
		username,
		phoneNumber,
	} = formData;

	const handleInput = (e) => {
		const { id, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	return (
		<SignUpFormWrapper formData={formData} apiPath="farm">
			<div className="waitlist_post">
				<label className="form_label">Farm Name</label>
				<input
					type="text"
					onChange={handleInput}
					value={farmName}
					id="farmName"
					className="form_input form_inp"
					placeholder={"Your farm name"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">Farm Address</label>
				<input
					type="text"
					onChange={handleInput}
					value={farmAddress}
					id="farmAddress"
					className="form_input form_inp"
					placeholder={"Enter the address to you farm here"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">City</label>
				<input
					type="text"
					onChange={handleInput}
					value={city}
					id="city"
					className="form_input form_inp"
					placeholder={"Enter your city of Farm operation here"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">Username</label>
				<input
					type="test"
					onChange={handleInput}
					value={username}
					id="username"
					className="form_input form_inp"
					placeholder={"Enter your username here"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">Email</label>
				<input
					type="email"
					onChange={handleInput}
					value={email}
					id="email"
					className="form_input form_inp"
					placeholder={"Your email"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">Phone Number</label>
				<input
					type="text"
					onChange={handleInput}
					value={phoneNumber}
					id="phoneNumber"
					className="form_input form_inp"
					placeholder={"Enter your correct phone number here"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">Password</label>
				<input
					type="password"
					onChange={handleInput}
					value={password}
					id="password"
					className="form_input form_inp"
					placeholder={"Enter your password here"}
				/>
			</div>
		</SignUpFormWrapper>
	);
};

export default SignULForm;
