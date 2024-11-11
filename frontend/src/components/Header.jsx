import { Link, useLocation } from "react-router-dom";

export const Header = () => {
	const location = useLocation();

	return (
		<nav className="px-20 bg-[#ffffffaa] border-opacity-25 border-b z-10">
			<div className="flex items-center mx-auto max-w-[1600px]">
				<Link to="/" className="flex items-center">
					<img src="/logo.png" alt="#" width={600} height={500} className="w-24 h-20" />
					<p className="text-3xl font-lato font-bold">TQ-Max</p>
				</Link>
				<div className="flex gap-7 text-xl items-center ms-14">
					<Link to="/" className={`hover:font-bold py-8 border-b-2 ${location.pathname == "/" ? "border-b-slate-500" : "border-b-transparent"}`}>
						Home
					</Link>
					<Link to="/calculator" className={`hover:font-bold py-8 border-b-2 ${location.pathname == "/calculator" ? "border-b-slate-500" : "border-b-transparent"}`}>
						Calculator
					</Link>
					<Link to="/payment" className={`hover:font-bold py-8 border-b-2 ${location.pathname == "/payment" ? "border-b-slate-500" : "border-b-transparent"}`}>
						Payment
					</Link>
				</div>
				<div className="flex gap-3 ms-auto text-xl">
					<Link to="/login">
						<button className={`py-2 px-3 border-blue-300 border rounded-md hover:bg-blue-300 ${location.pathname == "/login" && "bg-blue-300"}`}>Login</button>
					</Link>
					<Link to="/register">
						<button className={`py-2 px-3 border-blue-300 border rounded-md hover:bg-blue-300 ${location.pathname == "/register" && "bg-blue-300"}`}>Register</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
