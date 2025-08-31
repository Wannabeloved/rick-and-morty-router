
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
// import { Link } from 'react-router';

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)] text-center p-4">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Rick and Morty
        </span>
        <span className="block text-4xl md:text-5xl mt-2">Universe Explorer</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
        Dive into the multiverse. Explore detailed information about all the characters, locations, and episodes from the show.
      </p>
      <div className="mb-3 flex flex-wrap justify-center gap-4">
        {/* <Link to="/characters" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105">
          Explore Characters
        </Link>
        <Link to="/locations" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105">
          Discover Locations
        </Link>
        <Link to="/episodes" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105">
          View Episodes
        </Link> */}
        <Button 
          as={Link}
          href="/characters"
          color="success"
        >Explore Characters</Button>
        <Button 
          as={Link}
          href="/locations"
          color="primary"
        >Discover Locations</Button>
        <Button 
          as={Link}
          href="/episodes"
          color="secondary"
        >View Episodes</Button>
      </div>
    </div>
  );
};
