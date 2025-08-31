import { Outlet } from 'react-router';
import { NavigationBar } from './NavigationBar';
import { Providers } from '../../providers/index';

export const Layout = () => {
  return (
    <Providers>
      <div className="min-h-screen bg-gray-900 text-white">
        <NavigationBar />
        <main className="container mx-auto p-4 dark">
          <Outlet />
        </main>
      </div>
    </Providers>
  );
};
