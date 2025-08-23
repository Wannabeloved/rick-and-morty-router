
import { useParams } from 'react-router';
import type { Category } from '../types';
import { ItemsListContent } from '../components/ItemsListContent';
import { isValidCategory } from '../utils';

const routesMap: Record<string, Category> = {
  'characters': 'character',
  'locations': 'location',
  'episodes': 'episode',
};

export const ItemsListPage = () => {
  const { category } = useParams<{ category: string }>();

  if (!category)
    throw new Error('Category is required');

  if (!isValidCategory(category))
    throw new Error('Category is not valid');

  const validCategory = routesMap[category]!;

  return (
    <div>
      <h1 className="text-3xl font-bold capitalize mb-6 text-center">{category}</h1>
      <ItemsListContent category={validCategory} />
    </div>
  );
};
