import React from "react";
import { Link } from "react-router-dom";

import CountdownTimer from "../Components/countdown";
import Waitlist from "../Components/Waitlist";
import logo from "../static/FARMY EMB white..png";

import { BiLogoFacebookSquare, BiLogoLinkedinSquare } from "react-icons/bi";
import { AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import "../styles/landingPage.css";

function Landingpage() {
	return (
		<div className="App">
			<div className="landin-main">
				<div className="layer">
					<img src={logo} alt="Company logo" className="main_logo" />
					<h1 className="will">OUR WEBSITE IS UNDER CONSTRUCTION.</h1>
					<p className="wewill">
						WE ARE WORKING VERY HARD TO GIVE YOU THE BEST EXPERIENCE
						WITH THIS ONE. YOU WILL LOVE FARMYAPP AS MUCH AS WE DO.
						IT WILL MORPH PERFECTLY ON YOUR NEEDS!
					</p>

					<h2 className="will1">We will be live in</h2>
					<CountdownTimer targetDate={1694833028687} />
					<div>
						<Link to="/signup" style={{ textDecoration: "none" }}>
							<span></span>
							<span className="lbutton">
								Sign up as a Farmer{" "}
							</span>
						</Link>
					</div>
					<div>
						<Waitlist />
					</div>
					<p className="wewill">Follow us on social media</p>
					<div className="socials">
						<a href="https://www.facebook.com/FarmyAppAgriculture">
							<BiLogoFacebookSquare color="white" />
						</a>
						<a href="https://www.linkedin.com/company/farmyapp/?viewAsMember=true">
							<BiLogoLinkedinSquare color="white" />
						</a>
						<a href="https://instagram.com/farmyapp?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
							<AiFillInstagram color="white" />
						</a>
						<a href="https://twitter.com/farmyapp?t=Hn0NSoQsuFFiUXiGuYBprw&s=08">
							<AiFillTwitterSquare color="white" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landingpage;
