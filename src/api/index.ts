
import type { Category, Item } from '../types';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

const categoryToEndpoint: Record<Category, string> = {
  characters: 'character',
  locations: 'location',
  episodes: 'episode',
};

export const getItems = async (category: Category): Promise<Item[]> => {
  const endpoint = categoryToEndpoint[category];
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);
  if (!response.ok)
    throw new Error(`Failed to fetch ${category}`);

  const data = await response.json();
  return data.results;
};

export const getItem = async (category: Category, id: string): Promise<Item> => {
  const endpoint = categoryToEndpoint[category];
  const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`);
  if (!response.ok)
    throw new Error(`Failed to fetch ${category} with id ${id}`);
  
  return response.json();
};
