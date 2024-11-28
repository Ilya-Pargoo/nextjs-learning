import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchDreamStories, fetchDreamStoriesBySlug } from './fetchers';

enum QueryKeys {
  DREAM_STORIES = 'dreamStories',
}

export const useDreamStories = () =>
  useQuery({
    queryKey: [QueryKeys.DREAM_STORIES],
    queryFn: fetchDreamStories,
  });

export const prefetchDreamStories = async (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: [QueryKeys.DREAM_STORIES],
    queryFn: fetchDreamStories,
  });

export const useSingleStory = (slug: string) =>
  useQuery({
    queryKey: [QueryKeys.DREAM_STORIES],
    queryFn: () => fetchDreamStoriesBySlug(slug),
  });

export const prefetchSingleStory = async (
  queryClient: QueryClient,
  slug: string
) =>
  queryClient.prefetchQuery({
    queryKey: [QueryKeys.DREAM_STORIES],
    queryFn: () => fetchDreamStoriesBySlug(slug),
  });
