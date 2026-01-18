'use client';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function About() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=10mziOKu-kPurSDebDGnvq4XZxLlDaUoQ';
    link.download = 'AbdullahCV.pdf';
    link.click();
  };
  return (
    <>
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
        <img src="../../images/ab.png" className="w-24 h-24 rounded-full mx-auto mb-4" />

        <h2 className="text-xl font-bold text-center">Name: Md Abdullah</h2>
        <p className="text-center text-amber-400">Junior MERN Developer</p>

        <p className="text-center text-sm text-gray-400 mt-3">
          I build responsive and user-friendly web applications using modern technologies.
        </p>

        <div className="mt-5 space-y-3 text-sm text-center">
          <p>Nationality: Bangladesh</p>
          <p>Email: abdullahalmuhammad6@gmail.com</p>
          <p>Number: 01628860956</p>
          <p>Address: East Dashora, Manikganj-1800, Dhaka, Bangladesh</p>
        </div>

        <div className="flex justify-center gap-4 mt-6">
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
