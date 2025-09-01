import { Outlet } from 'react-router';
import { NavigationBar } from './NavigationBar';
import { Providers } from '../context/index';

export const Layout = () => {
  return (
    <Providers>
      <div className="dark min-h-screen bg-gray-900 text-white">
        <NavigationBar />
        <main className="container mx-auto p-4">
          <Outlet />
        </main>
      </div>
    </Providers>
  );
};
