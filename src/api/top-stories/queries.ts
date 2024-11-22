import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchTopStories } from './fetchers';

enum QueryKeys {
  TOP_STORIES = 'topStories',
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

export const useRefetchTopStories = () => {
  const queryClient = useQueryClient();

  const refetchTopStories = () => {
    queryClient.invalidateQueries({ queryKey: ['topStories'] });
  };

  return { refetchTopStories };
};
