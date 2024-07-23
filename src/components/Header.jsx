import { NavLink } from "react-router-dom";
import { navItems } from "../nav-items";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4">
        <ul className="flex space-x-4 h-16 items-center">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 ${
                    isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                  }`
                }
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;