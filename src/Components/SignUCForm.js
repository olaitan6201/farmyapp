import React, { useState } from "react";
import "toastr/build/toastr.min.css";
import SignUpFormWrapper from "./SignUpFormWrapper";

// import loho from '../static/FARMY EMB green..png'
// import SignUTargetM from './SignUTargetM'

const SignUFForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		username: "",
		phoneNumber: "",
		email: "",
		password: "",
		avatar: null,
	});

	const { name, username, phoneNumber, email, password, avatar } = formData;

	const handleInput = (e) => {
		const { type } = e.target;
		switch (type) {
			case "file":
				const { id: file_id, files } = e.target;
				setFormData((prev) => ({
					...prev,
					[file_id]: files,
				}));
				break;

			default:
				const { id, value } = e.target;
				setFormData((prev) => ({
					...prev,
					[id]: value,
				}));
				break;
		}
	};

	return (
		<SignUpFormWrapper formData={formData} apiPath="user" hasFile>
			<div className="waitlist_post">
				<label className="form_label">Full Name</label>
				<input
					type="text"
					onChange={handleInput}
					value={name}
					id="name"
					className="form_input form_inp"
					placeholder={"Your full name"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">Email</label>
				<input
					type="text"
					onChange={handleInput}
					value={email}
					id="email"
					className="form_input form_inp"
					placeholder={"Enter your email address"}
				/>
			</div>
			<div className="waitlist_post">
				<label className="form_label">Username</label>
				<input
					type="text"
					onChange={handleInput}
					value={username}
					id="username"
					className="form_input form_inp"
					placeholder={"Enter your username"}
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
			<div className="waitlist_post">
				<label className="form_label">Display Image</label>
				<input
					type="file"
					onChange={handleInput}
					className="custom-file-input"
					id="avatar"
					accept="image/*"
				/>
				<br />

				<div className="image-preview-container">
					{avatar &&
						Array.from(avatar).map((image, index) => (
							<div key={index} className="image-preview">
								<img
									src={URL.createObjectURL(image)}
									alt={`Images ${index}`}
								/>
							</div>
						))}
				</div>
			</div>
		</SignUpFormWrapper>
	);
};

export default SignUFForm;
