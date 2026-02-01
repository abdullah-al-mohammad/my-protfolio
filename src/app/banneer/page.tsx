'use client';
import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';
import abadullah from '../../../public/images/ab.png';
export default function Banner() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1K8MJlg2Mc0fkjIDI-sM3aVBTbwqKqeps';
    link.download = 'abdullahResume.pdf';
    link.click();
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:justify-between text-center lg:text-start">
        <div className="absolute left-0 top-0 h-full w-9/12 hidden md:block bg-amber-400 [clip-path:polygon(0%_0%,20%_0%,30%_100%,0%_100%)]"></div>
        <div className="shadow rounded-2xl overflow-hidden z-10 mt-5 md:-ml-16 relative md:w-125 mx-auto mb-10">
          <Image className="rounded-xl" src={abadullah} alt="abdullah" />
        </div>
        <div className="mb-10 lg:mb-0">
          <h1 className="mb-6 text-2xl">
            <span className="block mb-5 uppercase">I am</span>
            <span className="text-2xl md:text-4xl uppercase">md abdullah</span>
          </h1>
          <h2 className="mb-6 capitalize text-amber-400">
            a professional <span className="text-5xl">developer</span>
          </h2>
          <p className="mb-6">
            I build responsive and easy-to-use web applications using React, Tailwind, and
            JavaScript. I like turning ideas into real projects with clean code and a modern design.
            I am always learning new things and improving my skills as a developer.
          </p>
          <button
            onClick={handleDownload}
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
              download cv
              <FaLongArrowAltRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
