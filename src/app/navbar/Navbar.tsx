'use client';
import { FaFileContract, FaHome, FaUser } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

const Navbar = ({ setActiveSection }: { setActiveSection?: (section: string) => void }) => {
  const handleNav = (section: string) => {
    if (setActiveSection) {
      setActiveSection(section);
    }
  };
  const navLinks = (
    <>
      <li>
        <button
          onClick={() => handleNav('home')}
          className="text-left relative group h-12 w-32 hover:bg-transparent text-black"
        >
          <span
            className="
              absolute top-0 right-0
              h-12 w-12
              rounded-full bg-amber-300
              transition-all duration-300
              group-hover:w-28
            "
          />
          <span
            className="
              absolute left-5 top-1/2
              -translate-y-1/2
              z-10 px-3
              opacity-0 transition
              group-hover:opacity-100
              font-bold
            "
          >
            Home
          </span>
          <span
            className="
              absolute top-0 right-0
              z-10 h-12 w-12
              flex items-center justify-center
              text-lg
            "
          >
            <FaHome />
          </span>
        </button>
      </li>
      <li>
        <button
          onClick={() => handleNav('projects')}
          className="text-left relative group h-12 w-32 hover:bg-transparent text-black"
        >
          <span
            className="
              absolute top-0 right-0
              h-12 w-12
              rounded-full bg-amber-300
              transition-all duration-300
              group-hover:w-28
            "
          />
          <span
            className="
              absolute left-5 top-1/2
              -translate-y-1/2
              z-10 px-3
              opacity-0 transition
              group-hover:opacity-100
              font-bold
            "
          >
            Projects
          </span>
          <span
            className="
              absolute top-0 right-0
              z-10 h-12 w-12
              flex items-center justify-center
              text-lg
            "
          >
            <MdWork />
          </span>
        </button>
      </li>
      <li>
        <button
          onClick={() => handleNav('contact')}
          className="text-left relative group h-12 w-32 hover:bg-transparent text-black"
        >
          <span
            className="
              absolute top-0 right-0
              h-12 w-12
              rounded-full bg-amber-300
              transition-all duration-300
              group-hover:w-28
            "
          />
          <span
            className="
              absolute left-5 top-1/2
              -translate-y-1/2
              z-10 px-3
              opacity-0 transition
              group-hover:opacity-100
              font-bold
            "
          >
            Contact
          </span>
          <span
            className="
              absolute top-0 right-0
              z-10 h-12 w-12
              flex items-center justify-center
              text-lg
            "
          >
            <FaFileContract />
          </span>
        </button>
      </li>
      <li>
        <button
          onClick={() => handleNav('about')}
          className="text-left relative group h-12 w-32 hover:bg-transparent text-black"
        >
          <span
            className="
              absolute top-0 right-0
              h-12 w-12
              rounded-full bg-amber-300
              transition-all duration-300
              group-hover:w-28
            "
          />
          <span
            className="
              absolute left-5 top-1/2
              -translate-y-1/2
              z-10 px-3
              opacity-0 transition
              group-hover:opacity-100
              font-bold
            "
          >
            About
          </span>
          <span
            className="
              absolute top-0 right-0
              z-10 h-12 w-12
              flex items-center justify-center
              text-lg
            "
          >
            <FaUser />
          </span>
        </button>
      </li>
    </>
  );

  return (
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="
              menu menu-sm dropdown-content
              bg-base-100 rounded-box
              z-10 mt-3 w-40
              p-2 shadow space-y-3
            "
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
