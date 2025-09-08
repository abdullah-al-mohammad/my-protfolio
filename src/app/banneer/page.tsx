"use client";
import Image from "next/image";
import abadullah from "../../../public/images/abdullah.jpg";
import "./banner.css";
import Navbar from "../navbar/page"; // onsider moving Navbar to components

export default function Banner() {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href =
			"https://drive.google.com/uc?export=download&id=10mziOKu-kPurSDebDGnvq4XZxLlDaUoQ";
		link.download = "AbdullahCV.pdf";
		link.click();
	};

	return (
		<div className="bgBanner">
			<Navbar />
			<div className="flex-none lg:flex items-center lg:justify-between gap-x-10 text-center lg:text-start mt-16">
				<div className="mb-10 lg:mb-0">
					<h1 className="mb-6 text-2xl">
						<span className="block mb-5">I am</span>
						<span className="text-5xl uppercase">md abdullah</span>
					</h1>
					<h2 className="mb-6 capitalize bg-gradient-to-r from-[#0CFFFF] via-[#100425] to-[#DC00D3] text-transparent bg-clip-text">
						a professional <span className="text-5xl">developer</span>
					</h2>
					<p className="mb-6">
						I&apos;m a Freelance UI/UX Designer and Developer based in
						Bahawalpur, Pakistan. I strive to build immersive and beautiful web
						applications through carefully crafted code and user-centric design.
					</p>
					<button
						onClick={handleDownload}
						className="btn btn-lg capitalize px-6 py-2"
					>
						download cv
					</button>
				</div>
				{/* <div> */}
				<Image
					className="rounded-ee-2xl rounded-tl-2xl mx-auto lg:mx-0"
					src={abadullah}
					alt="abdullah"
				/>
				{/* </div> */}
			</div>
		</div>
	);
}
