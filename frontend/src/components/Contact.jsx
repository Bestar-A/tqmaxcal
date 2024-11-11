import { BsFillSendFill } from "react-icons/bs";
const Contact = () => {
	return (
		<div className="pt-10 pb-16 bg-blue-50 -mx-20">
			<h1 className="text-3xl text-center font-bold mb-10">Contact Us</h1>
			<div className="flex justify-center">
				<img src="/assets/images/phone.jpg" alt="Contact" width={6240} height={4160} className="w-1/3 rounded-s-xl" />
				<div className="p-8 rounded-e-xl bg-white w-1/4">
					<h2 className="text-xl pb-3 border-b font-bold text-center">Would love to hear from you</h2>
					<div className="pt-4 flex flex-col gap-3">
						<input type="text" placeholder="Enter your email" className="w-full outline-none border py-1 px-2 rounded-md hover:border-blue-200 focus:border-blue-200" />
						<textarea rows={8} placeholder="Drop your message" className="w-full outline-none border py-1 px-2 rounded-md hover:border-blue-200 focus:border-blue-200"></textarea>
						<button className="py-1 rounded-md border border-blue-300 hover:bg-blue-300 flex justify-center items-center gap-2">
							<BsFillSendFill />
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
