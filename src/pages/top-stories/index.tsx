import {
  dehydrate,
  DehydratedState,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { prefetchTopStories } from '@/api/top-stories/queries';
import { TopStories } from '@/components/top-stories/TopStories';

type Props = {
  dehydratedState: DehydratedState;
};

function TopStoriesPage({ dehydratedState }: Props) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <TopStories />
    </HydrationBoundary>
  );
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await prefetchTopStories(queryClient);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default TopStoriesPage;
