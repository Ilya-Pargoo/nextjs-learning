import { FC } from 'react';
import Link from 'next/link';
import { TopStoriesCard } from '../top-stories-card';
<<<<<<<< Updated upstream:src/components/top-stories/components/top-stories-list/TopStoriesList.tsx
import { TopStory } from '@/api/top-stories/types';
========
import { TopStoryType } from '@/api/top-stories/types';
import { generateSlug } from '@/utils/generateSlug';
>>>>>>>> Stashed changes:src/components/top-stories/top-stories-list/TopStoriesList.tsx

type Props = {
  topStories: TopStory[];
};

export const TopStoriesList: FC<Props> = ({ topStories }) => {
  return (
    <ul className="flex flex-col gap-y-5">
      {topStories.map((item, index) => {
        const slug = generateSlug(item.title);
        return (
          <Link href={`/top-stories/${slug}`} key={`${index}-${item.title}`}>
            <TopStoriesCard topStory={item} />
          </Link>
        );
      })}
    </ul>
  );
};
