import { NavLink } from "react-router-dom";
import { FaHome, FaCode, FaBriefcase, FaBlog, FaUser } from "react-icons/fa";

const NAV_ITEMS = [
  { to: "/", icon: <FaHome />, label: "Inicio" },
  { to: "/proyectos", icon: <FaCode />, label: "Proyectos" },
  { to: "/portafolio", icon: <FaBriefcase />, label: "Portafolio" },
  { to: "/sobre-mi", icon: <FaUser />, label: "Sobre Mí" },
  { to: "/blog", icon: <FaBlog />, label: "Blog" },
];

function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-2 rounded-full shadow-lg border border-gray-300 dark:border-gray-800 bg-white/70 text-black dark:bg-black/70 dark:text-white backdrop-blur-md">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          title={item.label}
          className={({ isActive }) =>
            `hover:text-purple-400 transition-transform duration-200 hover:scale-110 ${
              isActive ? "text-purple-500" : ""
            }`
          }
        >
          {item.to === "/" ? (
            <span className="font-bold px-3">
              Luis Sánchez <span className="text-purple-400">dev</span>
            </span>
          ) : (
            item.icon
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
