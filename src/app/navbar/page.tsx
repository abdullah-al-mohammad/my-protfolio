import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/favicon.ico";

const Navbar = () => {
	const navLinks = (
		<>
			<li>
				<Link href="/">home</Link>
			</li>
			<li>
				<Link href="portfolio">projects</Link>
			</li>
			<li>
				<Link href="contact">contact</Link>
			</li>
		</>
	);
	return (
		<div className="bg">
			<div className="navbar bg-transparent">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>{" "}
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							{navLinks}
						</ul>
					</div>
					<a className="btn btn-ghost text-xl">
						<Image className="w-20" src={logo} alt="ab"></Image>
						abdullah
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{navLinks}</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
