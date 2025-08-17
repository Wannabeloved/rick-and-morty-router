
import { NavLink } from 'react-router';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/characters', label: 'Characters' },
  { path: '/locations', label: 'Locations' },
  { path: '/episodes', label: 'Episodes' },
];

export function NavigationBar() {

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
        <AuthButtons />
      </ul>
    </nav>
  );
};

function AuthButtons() {
  const { isLoggedIn, logout } = useAuth();

  const buttonClasses = "bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105";

  return (
    <div className="flex space-x-4">
      {isLoggedIn ? (
          <li>
            <button
              onClick={logout}
              className={buttonClasses}
            >
              Signout
            </button>
          </li>
        ) : (
          <>
            <li>
              <NavLink
                to="/login"
                className={buttonClasses}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={buttonClasses}
              >
                Signup
              </NavLink>
            </li>
          </>
        )}
    </div>
  );
}