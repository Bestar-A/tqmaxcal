import { Link, useLocation } from "react-router-dom";

export const Header = () => {
	const location = useLocation();

	return (
		<nav
			className={`px-20 ease-in-out duration-500 border-opacity-25 border-b z-10 bg-white ${
				location.pathname == "/login" || location.pathname == "/register" ? "opacity-0 hover:opacity-100" : ""
			}`}
		>
			<div className="flex items-center mx-auto max-w-[1600px]">
				<Link to="/">
					<div className="flex items-center">
						<img src="/logo.png" alt="#" width={600} height={500} className="w-24 h-20" />
						<p className="text-3xl font-lato font-bold">MAC1</p>
					</div>
					<p className="-mt-3">Mortgage Acceleration Calculator</p>
				</Link>
				<div className="flex gap-7 text-xl items-center ms-14">
					<Link to="/" className={`ease-linear duration-700 py-8 border-b-2 ${location.pathname == "/" ? "border-b-slate-500" : "border-b-transparent"}`}>
						Home
					</Link>
					<Link to="/guide" className={`ease-linear duration-700 py-8 border-b-2 ${location.pathname == "/guide" ? "border-b-slate-500" : "border-b-transparent"}`}>
						How it Works
					</Link>
					<Link to="/start" className={`ease-linear duration-700 py-8 border-b-2 ${location.pathname == "/start" ? "border-b-slate-500" : "border-b-transparent"}`}>
						Get Started
					</Link>
					<Link to="/calculator" className={`ease-linear duration-700 py-8 border-b-2 ${location.pathname == "/calculator" ? "border-b-slate-500" : "border-b-transparent"}`}>
						Calculators
					</Link>
					<Link to="/contact" className={`ease-linear duration-700 py-8 border-b-2 ${location.pathname == "/contact" ? "border-b-slate-500" : "border-b-transparent"}`}>
						Contact
					</Link>
				</div>
				<div className="flex gap-3 ms-auto text-xl">
					<Link to="/login">
						<button className={`py-2 px-3 ease-in-out duration-500 border-white border rounded-md hover:bg-blue-300 ${location.pathname == "/login" && "bg-blue-300"}`}>Login</button>
					</Link>
					<Link to="/register">
						<button className={`py-2 px-3 ease-in-out duration-500 border-white border rounded-md hover:bg-blue-300 ${location.pathname == "/register" && "bg-blue-300"}`}>Register</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
