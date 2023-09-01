import { useUserContext } from "../context/UserContext";
import profback from "../static/back.jpg";

import "../styles/profile.css";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

function ProfileMenu() {
	const { userLogOut, userInfo } = useUserContext();

	return (
		<div className="profilemenu">
			<img src={profback} alt="profile background" className="profback" />
			<img
				src={userInfo?.avatar ? userInfo.avatar : profback}
				alt="profile background"
				className="profimg"
			/>
			<div className="profName">
				{userInfo?.farmName && (
					<p className="profName">{userInfo?.farmName}</p>
				)}
				{userInfo?.storeName && (
					<p className="profName">{userInfo?.storeName}</p>
				)}
				{userInfo?.logisticsCompanyName && (
					<p className="profName">{userInfo?.logisticsCompanyName}</p>
				)}
				{/* <p className='profName'>{userInfo?.farmName}</p> */}
				<p className="profName">@{userInfo?.username}</p>
			</div>
			<div className="manuopt">
				<Link>
					<p className="manuopt">My Market</p>
				</Link>
				<div className="subopt">
					<Link>
						<p className="manuopt1">My Products</p>
					</Link>
					<Link>
						<p className="manuopt1">Notifications</p>
					</Link>
					<Link>
						<p className="manuopt1">Orders</p>
					</Link>
					<Link>
						<p className="manuopt1">Wallet</p>
					</Link>
				</div>
				<Link>
					<p className="manuopt">Profile Settings</p>
				</Link>
				<Link onClick={userLogOut} className="menuitemhere" to="/">
					<p className="manuoptlog">Logout</p>
					<BiLogOut />
				</Link>
			</div>
		</div>
	);
}

export default ProfileMenu;
