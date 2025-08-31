
import { NavLink, useLocation } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Avatar, AvatarIcon } from '@heroui/avatar';
import { Image } from '@heroui/image';
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/characters', label: 'Characters' },
  { path: '/locations', label: 'Locations' },
  { path: '/episodes', label: 'Episodes' },
];

export const AcmeLogo = () => {
  return (
    <div className="flex flex-col leading-tight">
      <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Rick and Morty
      </span>
      <span className="block font-light">Universe Explorer</span>
    </div>
  );
};

export function NavigationBar() {
  const { pathname } = useLocation();
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <AcmeLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.path} className="content-center">
            <Link
              as={NavLink}
              to={link.path}
              size="lg"
              isBlock
              color={pathname === link.path ? "success" : "primary"}
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <AuthButtons />
      </NavbarContent>
    </Navbar>
  );
};

function AuthButtons() {
  const { isLoggedIn, logout } = useAuth();

  // const buttonClasses = "bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105";

  return (
    <>
      {isLoggedIn ? (
        <NavbarItem className="lg:flex">
          <Button 
            onPress={logout}
            color="primary"
          >Signout</Button>
        </NavbarItem>
      ) : (
        <>
          <NavbarItem className="lg:flex">
            <Button 
              as={NavLink}
              to="/login"
              color="primary"
            >Login</Button>
          </NavbarItem>
          <NavbarItem className="lg:flex">
            <Button 
              as={NavLink}
              to="/signup"
              color="primary"
            >Signup</Button>
          </NavbarItem>
        </>
      )}
    </>
  );
}