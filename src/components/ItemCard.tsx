import { Link } from '@heroui/link';

import { unstable_ViewTransition as ViewTransition } from 'react';
import type { RefAttributes } from 'react';
import type { Item, Category, Character, Location, Episode } from '../types';
import { Link as NavLink } from 'react-router';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { Image } from '@heroui/image';
import { Spacer } from '@heroui/spacer';

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

interface ItemCardProps extends RefAttributes<HTMLAnchorElement> {
  item: Item;
  category: Category;
}

export const ItemCard = ({ item, category, ...rest }: ItemCardProps) => {
  return (
    <Card
      as={NavLink}
      to={`/${category}/${item.id}`}
      shadow="sm"
      {...rest}
    >
      <CardBody className="overflow-visible p-0 text-center">
        {isCharacter(item) && (
          <ViewTransition name={`character-image-${item.id}`}>
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
              width="100%"
              shadow="sm"
            />
          </ViewTransition>
        )}
        <Spacer y={2} />
        <Link 
          as="h2" 
          underline="hover" 
          color="warning" 
          size="lg"
          className="inline-block font-bold"
        >
          {item.name}
        </Link>
      </CardBody>
      <CardFooter className="p-4 pt-2 flex-col">
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
      </CardFooter>
    </Card>
  );
};