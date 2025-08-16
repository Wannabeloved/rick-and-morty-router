import { Link } from 'react-router';
import { usePreviousPath } from '../context/PreviousPathContext';

export const NotFoundPage = () => {
  const { previousPath } = usePreviousPath();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] text-center p-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl text-gray-300 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to={previousPath || '/'}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {previousPath ? 'Go Back' : 'Go Home'}
      </Link>
    </div>
  );
};