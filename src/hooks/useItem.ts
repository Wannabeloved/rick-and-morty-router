
import { use } from 'react';
import { getItem } from '../api';
import type { Category, Item } from '../types';

const cache = new Map<Category, Promise<Item>>();

export const useItem = (category: Category, id: string): Item => {
    let itemsPromise = cache.get(category);
    
    if (!itemsPromise) {
      itemsPromise = getItem(category, id);
      cache.set(category, itemsPromise);
    }
  
    return use(itemsPromise);
};
