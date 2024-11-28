import { dehydrate, QueryClient } from '@tanstack/react-query';
import { prefetchDreamStories } from '@/api/strapi/queries';
import { DreamStories } from '@/components/dream-stories/DreamStories';

function DreamStoriesPage() {
  return <DreamStories />;
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await prefetchDreamStories(queryClient);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default DreamStoriesPage;
