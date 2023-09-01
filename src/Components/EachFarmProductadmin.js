import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

// import profback from '../static/back.jpg'
// import { BsStarFill, BsStarHalf } from 'react-icons/bs'
// import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import Rate from "./Rate";
import { useUserContext } from "../context/UserContext";
import axiosClient from "../clients/axios-client";

function EachFarmProductadmin({
	_id,
	availabelQuantity,
	images,
	measuringScale,
	perUnitPrice,
	numReviews,
	productDescription,
	productName,
	userId,
}) {
	const { fetchUserData, userInfo } = useUserContext();
	const navigate = useNavigate();

	toastr.options = {
		closeButton: true,
		progressBar: true,
		positionClass: "toast-top-right",
		timeOut: 5000,
		showMethod: "fadeIn",
		hideMethod: "fadeOut",
	};

	const notify = (x) => {
		toastr.success(x, "Success Message");
	};

	//   const displayError1 = () => {
	//     toastr.warning("This might take sometime.", "Please be patientError");
	//   };

	const displayError = (x) => {
		toastr.error(
			x,
			"Error: Please check and fill the form again. File means the image you uploaded"
		);
	};

	const handleDelete = async (e) => {
		try {
			notify(`You just deleted ${productName}`);
			await axiosClient.delete(`/farmproducts/${_id}`);
			await fetchUserData("farm");
			navigate("/myprofile");
		} catch (error) {
			displayError(error.response.data.message);
			//   console.log(error.response.data);
		}
	};

	let number = perUnitPrice;
	let x = number.toLocaleString();
	return (
		<div className="eachproduct">
			<img src={images[0]} alt={productName} className="productImage" />
			<p className="farmname">{userInfo.farmName}</p>
			<p className="productname"> {productName}</p>
			<div className="ratingc">
				<Rate key={_id} />
				<span className="rating"> 4.0 stars</span>
			</div>
			<p className="scale">
				{x} per {measuringScale}
			</p>
			<div className="editoptions">
				<Link to={`/editfarmproduct/${_id}`} className="editproduct">
					<FiEdit />
					<p>Edit</p>
				</Link>
				<Link className="deletproduct" onClick={handleDelete}>
					<AiOutlineDelete />
					<p>Delete</p>
				</Link>
			</div>
		</div>
	);
}

export default EachFarmProductadmin;
