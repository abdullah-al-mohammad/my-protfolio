import { FaFileContract, FaHome, FaUser } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

type NavKey = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

const Navbar = ({
  current,
  onNavigate,
}: {
  current: NavKey;
  onNavigate: (s: NavKey) => void;
}) => {
  const items: { id: NavKey; label: string; icon?: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects', icon: <MdWork /> },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact', icon: <FaFileContract /> },
  ];

  const renderLink = (item: { id: NavKey; label: string; icon?: React.ReactNode }) => {
    const active = current === item.id;
    const base =
      'relative group h-12 px-3 flex items-center gap-3 rounded-lg transition-all duration-300';
    const activeClasses =
      'bg-amber-300 text-white shadow-[0_6px_20px_rgba(251,191,36,0.25)]';
    const hoverClasses = 'hover:bg-amber-300/20 hover:text-amber-200';

    return (
      <li key={item.id}>
        <button
          onClick={() => onNavigate(item.id)}
          className={`${base} ${active ? activeClasses : hoverClasses}`}
          aria-current={active ? 'page' : undefined}
        >
          <span className="flex items-center gap-2 text-sm font-medium">
            {item.icon && <span className="text-lg">{item.icon}</span>}
            <span className="capitalize">{item.label}</span>
          </span>
        </button>
      </li>
    );
  };

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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-44 p-2 shadow space-y-2"
          >
            {items.map((it) => (
              <li key={it.id}>
                <button
                  onClick={() => onNavigate(it.id)}
                  className={`w-full text-left px-3 py-2 rounded ${current === it.id ? 'bg-amber-300 text-white' : ''}`}
                >
                  <span className="flex items-center gap-3">
                    {it.icon && <span className="text-lg">{it.icon}</span>}
                    <span className="capitalize">{it.label}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-2">{items.map(renderLink)}</ul>
      </div>
    </div>
  );
};

export default Navbar;
