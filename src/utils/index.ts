import type { Category } from '../types';

export const isValidCategory = (category: string): category is Category => {
  return ['characters', 'locations', 'episodes'].includes(category);
};