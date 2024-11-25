import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useFetchSingleStory } from '@/api/top-stories/queries';
import { TopStoryDetails } from './components/top-story-details';

export const TopStory: FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data: topStory,
    isLoading,
    refetch,
    isError,
    error,
  } = useFetchSingleStory(slug?.toString() || '');

  useEffect(() => {
    if (error?.message === 'Error fetching article.') router.push('/404');
  }, [error]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-dotted border-main" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
        <div className="relative mx-auto flex max-w-md items-center gap-2 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
          <strong className="font-bold">Error!</strong>
          <span className={classNames('block', 'sm:inline')}>Server error</span>
          <button
            onClick={() => refetch()}
            className={classNames(
              'rounded bg-red-500 px-4 py-2 text-white',
              'hover:bg-red-600'
            )}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <main>{topStory ? <TopStoryDetails topStory={topStory} /> : null}</main>
  );
};
