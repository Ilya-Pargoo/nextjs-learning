import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { prefetchSingleStory } from '@/api/top-stories/queries';
import { TopStory } from '@/components/top-story/TopStory';

function TopStoryPage() {
  return <TopStory />;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  const slug = params?.slug;
  const queryClient = new QueryClient();

  if (!slug) {
    console.error('Invalid top story slug.');
    return { redirect: { destination: '/not-found' } };
  }

  await prefetchSingleStory(queryClient, slug.toString());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default TopStoryPage;
