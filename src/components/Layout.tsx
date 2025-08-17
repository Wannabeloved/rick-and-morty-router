
import { Outlet } from 'react-router';
import { NavigationBar } from './NavigationBar';
import { PreviousPathProvider } from '../context/PreviousPathContext';
import { AuthProvider } from '../context/AuthContext.tsx';

export const Layout = () => {
  return (
    <AuthProvider>
      <PreviousPathProvider>
        <div className="min-h-screen bg-gray-900 text-white">
          <NavigationBar />
          <main className="container mx-auto p-4">
            <Outlet />
          </main>
        </div>
      </PreviousPathProvider>
    </AuthProvider>
  );
};
