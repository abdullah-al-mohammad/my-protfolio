import React from "react";
import "./education.css";
import Image from "next/image";
import honours from "../../../public/images/honours.png";
import alim from "../../../public/images/alim.png";

export default function Education() {
	return (
		<div className="Underline">
			<h1 className="text-center capitalize text-green-600 text-2xl mb-2">
				education
			</h1>
			<p className="mb-4 text-center">
				Alim (HSC) – Manikganj Islamia Kamil Madrasah (2016) BA (Honours) in
				Islamic Studies – Govt. Debendra College, Manikganj
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5">
				<div className="card card-border w-auto">
					<div className="card-body">
						<div className="flex items-center">
							<Image src={alim} alt="alim" className="w-20"></Image>
							<h2 className="card-title capitalize font-bold">
								Alim(HSC)* [2016]*
							</h2>
						</div>
						<p className="capitalize italic">
							manikganj islamia kamil madrasah
						</p>
						<p>
							I completed my Alim exam in 2016, where I studied Islamic subjects
							along with general education.
						</p>
					</div>
				</div>
				<div className="card card-border bg-base-100 w-auto">
					<div className="card-body">
						<div className="flex items-center">
							<Image src={honours} alt="honours" className="w-20"></Image>
							<h2 className="card-title capitalize font-bold">
								Bachelor of Arts in Islamic Studies (Honours)
							</h2>
						</div>
						<p className="italic">Gov. Debendra College, Manikganj</p>
						<p>
							I earned my Honours degree in Islamic Studies, learning about
							religion, history, and fikah.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
