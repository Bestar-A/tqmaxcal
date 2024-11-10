import { Link, useLocation } from "react-router-dom";

const menuLists = {
	Home: "/",
	Calculator: "/calculator",
	Payment: "/payment",
};

export const Header = () => {
	const location = useLocation();

	return (
		<nav className="px-20 border-b-2 bg-transparent">
			<div className="flex items-center mx-auto max-w-[1600px]">
				<Link to="/" className="flex items-center">
					<img src="/logo.png" alt="#" width={600} height={500} className="w-24 h-20" />
					<p className="text-3xl font-lato font-bold">TQ-Max</p>
				</Link>
				<div className="flex gap-7 text-xl items-center ms-14">
					<Link to="/" className={`hover:text-blue-300 py-8 border-b-4 transition-all ${location.pathname == "/" ? "border-b-slate-500" : "border-b-transparent"}`}>
						Home
					</Link>
					<Link to="/calculator" className={`hover:text-blue-300 py-8 border-b-4 transition-all ${location.pathname == "/calculator" ? "border-b-slate-500" : "border-b-transparent"}`}>
						Calculator
					</Link>
					<Link to="/payment" className={`hover:text-blue-300 py-8 border-b-4 transition-all ${location.pathname == "/payment" ? "border-b-slate-500" : "border-b-transparent"}`}>
						Payment
					</Link>
				</div>
				<div className="flex gap-3 ms-auto text-xl">
					<Link to="/login">
						<button className={`py-3 px-3 border-[#BFE5F2] border-2 rounded-md hover:bg-[#BFE5F2] ${location.pathname == "/login" && "bg-[#BFE5F2]"}`}>Login</button>
					</Link>
					<Link to="/register">
						<button className={`py-3 px-3 border-[#BFE5F2] border-2 rounded-md hover:bg-[#BFE5F2] ${location.pathname == "/register" && "bg-[#BFE5F2]"}`}>Sign Up</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
