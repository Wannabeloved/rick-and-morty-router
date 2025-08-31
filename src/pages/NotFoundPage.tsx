import { usePreviousPath } from '../context/PreviousPathContext';
import { Link } from '@heroui/link';

export const NotFoundPage = () => {
  const { previousPath } = usePreviousPath();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] text-center p-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl text-gray-300 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link
        href={previousPath || '/'}
      >
        {previousPath ? 'Go Back' : 'Go Home'}
      </Link>
    </div>
  );
};