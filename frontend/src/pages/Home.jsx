import { AiOutlineDoubleRight } from "react-icons/ai";
import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";
const Home = () => {
	return (
		<>
			<div className="px-20">
				<div className="max-w-[1600px] mx-auto">
					<div className="py-10 px-5 columns-2 gap-10 mb-10" id="intro">
						<div className="px-10 py-10 flex flex-col content-center h-full">
							<h1 className="text-3xl font-bold mb-5">Get Cashback to Pay-Off your Mortgage!</h1>
							<h2 className="mb-8">
								You can earn Cashback Rewards with your everyday spending when you shop online at on e of over 400 400 TQ-Max Merchants, you'll automatically get a percentage of your
								purchases back as Cash Rewards. Just like paying yourself your own commission from buying they thing you need - <span className="font-semibold">Why Not?</span>
							</h2>
							<button className="px-4 py-2 ms-auto border rounded-md border-blue-300 flex items-center gap-2 hover:bg-blue-300">
								LEARN MORE
								<AiOutlineDoubleRight />
							</button>
						</div>
						<img src="/assets/images/home_1.jpg" alt="Get your dream home" width={1920} height={1097} className="w-full h-full rounded-xl shadow-2xl" />
					</div>
					<div className="my-10">
						<h1 className="text-center mb-10 text-3xl font-bold">What our customers say</h1>
						<Testimonials />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
