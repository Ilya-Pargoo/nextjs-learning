import { API_URL, API_KEY } from '@/constants/variables';
import { TopStories } from './types';
import { generateSlug } from '@/utils/generateSlug';

export const fetchTopStories = async () => {
  const response = await fetch(`${API_URL}/arts.json?api-key=${API_KEY}`);

  if (response.ok) {
    const data: TopStories = await response.json();

    return data;
  }

  throw new Error('Failed to fetch data.');
};

export const fetchTopStoriesBySlug = async (slug: string) => {
  const response = await fetch(`${API_URL}/arts.json?api-key=${API_KEY}`);

  if (response.ok) {
    const data: TopStories = await response.json();

    const singleStory = data.results.filter(
      (item) => generateSlug(item.title) === slug
    );

    if (singleStory.length <= 0) throw new Error('Error fetching article.');

    return singleStory[0];
  }

  throw new Error('Failed to fetch data.');
};
