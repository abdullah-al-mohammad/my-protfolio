'use client';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import React, { useRef } from 'react';
import {
  FaAddressBook,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
} from 'react-icons/fa';
import { MdOutgoingMail } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm('service_ky8i628', 'template_v67tv7w', form.current, {
        publicKey: 'S0ihO7XxOK3_7Hcof',
      })
      .then(
        () => {
          toast.success('Mail Send Successfully');
          e.currentTarget.reset();
        },
        () => {
          toast.error('Something went wrong. Please try again.');
        }
      );
  };
  return (
    <>
      <div id="contact" className="mb-10 text-center md:text-start">
        <h1 className="uppercase text-2xl text-amber-400 font-bold text-center mb-10">
          contact with me
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">
          <div className="mx-auto md:mx-0">
            <h2 className="capitalize text-2xl mb-2">let&apos;s connect</h2>
            <p className="mb-10">
              I welcome new opportunities and collaborations. Feel free to get in touch to discuss
              projects, creative ideas, or ways we can work together.
            </p>
            <p className="flex items-start gap-3 mb-5">
              <FaAddressBook className="mt-1 text-4xl text-black bg-amber-400 p-2 rounded" />
              <span className="flex flex-col">
                <span className="font-medium">Address Point</span>
                <span className="text-sm text-gray-500">
                  East Dashora, Manikganj-1800, Dhaka, Bangladesh.
                </span>
              </span>
            </p>
            <p className="flex items-start gap-3 mb-5">
              <FaMailBulk className="mt-1 text-4xl text-black bg-amber-400 p-2 rounded" />
              <span className="flex flex-col">
                <span className="font-medium">Mail Me</span>
                <span className="text-sm text-gray-500">abdullahalmuhammad6@gmail.com</span>
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FaPhone className="mt-1 text-4xl text-black bg-amber-400 p-2 rounded" />
              <span className="flex flex-col">
                <span className="font-medium">Call Me</span>
                <span className="text-sm text-gray-500">01628860956</span>
              </span>
            </p>
            <div className="flex gap-10 mt-5">
              <Link
                className="link link-hover flex items-center gap-2"
                href="https://www.linkedin.com/in/md-abdullah-598a38258"
              >
                <span className="bg-white/10 hover:bg-amber-400 p-3 rounded-full text-white text-2xl">
                  <FaLinkedinIn />
                </span>
              </Link>
              <Link
                className="link link-hover flex items-center gap-2"
                href="https://www.facebook.com/abdullah.al.muhammad.482009"
              >
                <span className="bg-white/10 hover:bg-amber-400 p-3 rounded-full text-white text-2xl">
                  <FaFacebook />
                </span>
              </Link>
              <Link
                className="link link-hover flex items-center gap-2 text-white"
                href="https://github.com/abdullah-al-mohammad"
              >
                <span className="bg-white/10 hover:bg-amber-400 p-3 rounded-full text-white text-2xl">
                  <FaGithub />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">send me a message</h2>
            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  className="input w-full border focus:border-amber-400 invalid:outline-0"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  className="input w-full border focus:border-amber-400 invalid:outline-0"
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block mb-1">Message</label>
                <textarea
                  className="textarea w-full border px-3 pb-28 rounded-2xl focus:border-amber-400 invalid:outline-0"
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="col-span-1 md:col-span-2 flex justify-end">
                <button
                  className="
                  relative overflow-hidden
                  inline-flex items-center gap-3
                  px-6 py-3 rounded-2xl
                  border border-amber-400
                  text-amber-400 font-medium capitalize
                  transition-colors duration-300
                  hover:text-white
                  before:absolute before:inset-0
                  before:bg-amber-400
                  before:translate-x-full
                  before:transition-transform before:duration-300
                  before:ease-in-out
                  hover:before:translate-x-0
                  hover:shadow-[0_0_25px_rgba(251,191,36,0.8)]
                "
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message <MdOutgoingMail />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
