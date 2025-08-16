
import type { Category, Item } from '../types';

const API_BASE_URL = 'http://localhost:3001';

export const getItems = async (category: Category): Promise<Item[]> => {
  const response = await fetch(`${API_BASE_URL}/${category}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${category}`);
  }
  return response.json();
};

export const getItem = async (category: Category, id: string): Promise<Item> => {
  const response = await fetch(`${API_BASE_URL}/${category}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${category} with id ${id}`);
  }
  return response.json();
};
