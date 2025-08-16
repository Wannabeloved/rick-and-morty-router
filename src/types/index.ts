
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export type Category = 'characters' | 'locations' | 'episodes';

export type Item = Character | Location | Episode;
