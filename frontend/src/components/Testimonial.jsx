import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testimonialLists = [
	{
		id: 1,
		rating: 4.9,
		message: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
		name: "Jane D",
		position: "CEO",
		avatar: "https://pagedone.io/asset/uploads/1696229969.png",
	},
	{
		id: 2,
		rating: 4.9,
		message: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
		name: "Harsh P.",
		position: "Product Designer",
		avatar: "https://pagedone.io/asset/uploads/1696229994.png",
	},
	{
		id: 3,
		rating: 4.9,
		message: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
		name: "Jane D",
		position: "CEO",
		avatar: "https://pagedone.io/asset/uploads/1696229969.png",
	},
	{
		id: 4,
		rating: 4.9,
		message: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
		name: "Harsh P.",
		position: "Product Designer",
		avatar: "https://pagedone.io/asset/uploads/1696229994.png",
	},
];

const Testimonials = () => {
	return (
		<Swiper
			// install Swiper modules
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={3}
			pagination={{ clickable: true }}
		>
			{testimonialLists.map((testimonial) => (
				<SwiperSlide key={testimonial.id}>
					<div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
						<div>
							<div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
								<svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
										fill="currentColor"
									/>
								</svg>
								<span className="text-base font-semibold text-indigo-600">{testimonial.rating}</span>
							</div>
							<p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">{testimonial.message}</p>
						</div>
						<div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
							<img className="rounded-full h-10 w-10 object-cover" src={testimonial.avatar} alt="avatar" />
							<div className="block">
								<h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">{testimonial.name}</h5>
								<span className="text-sm leading-4 text-gray-500">{testimonial.position}</span>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Testimonials;
