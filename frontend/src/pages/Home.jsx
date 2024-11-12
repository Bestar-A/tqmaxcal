import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";
import Membership from "../components/Membership";
import Contact from "../components/Contact";

const Home = () => {
	return (
		<>
			<div className="px-20 overflow-x-hidden relative">
				<div className="max-w-[1600px] mx-auto">
					<div className="py-20 px-5 flex gap-10 relative" id="intro">
						<div className="p-10 flex flex-col content-center h-full ms-[10%] w-[46%]">
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
						<img
							src="/assets/images/dots.png"
							alt="Get your dream home"
							width={1920}
							height={1097}
							className="top-[50%] -right-20 translate-x-1/2 -translate-y-1/2 opacity-90 absolute -z-50 w-[65rem]"
							// style={{ animationDuration: "200s" }}
						/>
					</div>
					<Membership />
					<div className="my-10">
						<h1 className="text-center mb-10 text-3xl font-bold">What our customers say</h1>
						<Testimonials />
					</div>
					<Contact />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
