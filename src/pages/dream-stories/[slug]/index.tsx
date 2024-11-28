import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { prefetchSingleStory } from '@/api/strapi/queries';
import { DreamStory } from '@/components/dream-story/DreamStory';

function DreamStoryPage() {
  return <DreamStory />;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  const slug = params?.slug;
  const queryClient = new QueryClient();

  if (!slug) {
    console.error('Invalid dream story slug.');
    return { redirect: { destination: '/not-found' } };
  }

  await prefetchSingleStory(queryClient, slug.toString());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default DreamStoryPage;
