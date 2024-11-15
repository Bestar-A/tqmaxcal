import Intro from "../components/Intro";
import Membership from "../components/Membership";
import Contact from "../components/Contact";

const Home = () => {
	return (
		<>
			<div className="lg:px-20 md:px-10 sm:px-5 overflow-x-hidden relative">
				<div className="max-w-[1600px] mx-auto">
					<h1 className="bg-blue-300 text-center p-5">
						My freelancer account has been under the ID verify. That is why I could not contact you for a several days.
						<br />I have resolved all issues on my freelancer account, so I have been very busy these days. I am working on your project now and I will update your project soon.
						<br />
						<br />
						Skype: live:.cid.ae5e3eda8e3653c2
						<br /> Telegram: @muhammada72
					</h1>
					<Intro />
					<Membership />
					<Contact />
				</div>
			</div>
		</>
	);
};

export default Home;
