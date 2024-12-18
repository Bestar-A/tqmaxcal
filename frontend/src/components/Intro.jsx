const Intro = () => {
	return (
		<div className="py-20 px-5 flex gap-10 relative" id="intro">
			<div className="p-10 flex flex-col content-center h-full xl:ms-[10%] lg:ms-[5%] md:ms-0 w-[46%]">
				<h1 className="text-3xl font-bold mb-10">
					Automate your Mortgage Acceleration with
					<br /> Round-Ups and Save
				</h1>
				<h2 className="border rounded-xl p-8 shadow-xl">
					Take control of our finances with our MAC1 Mortgage Acceleration System. Track, Manage and Payoff your Mortgage Early and Save on mortgage interest.
					<br />
					<br />
					• Use Round-ups and Spare Change to accelerate your Mortgage
					<br />
					<br />• Use Additional Lumpsum to turbocharge your Mortgage Payoff and be mortgage-free sooner while reducing the total mortgage interest paid
				</h2>
			</div>
			<img src="/assets/images/phone.png" alt="Get your dream home" width={1920} height={1097} className="w-[20rem] absolute right-[10%] top-10" />
			{/* <img
							src="/assets/images/dots.png"
							alt="Get your dream home"
							width={1920}
							height={1097}
							className="top-[50%] -right-20 translate-x-1/2 -translate-y-1/2 opacity-90 absolute -z-50 w-[65rem]"
						/> */}
		</div>
	);
};

export default Intro;
