import { API_URL, API_KEY } from '@/constants/variables';
import { TopStories } from './types';

export const fetchTopStories = async () => {
  const response = await fetch(`${API_URL}/arts.json?api-key=${API_KEY}`);

  if (response.ok) {
    const data: TopStories = await response.json();

    return data;
  }

  throw new Error('Failed to fetch data.');
};
