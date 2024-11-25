import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchTopStories, fetchTopStoriesBySlug } from './fetchers';

enum QueryKeys {
  TOP_STORIES = 'topStories',
  TOP_SINGLE_STORY = 'topSingleStory',
}

export const useTopStories = () =>
  useQuery({
    queryKey: [QueryKeys.TOP_STORIES],
    queryFn: fetchTopStories,
  });

export const prefetchTopStories = async (queryClient: QueryClient) =>
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.TOP_STORIES],
    queryFn: fetchTopStories,
  });

export const useFetchSingleStory = (slug: string) =>
  useQuery({
    queryKey: [QueryKeys.TOP_SINGLE_STORY],
    queryFn: () => fetchTopStoriesBySlug(slug),
  });

export const prefetchSingleStory = async (
  queryClient: QueryClient,
  slug: string
) =>
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.TOP_SINGLE_STORY],
    queryFn: () => fetchTopStoriesBySlug(slug),
  });
