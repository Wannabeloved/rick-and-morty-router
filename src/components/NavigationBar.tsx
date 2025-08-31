
import { NavLink, useLocation } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/characters', label: 'Characters' },
  { path: '/locations', label: 'Locations' },
  { path: '/episodes', label: 'Episodes' },
];

export function NavigationBar() {
  const { pathname } = useLocation();
  return (
    <nav className="flex justify-center bg-gray-800 text-white p-4 shadow-md">
      <ul className="flex justify-center space-x-1 mr-3.5">
        {navLinks.map((link) => (
          <li key={link.path} className="content-center">
            <Link
              as={NavLink}
              href={link.path}
              size="lg"
              isBlock
              color={pathname === link.path ? "success" : "primary"}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <AuthButtons />
    </nav>
  );
};

function AuthButtons() {
  const { isLoggedIn, logout } = useAuth();

  // const buttonClasses = "bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105";

  return (
    <div className="flex space-x-4">
      {isLoggedIn ? (
            <Button 

              onPress={logout}
              href="/login"
              color="primary"
            >Signout</Button>
        ) : (
          <>
              <Button 
                as={Link}
                href="/login"
                color="primary"
              >Login</Button>
              <Button 
                as={Link}
                href="/signup"
                color="primary"
              >Signup</Button>
          </>
        )}
    </div>
  );
}