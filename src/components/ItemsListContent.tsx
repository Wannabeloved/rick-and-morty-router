import { useItems } from '../hooks/useItems';
import type { Category } from '../types';
import { ItemCard } from './ItemCard';

export const ItemsListContent = ({ category }: { category: Category }) => {

  const items = useItems(category);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} category={category} />
      ))}
    </div>
  );
};