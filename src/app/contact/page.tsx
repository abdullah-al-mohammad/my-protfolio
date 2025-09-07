"use client";
import Image from "next/image";
import React, { useRef } from "react";
import location from "../../../public/images/location.png";
import phone from "../../../public/images/phone.png";
import mail from "../../../public/images/mail.png";
import linkdien from "../../../public/images/linkedin.png";
import facebook from "../../../public/images/facebook.png";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
	const form = useRef<HTMLFormElement | null>(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.current) {
			alert("Form reference is null");
			return;
		}

		emailjs
			.sendForm("service_ky8i628", "template_v67tv7w", form.current, {
				publicKey: "S0ihO7XxOK3_7Hcof"
			})
			.then(
				() => {
					alert("SUCCESS!");
					e.currentTarget.reset();
				},
				error => {
					console.log("FAILED...", error.text);
					alert("Something went wrong. Please try again.");
				}
			);
	};

	return (
		<div className="contactBG h-screen">
			<div className="max-w-screen-xl mx-auto mb-2">
				<h1 className="capitalize text-2xl font-bold text-center">
					get in touch now 😊, let&apos;s have a cup of tea ☕
				</h1>
				<div className="footer sm:footer-horizontal p-10">
					<nav>
						<Image className="w-10" src={location} alt="address" />
						<h6 className="footer-title">Address</h6>
						<address className="link link-hover">
							<span>Manikganj,Dhaka</span>
						</address>
					</nav>
					<nav>
						<Image className="w-10" src={phone} alt="phone" />
						<h6 className="footer-title">Phone</h6>
						<p>01628860956</p>
						<p>01998304128</p>
					</nav>
					<nav>
						<Image className="w-10" src={mail} alt="mail" />
						<h6 className="footer-title">Email</h6>
						<a className="link link-hover">abdullahalmuhammad6@gmail.com</a>
						<a className="link link-hover">abdullahalmuhammad6@gmail.com</a>
					</nav>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
					<div>
						<h2 className="capitalize text-2xl mb-2">let&apos;s connect</h2>
						<a
							className="link link-hover flex items-center gap-2"
							href="https://www.linkedin.com/in/md-abdullah-598a38258"
						>
							<Image className="w-5 mb-2" src={linkdien} alt="linkdien" />
							<p className="capitalize">linkdien</p>
						</a>
						<a
							className="link link-hover flex items-center gap-2"
							href="https://www.facebook.com/abdullah.al.muhammad.482009"
						>
							<Image className="w-5 mb-2" src={facebook} alt="facebook" />
							<p className="capitalize">facebook</p>
						</a>
					</div>
					<div>
						<h2 className="text-2xl capitalize mb-2">send me a message</h2>
						<form
							ref={form}
							onSubmit={sendEmail}
							className="grid grid-cols-1 md:grid-cols-2 gap-2"
						>
							<div>
								<label>Name</label>
								<input
									className="input"
									type="text"
									name="user_name"
									placeholder="Your Name"
									required
								/>
							</div>
							<div>
								<label>Email</label>
								<input
									className="input"
									type="email"
									name="user_email"
									required
								/>
							</div>
							<div className="col-span-2">
								<label>Message</label>
								<textarea
									className="textarea row-span-2 block"
									name="message"
								/>
							</div>
							<input
								className="btn bg-gradient-to-r from-[#0c8d8dbc] to-[#7b1]"
								type="submit"
								value="Send"
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
