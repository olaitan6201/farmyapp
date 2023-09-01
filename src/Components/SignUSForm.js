import React, { useState } from "react";
import "toastr/build/toastr.min.css";
import SignUpFormWrapper from "./SignUpFormWrapper";

// import loho from '../static/FARMY EMB green..png'
// import SignUTargetM from './SignUTargetM'

const SignUSForm = () => {
	const [formData, setFormData] = useState({
		storeName: "",
		storeAddress: "",
		city: "",
		email: "",
		password: "",
		username: "",
		phoneNumber: "",
	});

	const {
		storeName,
		storeAddress,
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
				<label className="form_label">Store Name</label>
				<input
					type="text"
					onChange={handleInput}
					id="storeName"
					value={storeName}
					className="form_input form_inp"
					placeholder={"Your Store name"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">Store Address</label>
				<input
					type="text"
					onChange={handleInput}
					id="storeAddress"
					value={storeAddress}
					className="form_input form_inp"
					placeholder={"Enter the address to you Store here"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">City</label>
				<input
					type="text"
					onChange={handleInput}
					id="city"
					value={city}
					className="form_input form_inp"
					placeholder={"Enter your city of Store operation here"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">Username</label>
				<input
					type="test"
					onChange={handleInput}
					id="username"
					value={username}
					className="form_input form_inp"
					placeholder={"Enter your username here"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">Email</label>
				<input
					type="email"
					onChange={handleInput}
					id="email"
					value={email}
					className="form_input form_inp"
					placeholder={"Your email"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">Phone Number</label>
				<input
					type="text"
					onChange={handleInput}
					id="phoneNumber"
					value={phoneNumber}
					className="form_input form_inp"
					placeholder={"Enter your correct phone number here"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">Password</label>
				<input
					type="password"
					onChange={handleInput}
					id="password"
					value={password}
					className="form_input form_inp"
					placeholder={"Enter your password here"}
				/>
			</div>
		</SignUpFormWrapper>
	);
};

export default SignUSForm;
