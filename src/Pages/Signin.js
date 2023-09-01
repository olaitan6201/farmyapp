import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
	MdAgriculture,
	MdStoreMallDirectory
} from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import "../styles/signup.css";

import loho from "../static/FARMY EMB green..png";

import SignInForm from "../Components/SignInForm";
// import SignITargets from '../Components/SignITargets'
// import SignIFForm from '../Components/SignIFForm'

const SignInOptions = [
	{
		type: "customer",
		title: "Buyer",
		Logo: BsPerson,
		apiPath: "user",
	},
	{
		type: "store",
		title: "Store Owner",
		Logo: MdStoreMallDirectory,
		apiPath: "store",
	},
	{
		type: "farm",
		title: "Farmer",
		Logo: MdAgriculture,
		apiPath: "farm",
	},
	{
		type: "Logistics",
		title: "Logistics",
		Logo: AiOutlineCar,
		apiPath: "user",
	},
];

export default function Signin() {
	const [selectedButton, setSelectedButton] = useState("customer"); // Initialize with the default selected button

	const handleButtonSelect = (buttonId) => {
		setSelectedButton(buttonId);
	};

	const selectedOption = useMemo(() => {
		return SignInOptions.find((opt) => opt.type === selectedButton);
	}, [selectedButton]);

	return (
		<div className="signContainer" style={{ gap: "8px" }}>
			{/* Desktop Left Bar */}
			<div className="signutarget">
				{SignInOptions.map(({ type, title, Logo }) => (
					<Link
						onClick={() => handleButtonSelect(type)}
						className="signueach"
						key={`left-bar-${title}`}
					>
						<div className="signueach1">
							<div>
								<Logo />
							</div>
							<div>{`Sign in as a ${title}`}</div>
							<div>
								{selectedButton === type && (
									<IoIosCheckmarkCircle />
								)}
							</div>
						</div>
					</Link>
				))}
				<div className="already">
					Don't have an account?
					<span> </span>
					<Link to="/signup" className="signlink">
						Sign Up
					</Link>
				</div>
			</div>

			{/* Page Content */}
			<div className="signufform">
				<img src={loho} alt="FarmyApp logo" className="lohosm" />
				<div>Welcome to FarmyApp</div>
				<div>
					<div className="signtext">Sign in as</div>
					<div className="targets">
						<div className="signutargetm">
							{SignInOptions.map(({ type, title, Logo }) => (
								<Link
									onClick={() => handleButtonSelect(type)}
									className="signueachm"
									key={`page-content-${title}`}
								>
									<div
										className={`toggle-button ${
											selectedButton === type
												? "signueach1ms"
												: "signueach1m"
										}`}
									>
										<div className="targetIcons">
											<Logo />
										</div>
										<div className="targetText">
											<div>{title}</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
				<SignInForm apiPath={selectedOption.apiPath} />
			</div>
		</div>
	);
}
