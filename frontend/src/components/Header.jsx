import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<nav className="">
			<Link to="/">Logo</Link>
			<Link to="/">Home</Link>
			<Link to="/calculator">Calculator</Link>
			<Link to="/payment">Payment</Link>
			<Link to="/login">Login</Link>
			<Link to="/register">Register</Link>
		</nav>
	);
};
