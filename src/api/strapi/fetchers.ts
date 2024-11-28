import { STRAPI_API_TOKEN, STRAPI_API_URL } from '@/constants/variables';
import { DreamStory, StrapiBasicResponse } from './types';

export const fetchDreamStories = async () => {
  const response = await fetch(
    `${STRAPI_API_URL}/dream-stories?populate=image`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
    }
  );

  if (response.ok) {
    const data: StrapiBasicResponse<DreamStory[]> = await response.json();

    return data;
  }

  throw new Error('Failed to fetch data.');
};

export const fetchDreamStoriesBySlug = async (slug: string) => {
  const response = await fetch(
    `${STRAPI_API_URL}/dream-stories/${slug}?populate=image`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
    }
  );

  if (response.ok) {
    const data: StrapiBasicResponse<DreamStory> = await response.json();

    return data;
  }

  throw new Error('Failed to fetch data.');
};
