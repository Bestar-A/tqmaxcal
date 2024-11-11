const Membership = () => {
	return (
		<div className="pt-10 pb-16 bg-blue-100 -mx-20">
			<h1 className="text-3xl text-center font-bold mb-10">Maximize your experience</h1>
			<div className="flex justify-center gap-12">
				<div className="p-10 bg-white rounded-xl flex flex-col relative">
					<h2 className="text-2xl font-bold border-b pb-2">Basic</h2>
					<ul className="list-image-[url('/assets/images/check.svg')] space-y-2 my-5">
						<li>
							<h3>Use Mortgage Calculator</h3>
						</li>
						<li>
							<h3>Manual Update Credit Card Statement</h3>
						</li>
						<li className="opacity-0">
							<h3>Empty</h3>
						</li>
						<li className="opacity-0">
							<h3>Empty</h3>
						</li>
					</ul>
					<h3 className="text-right text-xl font-semibold mb-5">$0/mo</h3>
					<button
						className="py-2 px-3 border-green-500 border-2 rounded-md hover:bg-green-500 w-full disabled:text-gray-200 disabled:bg-green-500 disabled:hover:bg-green-500 font-bold"
						disabled
					>
						Selected
					</button>
					<div className="absolute top-5 -right-3 px-6 py-2 bg-green-500 rounded-md text-xl text-white font-bold">Free</div>
				</div>
				<div className="p-10 bg-white rounded-xl flex flex-col relative">
					<h2 className="text-2xl font-bold border-b pb-2">Monthly</h2>
					<ul className="list-image-[url('/assets/images/check.svg')] space-y-2 my-5">
						<li>
							<h3>Use Mortgage Calculator</h3>
						</li>
						<li>
							<h3>Automatic Update Credit Card Statement</h3>
						</li>
						<li>
							<h3>Manual Upload of Credit Card Statement</h3>
						</li>
						<li>
							<h3>Direct ACH Payments to Mortgage Processor</h3>
						</li>
					</ul>
					<h3 className="text-right text-xl font-semibold mb-5">$5/mo</h3>
					<button className="py-2 px-3 border-blue-200 border-2 rounded-md hover:bg-blue-200 font-bold">Choose</button>
					<div className="absolute top-5 -right-3 px-6 py-2 bg-yellow-400 rounded-md text-xl text-white font-bold">Paid</div>
				</div>
				<div className="p-10 bg-white rounded-xl flex flex-col relative">
					<h2 className="text-2xl font-bold border-b pb-2">Yearly</h2>
					<ul className="list-image-[url('/assets/images/check.svg')] space-y-2 my-5">
						<li>
							<h3>Use Mortgage Calculator</h3>
						</li>
						<li>
							<h3>Automatic Update Credit Card Statement</h3>
						</li>
						<li>
							<h3>Manual Upload of Credit Card Statement</h3>
						</li>
						<li>
							<h3>Direct ACH Payments to Mortgage Processor</h3>
						</li>
					</ul>
					<h3 className="text-right text-xl font-semibold mb-5">$40/yr</h3>
					<button className="py-2 px-3 border-yellow-500 border-2 rounded-md hover:bg-yellow-500 font-bold relative">
						Choose
						<img src="/assets/images/finger.png" alt="↓" width={400} height={427} className="w-8 h-8 absolute -top-10 left-[40%] animate-bounce" />
					</button>
					<div className="absolute top-5 -right-3 px-6 py-2 bg-yellow-400 rounded-md text-xl text-white font-bold">Paid</div>
				</div>
			</div>
		</div>
	);
};

export default Membership;
