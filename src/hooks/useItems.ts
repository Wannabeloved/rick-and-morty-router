
import { use } from 'react';
import { getItems } from '../api';
import type { Category, Item } from '../types';

const cache = new Map<Category, Promise<Item[]>>();

export const useItems = (category: Category ): Item[] => {
  let itemsPromise = cache.get(category);
  
  if (!itemsPromise) {
    itemsPromise = getItems(category)
    cache.set(category, itemsPromise);
  }

  return use(itemsPromise);
};
