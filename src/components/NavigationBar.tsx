
import { NavLink } from 'react-router';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/characters', label: 'Characters' },
  { path: '/locations', label: 'Locations' },
  { path: '/episodes', label: 'Episodes' },
];

export const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <ul className="flex justify-center space-x-6">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-yellow-400'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
