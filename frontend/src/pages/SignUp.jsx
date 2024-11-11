import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<div className="w-full absolute -z-10 top-0 left-0" style={{ height: "100vh" }}>
			<img src="../../src/assets/images/back.jpg" alt="TQ-MAX" width={1920} height={1097} className="w-full h-full object-center" />
			<div className="rounded-lg shadow-md shadow-gray-300 lg:w-1/4 absolute lg:top-1/2 lg:right-1/4 z-10 bg-white lg:translate-x-1/2 lg:-translate-y-1/2 py-9 px-10">
				<div className="text-2xl mb-4 font-bold">Register</div>
				<div className="flex gap-3 mb-7">
					<div className="text-md">Already have an account?</div>
					<Link to="/login" className="text-blue-400">
						Login
					</Link>
				</div>
				<div className="flex flex-col gap-3">
					<div>
						<div>Email</div>
						<input type="email" className="border rounded-md outline-none py-1 px-2 w-full hover:border-blue-300 focus:border-blue-300" />
					</div>
					<div>
						<div>Password</div>
						<input type="password" className="border rounded-md outline-none py-1 px-2 w-full hover:border-blue-300 focus:border-blue-300" />
					</div>
					<div>
						<div>Confirm Password</div>
						<input type="password" className="border rounded-md outline-none py-1 px-2 w-full hover:border-blue-300 focus:border-blue-300" />
					</div>
					<button className="bg-blue-100 ms-auto px-4 py-2 rounded-md mt-2 hover:bg-blue-200">Register</button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
