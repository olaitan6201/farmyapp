import { useState } from "react";
import { Link } from "react-router-dom";

import { MdAgriculture, MdStoreMallDirectory } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import "../styles/signup.css";

// import SignUTargets from '../Components/SignUTargets'
import loho from "../static/FARMY EMB green..png";
import SignUFForm from "../Components/SignUFForm";
import SignUSForm from "../Components/SignUSForm";
import SignULForm from "../Components/SignULForm";
import SignUCForm from "../Components/SignUCForm";

const SignUpOptions = [
	{
		type: "customer",
		title: "Buyer",
		Logo: BsPerson,
	},
	{
		type: "store",
		title: "Store Owner",
		Logo: MdStoreMallDirectory,
	},
	{
		type: "farm",
		title: "Farmer",
		Logo: MdAgriculture,
	},
	{
		type: "Logistics",
		title: "Logistics",
		Logo: AiOutlineCar,
	},
];

export default function Signup() {
	const [selectedButton, setSelectedButton] = useState("customer"); // Initialize with the default selected button

	const handleButtonSelect = (buttonId) => {
		setSelectedButton(buttonId);
	};

	return (
		<div className="signContainer" style={{ gap: "8px" }}>
			{/* <div> */}
			<div className="signutarget">
				{SignUpOptions.map(({ type, title, Logo }) => (
					<Link
						onClick={() => handleButtonSelect(type)}
						className="signueach"
						key={`left-bar-${title}`}
					>
						<div className="signueach1">
							<div>
								<Logo />
							</div>
							<div>{`Sign up as a ${title}`}</div>
							<div>
								{selectedButton === type && (
									<IoIosCheckmarkCircle />
								)}
							</div>
						</div>
					</Link>
				))}
				<div className="already">
					Already have a FarmyApp account?
					<span> </span>
					<Link to="/signin" className="signlink">
						Sign In
					</Link>
				</div>
				{/* </div> */}
			</div>
			<div className="signufform">
				<img src={loho} alt="FarmyApp logo" className="lohosm" />
				<div>Welcome to FarmyApp</div>
				<div>
					<div className="signtext">Sign up as</div>
					<div className="targets">
						<div className="signutargetm">
							{SignUpOptions.map(({ type, title, Logo }) => (
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
				{selectedButton === "customer" && <SignUCForm />}
				{selectedButton === "store" && <SignUSForm />}
				{selectedButton === "farm" && <SignUFForm />}
				{selectedButton === "Logistics" && <SignULForm />}
			</div>
		</div>
	);
}
