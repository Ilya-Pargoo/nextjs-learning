import { dehydrate, QueryClient } from '@tanstack/react-query';
import { prefetchTopStories } from '@/api/top-stories/queries';
import { TopStories } from '@/components/top-stories/TopStories';

function TopStoriesPage() {
  return <TopStories />;
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
