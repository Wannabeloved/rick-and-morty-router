
import { useParams } from 'react-router';
import type { Category } from '../types';
import { Suspense } from 'react';
import { Spinner } from '../components/Spinner';
import { ItemsListContent } from '../components/ItemsListContent';
import { isValidCategory } from '../utils';

export const ItemsListPage = () => {
  const { category } = useParams<{ category: Category }>();

  if (!category)
    throw new Error('Category is required');

  if (!isValidCategory(category))
    throw new Error('Category is not valid');

  return (
    <div>
      <h1 className="text-3xl font-bold capitalize mb-6 text-center">{category}</h1>
      <Suspense fallback={<Spinner />}>
        <ItemsListContent category={category} />
      </Suspense>
    </div>
  );
};
