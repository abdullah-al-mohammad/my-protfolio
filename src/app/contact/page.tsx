"use client";
import Image from "next/image";
import React, { useRef } from "react";
import location from "../../../public/images/location.png";
import phone from "../../../public/images/phone.png";
import mail from "../../../public/images/mail.png";
import linkdien from "../../../public/images/linkedin.png";
import facebook from "../../../public/images/facebook.png";
import github from "../../../public/images/github.png";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { toast, ToastContainer } from "react-toastify";

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
					toast.success("Mail Send Successfully");
					e.currentTarget.reset();
				},
				error => {
					toast.error("Something went wrong. Please try again.");
				}
			);
	};

	return (
		<>
			<div className="mb-10 text-center md:text-start">
				<h1 className="capitalize text-2xl font-bold text-center mb-10">
					get in touch now 😊, let&apos;s have a cup of tea ☕
				</h1>
				{/* Contact Info */}
				<div className="grid grid-cols-2 md:grid-cols-3 md:w-2xl md:mx-auto justify-center py-10">
					<div>
						<Image
							className="w-15 mx-auto md:mx-0 rounded-full p-4 bg-gradient-to-r from-[#0c8d8dbc] to-[#7b1] mb-3 md:mb-0"
							src={location}
							alt="address"
						/>
						<h6 className="footer-title">Address</h6>
						<address className="link link-hover">
							<span>Manikganj,Dhaka</span>
						</address>
					</div>
					<div>
						<Image
							className="w-15 mx-auto md:mx-0 rounded-full p-4 bg-gradient-to-r from-[#0c8d8dbc] to-[#7b1] mb-3 md:mb-0"
							src={phone}
							alt="phone"
						/>
						<h6 className="footer-title">Phone</h6>
						<p>01628860956</p>
						<p>01998304128</p>
					</div>
					<div className="col-span-2 md:col-span-1 mt-5 md:mt-0">
						<Image
							className="w-15 mx-auto md:mx-0 rounded-full p-4 bg-gradient-to-r from-[#0c8d8dbc] to-[#7b1] mb-3 md:mb-0"
							src={mail}
							alt="mail"
						/>
						<h6 className="footer-title">Email</h6>
						<a className="link link-hover">abdullahalmuhammad6@gmail.com</a>
					</div>
				</div>

				{/* Social */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
					<div className="mx-auto md:mx-0">
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
						<a
							className="link link-hover flex items-center gap-2"
							href="https://github.com/abdullah-al-mohammad"
						>
							<Image className="w-5 mb-2" src={github} alt="facebook" />
							<p className="capitalize">github</p>
						</a>
					</div>

					{/* Contact Form */}
					<div>
						<h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
						<form
							ref={form}
							onSubmit={sendEmail}
							className="grid grid-cols-1 md:grid-cols-2 gap-4"
						>
							<div>
								<label className="block mb-1">Name</label>
								<input
									className="input w-full border px-3 py-2 rounded"
									type="text"
									name="user_name"
									placeholder="Your Name"
									required
								/>
							</div>
							<div>
								<label className="block mb-1">Email</label>
								<input
									className="input w-full border px-3 py-2 rounded"
									type="email"
									name="user_email"
									placeholder="Your Email"
									required
								/>
							</div>
							<div className="col-span-1 md:col-span-2">
								<label className="block mb-1">Message</label>
								<textarea
									className="textarea w-full border px-3 py-2 rounded"
									name="message"
									placeholder="Your Message"
									required
								></textarea>
							</div>
							<div className="col-span-1 md:col-span-2 flex justify-center">
								<input
									className="btn w-32 bg-gradient-to-r from-[#0c8d8dbc] to-[#7b1] text-white px-4 py-2 rounded cursor-pointer"
									type="submit"
									value="Send"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
			<ToastContainer></ToastContainer>
		</>
	);
}
