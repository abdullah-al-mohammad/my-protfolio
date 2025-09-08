"use client";
import Image from "next/image";
import abadullah from "../../../public/images/abdullah.png";
import "./banner.css";

export default function Banner() {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href =
			"https://drive.google.com/uc?export=download&id=10mziOKu-kPurSDebDGnvq4XZxLlDaUoQ";
		link.download = "AbdullahCV.pdf";
		link.click();
	};

	return (
		<div className="max-w-screen-xl mx-auto px-4 lg:space-y-20 space-y-10">
			<div className="flex-none lg:flex items-center lg:justify-between gap-x-10 text-center lg:text-start mt-16">
				<div className="mb-10 lg:mb-0">
					<h1 className="mb-6 text-2xl">
						<span className="block mb-5">I am</span>
						<span className="text-5xl uppercase">md abdullah</span>
					</h1>
					<h2 className="mb-6 capitalize  bg-gradient-to-r from-[#0c8d8dbc] to-[#7b1] text-transparent bg-clip-text">
						a professional <span className="text-5xl">developer</span>
					</h2>
					<p className="mb-6">
						UI/UX Designer & Developer passionate about building clean,
						responsive, and user-friendly web applications.
					</p>
					<button
						onClick={handleDownload}
						className="btn btn-lg capitalize px-6 py-2  bg-gradient-to-r from-[#0c8d8dbc] to-[#7b1]"
					>
						download cv
					</button>
				</div>
				{/* <div> */}
				<Image className="mx-auto lg:mx-0" src={abadullah} alt="abdullah" />
				{/* </div> */}
			</div>
		</div>
	);
}
