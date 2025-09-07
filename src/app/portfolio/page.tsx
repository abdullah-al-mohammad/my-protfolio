"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay } from "swiper/modules";
import image1 from "../../../public/images/Blood Donation.png";
import image2 from "../../../public/images/studentLession.jpg";
import image3 from "../../../public/images/ecommerce.jpg";

import Image from "next/image";

export default function Portfolio() {
	return (
		<div className="max-w-screen-xl mx-auto px-4 Underline h-screen">
			<h1 className="text-2xl capitalize text-green-600 text-center mb-10">
				projects
			</h1>
			<div>
				<Swiper
					slidesPerView={3}
					spaceBetween={50}
					freeMode={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 40
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 100
						}
					}}
					modules={[Autoplay]}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className="card bg-base-100 w-96 shadow-sm mb-5">
							<figure>
								<Image src={image1} alt="blood"></Image>
							</figure>
							<div className="card-body p-4">
								<h2 className="card-title text-2xl font-bold">
									Blood Donation
								</h2>
								<p className="font-bold">
									Connecting donors with recipients in real time
								</p>
								<p>
									A full-stack blood donation app with location-based donor
									matching, auth, tracking, and responsive design—built using
									React, Tailwind, Firebase/MERN, and DaisyUI.
								</p>
								<div className="card-actions justify-end">
									<a
										className="link underline text-blue-400 capitalize"
										href={
											"https://github.com/abdullah-al-mohammad?tab=repositories"
										}
									>
										view code
									</a>
									<a
										className="link ml-3 underline text-blue-400 capitalize"
										href="https://blood-donation-77604.web.app"
									>
										live demo
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card bg-base-100 w-96 shadow-sm mb-5">
							<figure>
								<Image src={image2} alt="study"></Image>
							</figure>
							<div className="card-body p-4">
								<h2 className="card-title text-2xl font-bold">
									online groupe study
								</h2>
								<p className="font-bold">
									Connect with peers, share insights, and solve problems
									together.
								</p>
								<p>
									Stay consistent and motivated through scheduled online study
									sessions.
								</p>
								<div className="card-actions justify-end">
									<a
										className="link underline text-blue-400 capitalize"
										href={
											"https://github.com/abdullah-al-mohammad/online-group-study"
										}
									>
										view code
									</a>
									<a
										className="link ml-3 underline text-blue-400 capitalize"
										href="https://online-group-study-5c0f0.web.app"
									>
										live demo
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card bg-base-100 w-96 shadow-sm mb-5">
							<figure>
								<Image src={image3} alt="ecommerce"></Image>
							</figure>
							<div className="card-body p-4">
								<h2 className="card-title text-2xl font-bold">
									Shop the Best, Live the Best
								</h2>
								<p className="font-bold">
									Discover top-quality products at unbeatable prices. Fast
									shipping, easy returns, and endless choices—all in one place.
								</p>
								<p>Quality you can trust, prices you’ll love.</p>
								<div className="card-actions justify-end">
									<a
										className="link underline text-blue-400 capitalize"
										href={
											"https://github.com/abdullah-al-mohammad?tab=repositories"
										}
									>
										view code
									</a>
									<a
										className="link ml-3 underline text-blue-400 capitalize"
										href="https://cartify-f3a7b.web.app"
									>
										live demo
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* <SwiperSlide>
						<div className="card bg-base-100 w-96 shadow-sm mb-5">
							<figure>
								<Image src={image1} alt="blood"></Image>
							</figure>
							<div className="card-body p-4">
								<h2 className="card-title font-bold text-2xl">
									Blood Donation
								</h2>
								<p className="font-bold">
									Connecting donors with recipients in real time
								</p>
								<p>
									A full-stack web app that streamlines blood donation requests
									and matches donors based on location and blood type. Features
									include user authentication, request tracking, and mobile
									responsiveness.React, Tailwind CSS, Firebase (or
									MongoDB/Express if MERN), DaisyUI
								</p>
								<div className="card-actions justify-end">
									<a
										className="link underline text-blue-400 capitalize"
										href={
											"https://github.com/abdullah-al-mohammad?tab=repositories"
										}
									>
										view code
									</a>
									<a
										className="link ml-3 underline text-blue-400 capitalize"
										href="https://blood-donation-77604.web.app"
									>
										live demo
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card bg-base-100 w-96 shadow-sm mb-5">
							<figure>
								<Image src={image1} alt="blood"></Image>
							</figure>
							<div className="card-body p-4">
								<h2 className="card-title font-bold text-2xl">
									Blood Donation
								</h2>
								<p className="font-bold">
									Connecting donors with recipients in real time
								</p>
								<p>
									A full-stack web app that streamlines blood donation requests
									and matches donors based on location and blood type. Features
									include user authentication, request tracking, and mobile
									responsiveness.React, Tailwind CSS, Firebase (or
									MongoDB/Express if MERN), DaisyUI
								</p>
								<div className="card-actions justify-end">
									<a
										className="link underline text-blue-400 capitalize"
										href={
											"https://github.com/abdullah-al-mohammad?tab=repositories"
										}
									>
										view code
									</a>
									<a
										className="link ml-3 underline text-blue-400 capitalize"
										href="https://blood-donation-77604.web.app"
									>
										live demo
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card bg-base-100 w-96 shadow-sm mb-5">
							<figure>
								<Image src={image1} alt="blood"></Image>
							</figure>
							<div className="card-body p-4">
								<h2 className="card-title font-bold text-2xl">
									Blood Donation
								</h2>
								<p className="font-bold">
									Connecting donors with recipients in real time
								</p>
								<p>
									A full-stack web app that streamlines blood donation requests
									and matches donors based on location and blood type. Features
									include user authentication, request tracking, and mobile
									responsiveness.React, Tailwind CSS, Firebase (or
									MongoDB/Express if MERN), DaisyUI
								</p>
								<div className="card-actions justify-end">
									<a
										className="link underline text-blue-400 capitalize"
										href={
											"https://github.com/abdullah-al-mohammad?tab=repositories"
										}
									>
										view code
									</a>
									<a
										className="link ml-3 underline text-blue-400 capitalize"
										href="https://blood-donation-77604.web.app"
									>
										live demo
									</a>
								</div>
							</div>
						</div>
					</SwiperSlide> */}
				</Swiper>
			</div>
		</div>
	);
}
