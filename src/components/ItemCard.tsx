import { Link } from 'react-router';
import { unstable_ViewTransition as ViewTransition } from 'react';
import type { RefAttributes } from 'react';
import type { Item, Category, Character, Location, Episode } from '../types';

// Type guards
function isCharacter(item: Item): item is Character {
  return 'species' in item && 'image' in item;
}

function isLocation(item: Item): item is Location {
  return 'dimension' in item;
}

function isEpisode(item: Item): item is Episode {
  return 'episode' in item && 'air_date' in item;
}

interface ItemCardProps extends RefAttributes<HTMLElement> {
  item: Item;
  category: Category;
}

export const ItemCard = ({ item, category, ...rest }: ItemCardProps) => {
  return (
    <Link
      to={`/${category}/${item.id}`}
      className="block bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out transform hover:-translate-y-1"
      {...rest}
    >
      {isCharacter(item) && (
        <ViewTransition name={`character-image-${item.id}`}>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </ViewTransition>
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold text-yellow-400">{item.name}</h2>
        {isCharacter(item) && (
          <p className="text-sm text-gray-300">
            {item.species} - {item.status}
          </p>
        )}
        {isLocation(item) && (
          <p className="text-sm text-gray-300">{item.dimension}</p>
        )}
        {isEpisode(item) && (
          <p className="text-sm text-gray-300">{item.episode}</p>
        )}
      </div>
    </Link>
  );
};